//HeaderSetingDroop.js
//Мобіле-Шестерня(іконка)
//*********************************************************************************** */
//Щоб відключити всі *Open=(false), треба відключити при клацанні поза обєктом function useOutsideAlerter(ref)
// і відключення у всіх onClick(*togle) в самомк об'єкті.
//********************************************************************************** */

"use client";
import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { useTheme } from "next-themes";
import UserMenuDroop from "./UserMenuDroop";
import HeaderThemesDroopMenu from "./HeaderThemesDroopMenu";
import avatar from "@/public/avatar/2.jpg";

const HeaderSetingDroopMenu = () => {
  const { resolvedTheme, setTheme } = useTheme();
  const [profile, setprofile] = useState("admin");

  const [setingMenuOpen, setSetingMenuOpen] = useState(false);
  const [userMenuOpen, setUserMenuOpen] = useState(false);
  const [themesDroopMenuOpen, setThemesDroopMenuOpen] = useState(false);

  //   console.log("profile=", profile);
  const userMenuOpenToggle = () => {
    setUserMenuOpen(!userMenuOpen);
    let newUser = "admin";
    if (profile === "admin") {
      newUser = "user";
    }
    setprofile(newUser);
    // console.log("userSwitcher.js/newUser=", newUser)
    console.log("profile=", profile);
    // dispatch({ type: "PROFILE", payload: newUser }); //Змінюємо state.user
  };

  //*************Для клацання поза обєктом
  const ref_HeaderSetingDroopMenu = useRef(null);

  useEffect(() => {
    const handleOutSideClick = (event) => {
      if (!ref_HeaderSetingDroopMenu.current?.contains(event.target)) {
        // alert("Outside Clicked.");
        // console.log("Outside Clicked. ");
        setSetingMenuOpen(false);
        setUserMenuOpen(false);
      }
    };

    window.addEventListener("mousedown", handleOutSideClick);

    return () => {
      window.removeEventListener("mousedown", handleOutSideClick);
    };
  }, [ref_HeaderSetingDroopMenu]);

  //випадаюче меню Налаштувань
  const setingMenuToggle = () => {
    setSetingMenuOpen(!setingMenuOpen);
    setUserMenuOpen(false); //Закриваєм меню
    // console.log("setingMenuToggle/setingMenuOpen=", setingMenuOpen);
  };
  //Зміна в newTheme Context
  const themeMenuToggle = () => {
    setTheme(resolvedTheme === "dark" ? "light" : "dark");
    setUserMenuOpen(false);
    setSetingMenuOpen(false);
  };

  return (
    <div
      ref={ref_HeaderSetingDroopMenu}
      className="relative m-0 items-center p-0 md:hidden"
    >
      <button
        className="flex items-center justify-center rounded-full p-1 transition-colors hover:bg-hIconBgHov dark:hover:bg-hIconBgHovD"
        onClick={setingMenuToggle}
      >
        {/* іконка seting*/}
        <svg
          className="h-8 w-8 text-hIcon dark:text-hIconD"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          strokeWidth="2"
          stroke="currentColor"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          {" "}
          <path stroke="none" d="M0 0h24v24H0z" />{" "}
          <path d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 0 0 2.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 0 0 1.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 0 0 -1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 0 0 -2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 0 0 -2.573 -1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 0 0 -1.065 -2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 0 0 1.066 -2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />{" "}
          <circle cx="12" cy="12" r="3" />
        </svg>
      </button>

      {/* список головного меню */}
      <div
        className={`${
          setingMenuOpen ? "absolute" : "hidden"
        } right-0 z-10 m-0 p-0`}
      >
        <ul
          className={`border-menuBorder bg-menuBg dark:border-menuBorderD  dark:bg-menuBgD m-0 w-[150px] rounded-lg border p-1 drop-shadow-md`}
        >
          <li className="text-menuText hover:bg-menuBgHov hover:text-menuTextHov dark:text-menuTextD  dark:hover:bg-menuBgHovD dark:hover:text-menuTextHovD flex w-full list-none  items-center  p-1 text-sm font-normal">
            <HeaderThemesDroopMenu />
          </li>
          <li
            className="text-menuText hover:bg-menuBgHov hover:text-menuTextHov  dark:text-menuTextD dark:hover:bg-menuBgHovD dark:hover:text-menuTextHovD flex list-none  items-center  p-1 text-sm font-normal"
            onClick={() => setUserMenuOpen(!userMenuOpen)}
          >
            {/* // Від цього об'єкту li відраховуються відступи в випадаючих меню мов  */}
            <p>
              {profile === "admin" ? (
                <Image
                  src={avatar}
                  alt={"avatar"}
                  width={32}
                  height={32}
                  className="rounded-full border"
                />
              ) : (
                <svg
                  className="h-8 w-8 text-hIconD dark:text-hIcon"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                  />
                </svg>
              )}
            </p>
            <p>Профіль</p>
          </li>
          {/* Випадаюче меню User */}
          {userMenuOpen && (
            <UserMenuDroop
              userMenuOpen={userMenuOpen}
              setUserMenuOpen={setUserMenuOpen}
            />
          )}
        </ul>
      </div>
    </div>
  );
};

export default HeaderSetingDroopMenu;
