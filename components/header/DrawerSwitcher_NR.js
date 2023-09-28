//Іконки з @heroicons (можуть бути і свої)
"use client";

import { useState } from "react";
import { useTheme } from "next-themes";
import resolveConfig from "tailwindcss/resolveConfig"; //отримання змінних з tailwind.config
import tailwindConfig from "@/tailwind.config"; //отримання змінних з tailwind.config
import DrawerDroop from "./DrawerDroop";
import BackShadow from "./BackShadow"; //Затемнення екрану
// import IconMenu from "@/components/ui/icons/head/IconMenu"; //рисочки
import { Bars3Icon } from "@heroicons/react/24/outline";
// import { Bars3Icon } from "@heroicons/react/24/solid";

export default function DrawerSwitcher() {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const { resolvedTheme } = useTheme();
  const { theme } = resolveConfig(tailwindConfig); //отримання змінних з tailwind.config

  //   const colorIcon =
  //     resolvedTheme === "dark"
  //       ? theme.colors.headMenuTextDark
  //       : theme.colors.headMenuText;
  //   const iconSize = "25";

  //   const drawerOpenToggle = () => {
  //     setDrawerOpen(!drawerOpen);
  //     // console.log("drawerSwitcher/drawerOpen:", drawerOpen)
  //   };

  return (
    <div className="relative flex justify-start">
      <button
        // className="flex items-center justify-center rounded-lg p-2 transition-colors hover:bg-zinc-200 dark:hover:bg-zinc-500"
        className="hover:bg-bgHeadMenuHover flex items-center justify-center rounded-full p-2 transition-colors duration-300 ease-in-out dark:hover:bg-zinc-500"
        // className="aling-center flex items-center justify-center rounded-full hover:bg-lime-300"
        // onClick={drawerOpenToggle}
        onClick={(e) => setDrawerOpen(!drawerOpen)}
      >
        {/* <IconMenu width={iconSize} height={iconSize} colorFill={colorIcon} /> */}
        <Bars3Icon className="h-8 w-8 font-bold text-headMenuText dark:text-headMenuTextDark" />
      </button>
      {/*Затемнення екрану */}
      {drawerOpen && <BackShadow setDrawerOpen={setDrawerOpen} />}
      {/* Випадаюче меню */}
      <DrawerDroop drawerOpen={drawerOpen} setDrawerOpen={setDrawerOpen} />
    </div>
  );
}
