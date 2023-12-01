"use client";

import { useState } from "react";
import DrawerDroop from "./DrawerDroop";
import BackShadow from "./BackShadow"; //Затемнення екрану

export default function DrawerSwitcher({ thrme }) {
  const [drawerOpen, setDrawerOpen] = useState(false);

  return (
    <div className="relative flex justify-start">
      <button
        className="flex items-center justify-center rounded-full p-2 hover:bg-hIconBgHov dark:hover:bg-hIconBgHovD"
        onClick={(e) => setDrawerOpen(!drawerOpen)}
      >
        <svg
          class="h-8 w-8 text-hMenuText dark:text-hMenuTextD "
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
      </button>
      {/*Затемнення екрану */}
      {drawerOpen && <BackShadow setDrawerOpen={setDrawerOpen} />}
      <DrawerDroop drawerOpen={drawerOpen} setDrawerOpen={setDrawerOpen} />
    </div>
  );
}
