//HeaderMenu.js
"use client";

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
          className="dark:text-hMenuTextD items-center whitespace-nowrap pr-1 font-sans text-lg font-bold text-hMenuText hover:underline"
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
