import Link from "next/link"
import Image from "next/image"

const Logo = ({className}) => {
  return (
    <div className={`${className}`}>
        <Link href="/" className="flex justify-center">
            <Image 
            priority={true} 
            src="/logo.png" 
            alt="CoolNomad" 
            width="0"
            height="0"
            sizes="16vw"
            className="w-auto lg:h-full h-[4rem]"
          />
        </Link>
    </div>
  )
}

export default Logo