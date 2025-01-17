import User from "@/lib/models/User";
import { connectToDB } from "@/lib/mongoDB";
import { auth } from "@clerk/nextjs/server";
import { connect } from "http2";
import { NextRequest, NextResponse } from "next/server";

export const POST =async (req: NextRequest) => {
    try {
        const { userId } = await auth()

        await connectToDB()

        if(!userId){
            return new NextResponse("Unauthorized", { status : 401 })
        }

        const user = await User.findOne({ clerkId: userId })

        if(!user){
            return new NextResponse("User not found", { status : 404 })
        }

        const { productId } = await req.json()

        if(!productId){
            return new NextResponse("Product Id Required", { status : 400 })
        }

        const isLiked = user.wishlist.includes(productId)

        if(isLiked){
            user.wishlist = user.wishlist.filter((id: String) => id !== productId)
        }else{
            user.wishlist.push(productId)
        }

        await user.save()
        return NextResponse.json(user, { status : 200 })

    } catch (error) {
        console.log("[wishlist_POST", error);
        return new NextResponse("Internal Server Error", { status : 500 })
    }
}