//HeaderLogo.js

import Link from "next/link";
import Image from "next/image";

const HeaderLogo = () => {
  return (
    // <div className="flex min-w-[200px] items-center  justify-start px-0 md:px-2  ">
    <div className="flex items-center  justify-start">
      {/* <Link href="/" className=" w-[70px], h-[50px] "> */}
      {/* <Link href="/" className=" w-[70px], h-[50px] items-center"> */}
      <Link href="/" className="items-center">
        <Image
          //   src="/images/home/sun_man_hands-oval-ra-red.png"
          src="/images/home/sun_man_hands-oval-ra-red-64-41.png"
          height={41} //Завжди Avto?
          width={64} //Чомусь має пріорітет
          style={{ width: 64, height: 40 }} //Точні розміри-знімає попередження //If you use CSS to change the size of your image, also include the styles 'width: "auto"' or 'height: "auto"' to maintain the aspect ratio
          //   fill
          alt="Logo"
        />
      </Link>
      <Link href="/">
        <div className="justify-begin flex items-center px-1 text-xl font-bold italic text-hMenuText dark:text-hMenuTextD md:text-2xl md:px-2">
          RAecom
        </div>
      </Link>
      {/* ========================================================================== */}
    </div>
  );
};
export default HeaderLogo;
