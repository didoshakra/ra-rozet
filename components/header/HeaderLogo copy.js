//HeaderLogo.js

import Link from "next/link"
import Image from "next/image"

const HeaderLogo = () => {

  return (
    // <div className="flex items-center px-4 md:px-12 py-2 justify-begin ">
    <div className=" flex justify-begin items-center  min-w-[200px] px-0 md:px-2  ">
      <Link href="/">
        {/* <Image src="/images/home/StainlessSteelBoat.png" width={100} height={20} alt="Logo" /> */}
        {/* <Image src="/images/home/sun_man_hands-oval-ra-red.png" width={80} height={20} alt="Logo" /> */}
        <Image src="/images/home/irunka-logo.png" width={80} height={20} alt="Logo" />
      </Link>
      {/* <Link href="/">
        <div className="flex text-2xl md:text-2xl font-bold italic text-headMenuText items-center px-4 justify-begin">
          RAproducts
        </div>
      </Link> */}
      {/* ========================================================================== */}
    </div>
  )
}
export default HeaderLogo
