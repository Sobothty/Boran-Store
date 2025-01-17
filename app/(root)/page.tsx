import Image from "next/image"
export default function home() {
  return (
    <>
      <Image
        src="/Why-is-Cambodian-silk-considered-unique.jpg"
        alt="banner"
        width={1000}
        height={800}
        className="w-screen h-screen" />
    </>
  )
}
