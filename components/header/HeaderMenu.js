//HeaderMenu.js
"use client"

import Link from "next/link";

const HeaderMenu = () => {
  const menu = [
    {
      a: "Про нас",
      link: "/about",
    },
    {
      a: "Examples",
      link: "/examples",
    },
  ];
  const renderMenu = () => {
    return menu.map((item, index) => {
      return (
        <li
          //   className="hover:underline pr-1 whitespace-nowrap text-lg font-sans font-bold items-center text-headMenuText dark:text-headMenuTextDark"
          //   className="hover:underline pr-1 whitespace-nowrap text-lg font-sans font-bold items-center text-lime-700 "
          className="text- items-center whitespace-nowrap pr-1 font-sans text-lg font-bold text-headMenuText hover:underline dark:text-headMenuTextDark"
          key={index}
        >
          <Link href={item.link}>{item.a}</Link>
        </li>
      );
    });
  };

  return (
    <div className=" hidden md:mx-1 md:flex md:justify-end   ">
      {/* Меню для десктопа */}
      <ul className=" flex justify-end gap-3">{renderMenu()}</ul>
    </div>
  );
};

export default HeaderMenu;
