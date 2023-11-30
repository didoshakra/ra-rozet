"use client";

import { useState, useContext } from "react";
import { useTheme } from "next-themes";
import resolveConfig from "tailwindcss/resolveConfig"; //отримання змінних з tailwind.config
import tailwindConfig from "@/tailwind.config"; //отримання змінних з tailwind.config
import DrawerDroop from "./DrawerDroop";
import BackShadow from "./BackShadow"; //Затемнення екрану
// import Backdrop from "./Backdrop";
import { Bars3Icon } from "@heroicons/react/24/outline";
// import { Bars3Icon } from "@heroicons/react/24/solid";

export default function DrawerSwitcher({ thrme }) {
  const [drawerOpen, setDrawerOpen] = useState(false);

  return (
    <div className="relative flex justify-start">
      <button
        className="hover:bg-bgHeadMenuHover flex items-center justify-center rounded-full p-2 dark:hover:bg-zinc-500"
        onClick={(e) => setDrawerOpen(!drawerOpen)}
      >
        {/* <IconMenu width={iconSize} height={iconSize} colorFill={colorIcon} /> */}
        <svg
          class="h-8 w-8 text-headMenuText dark:text-headMenuTextDark"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          stroke-width="2"
          stroke="currentColor"
          fill="none"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          {" "}
          <path stroke="none" d="M0 0h24v24H0z" />{" "}
          <line x1="4" y1="6" x2="20" y2="6" />{" "}
          <line x1="4" y1="12" x2="20" y2="12" />{" "}
          <line x1="4" y1="18" x2="20" y2="18" />
        </svg>
        {/* <Bars3Icon className="h-8 w-8 font-bold text-headMenuText dark:text-headMenuTextDark" /> */}
      </button>
      {/*Затемнення екрану */}
      {drawerOpen && <BackShadow setDrawerOpen={setDrawerOpen} />}
      <DrawerDroop drawerOpen={drawerOpen} setDrawerOpen={setDrawerOpen} />
    </div>
  );
}
