//MobileMenuIcon.js ////Іконка(своя) яка викликає MobileMenuDroop-випадаюче меню
"use client";
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
        className="z-0 flex items-center rounded-full hover:bg-hIconBgHov dark:bg-hIconBgHovD"
        // onClick={() => props.mobileMenuToggle(props.mobileMenuOpen ? false : true)}
        title="меню"
      >
        <svg
          className="h-8 w-8 text-hIcon dark:text-hIconD"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
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
};

export default MobileMenuIcon;
