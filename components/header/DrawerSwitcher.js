"use client";

import { useState, useContext } from "react";
import DrawerDroop from "./DrawerDroop";
import Backdrop from "./Backdrop";
// import IconMenu from " ui/svg/head/IconMenu" //рисочки
import IconMenu from "@/components/ui/icons/head/IconMenu"; //рисочки

export default function DrawerSwitcher({thrme}) {
  const [drawerOpen, setDrawerOpen] = useState(false);
//   theme("colors.blue.500");
const colors = require("tailwindcss/colors");

//   const colorIconDark = theme('headMenuText);;
  const colorIcon = theme('headMenuText');
//   const colorIcon = theme = "light" ? "#828C46" : "#82FF46";
  const iconSize = "25";

  const drawerOpenToggle = () => {
    setDrawerOpen(!drawerOpen);
    // console.log("drawerSwitcher/drawerOpen:", drawerOpen)
  };

  return (
    <div className="relative flex justify-start bg-red-300">
      <button
        // className="mx-1 flex items-center justify-center bg-bgHeadMenu"
        className=" 'h-6 aling-center  flex w-7 items-center justify-center rounded-full hover:bg-slate-400"
        // className="aling-center flex items-center justify-center rounded-full hover:bg-lime-300"
        onClick={drawerOpenToggle}
      >
        <IconMenu width={iconSize} height={iconSize} colorFill={colorIcon} />
      </button>
      {/* Випадаюче меню */}
      {/* {drawerOpen && <Backdrop setDrawerOpen={setDrawerOpen} />} */}
      {/* <DrawerDroop drawerOpen={drawerOpen} setDrawerOpen={setDrawerOpen} /> */}
    </div>
  );
}
