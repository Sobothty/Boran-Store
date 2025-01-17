import {ShoppingCart} from 'lucide-react'

import Image from 'next/image'
import Link from 'next/link'

const Navbar = () => {
    return (
        <div className="sticky top-0 z-1- py-2 px-10 flex justify-between items-center bg-white">
            <Link href="/">
                <Image src="/logo.png" alt="Boran Store Logo" width={130} height={100} />
            </Link>
            <div>
                <Link href="/">Hme</Link>
            </div>

            <div>
                <Link href="/cart" className='flex items-center gap-3 border rounded-lg px-2 py-1 hover:bg-black hover:text-white'>
                    <ShoppingCart />
                    <p className='text-base-bold'>Cart (0)</p>
                </Link>
            </div>
        </div>
    )
}

export default Navbar