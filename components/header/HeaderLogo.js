//HeaderLogo.js

import Link from "next/link";
import Image from "next/image";

const HeaderLogo = () => {
  return (
    <div className=" justify-begin flex min-w-[200px]  items-center px-0 md:px-2  ">
      <Link href="/" className=" w-[70px], h-[50px] ">
        <Image
          src="/images/home/sun_man_hands-oval-ra-red.png"
          height={50} //Завжди Avto?
          width={80} //Чомусь має пріорітет
          style={{ width: 80, height: 50 }} //Точні розміри-знімає попередження //If you use CSS to change the size of your image, also include the styles 'width: "auto"' or 'height: "auto"' to maintain the aspect ratio
          //   fill
          alt="Logo"
        />
      </Link>
      <Link href="/">
        <div className="justify-begin flex items-center px-4 text-2xl font-bold italic text-headMenuText dark:text-headMenuTextDark md:text-2xl">
          RAecom1
        </div>
      </Link>
      {/* ========================================================================== */}
    </div>
  );
};
export default HeaderLogo;
