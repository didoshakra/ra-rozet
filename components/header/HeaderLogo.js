//HeaderLogo.js

import Link from "next/link"
import Image from "next/image"

const HeaderLogo = () => {

  return (
    <div className=" flex justify-begin items-center  min-w-[200px] px-0 md:px-2  ">
      <Link href="/">
        <Image src="/images/home/sun_man_hands-oval-ra-red.png" width={80} height={20} alt="Logo" />
      </Link>
      <Link href="/">
        <div className="flex text-2xl md:text-2xl font-bold italic text-headMenuText items-center px-4 justify-begin">
          RAecom
        </div>
      </Link>
      {/* ========================================================================== */}
    </div>
  )
}
export default HeaderLogo
