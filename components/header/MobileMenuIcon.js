//MobileMenuIcon.js ////Іконка(своя) яка викликає MobileMenuDroop-випадаюче меню
"use client"
import { useState } from "react";

const MobileMenuIcon = (props) => {

 const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
 const mobileMenuToggle = (arg) => {
   setMobileMenuOpen(arg);
   // console.log("Header.js/mobileMenuOpen2/arg =", arg)
 };
  return (
    // Навігація
    // <div className="mx-1 flex justify-center aling-center  md:hidden">
    <div className="flex items-center  md:hidden">
      {/* іконка мобільного меню */}
      <button
        className="z-0 flex items-center rounded-full hover:bg-lime-300"
        // onClick={() => props.mobileMenuToggle(props.mobileMenuOpen ? false : true)}
        title="меню"
      >
        <svg
          class="h-8 w-8 text-headMenuText"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          {" "}
          <line x1="8" y1="6" x2="21" y2="6" />{" "}
          <line x1="8" y1="12" x2="21" y2="12" />{" "}
          <line x1="8" y1="18" x2="21" y2="18" />{" "}
          <line x1="3" y1="6" x2="3.01" y2="6" />{" "}
          <line x1="3" y1="12" x2="3.01" y2="12" />{" "}
          <line x1="3" y1="18" x2="3.01" y2="18" />
        </svg>
      </button>
      {/* Список мобильного меню */}
      {mobileMenuOpen && (
        <MobileMenuDroop
          menu={menu}
          mobileMenuOpen={mobileMenuOpen}
          mobileMenuToggle={mobileMenuToggle}
        />
      )}
    </div>
  );
}

export default MobileMenuIcon
