//HeaderLogo.js

import Link from "next/link";
import Image from "next/image";

const HeaderLogo = () => {
  return (
    <div className=" justify-begin flex min-w-[200px]  items-center px-0 md:px-2  ">
      <Link href="/">
        <Image
          src="/images/home/sun_man_hands-oval-ra-red.png"
          height={50} //Завжди Avto?
          width={80} //Чомусь має пріорітет
          alt="Logo"
        //   style={{ width: "auto", height: 50 }} //height-пріорітет !!!є помилка
          style={{ width: 70, height: 50 }} //Точні розміри
        />
      </Link>
      <Link href="/">
        <div className="justify-begin flex items-center px-4 text-2xl font-bold italic text-headMenuText dark:text-darkHeadMenuText md:text-2xl">
          RAecom
        </div>
      </Link>
      {/* ========================================================================== */}
    </div>
  );
};
export default HeaderLogo;
