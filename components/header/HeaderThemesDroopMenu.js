//HeaderSetingDroop.js
//Мобіле-Шестерня(іконка)
//*********************************************************************************** */
//Щоб відключити всі *Open=(false), треба відключити при клацанні поза обєктом function useOutsideAlerter(ref)
// і відключення у всіх onClick(*togle) в самомк об'єкті.
//********************************************************************************** */

"use client";
import { useState, useRef, useEffect } from "react";
import { useTheme } from "next-themes";
// import UserSwitcherDroop from "./UserMenuDroop";
import ThemesMenuDroop from "./ThemesMenuDroop";

const HeaderThemesDroopMenu = () => {
  const { resolvedTheme, setTheme } = useTheme();
  const [profile, setprofile] = useState("admin");

  const [themesMenuOpen, setThemesMenuOpen] = useState(false); //Для випадання верхнього меню
  const [setingThemesMenuOpen, setSetingThemesMenuOpen] = useState(false); //Для випадання меню вибору теми

  //   console.log("profile=", profile);
//   const setingThemesMenuOpenToggle = () => {
//     setSetingThemesMenuOpen(!setingThemesMenuOpen);
//     let newUser = "admin";
//     if (profile === "admin") {
//       newUser = "user";
//     }
//     setprofile(newUser);
//     // console.log("userSwitcher.js/newUser=", newUser)
//     console.log("profile=", profile);
//     // dispatch({ type: "PROFILE", payload: newUser }); //Змінюємо state.user
//   };

  //*************Для клацання поза обєктом
  const ref_HeaderThemesDroopMenu = useRef(null);

  useEffect(() => {
    const handleOutSideClick = (event) => {
      if (!ref_HeaderThemesDroopMenu.current?.contains(event.target)) {
        // alert("Outside Clicked.");
        // console.log("Outside Clicked. ");
        setThemesMenuOpen(false);
        setSetingThemesMenuOpen(false);
      }
    };

    window.addEventListener("mousedown", handleOutSideClick);

    return () => {
      window.removeEventListener("mousedown", handleOutSideClick);
    };
  }, [ref_HeaderThemesDroopMenu]);

  //випадаюче меню Налаштувань
  const setingMenuToggle = () => {
    setThemesMenuOpen(!themesMenuOpen);
    setSetingThemesMenuOpen(false); //Закриваєм меню
    // console.log("setingMenuToggle/themesMenuOpen=", themesMenuOpen);
  };
  //Зміна в newTheme Context
  const themeMenuToggle = () => {
    setTheme(resolvedTheme === "dark" ? "light" : "dark");
    setSetingThemesMenuOpen(false);
    setThemesMenuOpen(false);
  };

  return (
    // <div ref={wRef_HeaderThemesDroopMenu} className="relative m-0 p-0">
    <div
      ref={ref_HeaderThemesDroopMenu}
      className="relative  list-none text-base font-medium"
    >
      {/* іконка seting*/}
      {/* <div className="HeaderThemesDroopMenu__icon" onClick={setingMenuToggle}> */}
      <button className="flex items-center" onClick={setingMenuToggle}>
        <p
          className="flex items-center justify-center rounded-full p-2 transition-colors hover:bg-hBgHov dark:hover:bg-hBgHovD"
          onClick={setingMenuToggle}
        >
          {resolvedTheme === "dark" ? (
            // місяць
            <svg
              className="h-8 w-8  dark:text-hTextD dark:hover:text-hTextHovD"
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
              <circle cx="12" cy="12" r="3" />{" "}
              <line x1="12" y1="5" x2="12" y2="3" />{" "}
              <line x1="17" y1="7" x2="18.4" y2="5.6" />{" "}
              <line x1="19" y1="12" x2="21" y2="12" />{" "}
              <line x1="17" y1="17" x2="18.4" y2="18.4" />{" "}
              <line x1="12" y1="19" x2="12" y2="21" />{" "}
              <line x1="7" y1="17" x2="5.6" y2="18.4" />{" "}
              <line x1="6" y1="12" x2="4" y2="12" />{" "}
              <line x1="7" y1="7" x2="5.6" y2="5.6" />
            </svg>
          ) : (
            // сонце
            <svg
              className="h-8 w-8 text-hText hover:text-hTextHov "
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
              <path d="M16.2 4a9.03 9.03 0 1 0 3.9 12a6.5 6.5 0 1 1 -3.9 -12" />
            </svg>
          )}
        </p>
        <p className="md:hidden">Теми</p>
      </button>

      {/* Випадаюче меню */}
      <div
        className={`${
          themesMenuOpen ? "absolute" : "hidden"
        } font-bol right-0 z-10 m-0 p-0 `}
      >
        {/* <ul className="HeaderThemesDroopMenu__dropdown"> */}
        <ul
          //top-12  inline-block w-[350px] float-left- розміщує елемент зліва чи справа від контейнера, дозволяючи тексту та вбудованим елементам обтікати його.
          //   className={`${
          //     themesMenuOpen ? "absolute" : "hidden"
          //   } left-[-100px] m-0 w-[150px] rounded-lg  border border-hBorder bg-hBg p-1 drop-shadow-md dark:border-hBorderD dark:bg-hBgD`}
          className={`m-0 w-[180px] rounded-lg  border border-hBorder bg-hBg p-1 drop-shadow-md dark:border-hBorderD dark:bg-hBgD`}
        >
          <li
            className="active:text-hTextAct dark:active:text-hTextAct group flex flex-nowrap list-none items-center space-x-1 p-1 text-hText hover:bg-hBgHov hover:text-hTextHov dark:text-hTextD dark:hover:bg-hBgHovD dark:hover:text-hTextHovD"
            onClick={themeMenuToggle}
            //   onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
          >
            {/* <FontAwesomeIcon icon={themeTypeLight ? faSun : faMoon} /> */}
            <p
              title="Темна/світла"
              // onClick={() =>
              //   setTheme(resolvedTheme === "dark" ? "light" : "dark")
              // }
            >
              {resolvedTheme === "dark" ? (
                <svg
                  // group-hover - при наведенні на (group) буде змінюватись */
                  className="h-8 w-8  dark:hover:text-hTextHovD dark:group-hover:text-hTextHovD"
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
                  <path d="M16.2 4a9.03 9.03 0 1 0 3.9 12a6.5 6.5 0 1 1 -3.9 -12" />
                </svg>
              ) : (
                <svg
                  // group-hover - при наведенні на (group) буде змінюватись */
                  className="h-8 w-8 text-hText group-hover:text-hTextHov "
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
                  <circle cx="12" cy="12" r="3" />{" "}
                  <line x1="12" y1="5" x2="12" y2="3" />{" "}
                  <line x1="17" y1="7" x2="18.4" y2="5.6" />{" "}
                  <line x1="19" y1="12" x2="21" y2="12" />{" "}
                  <line x1="17" y1="17" x2="18.4" y2="18.4" />{" "}
                  <line x1="12" y1="19" x2="12" y2="21" />{" "}
                  <line x1="7" y1="17" x2="5.6" y2="18.4" />{" "}
                  <line x1="6" y1="12" x2="4" y2="12" />{" "}
                  <line x1="7" y1="7" x2="5.6" y2="5.6" />
                </svg>
              )}
            </p>
            <p>Темна/світла</p>
          </li>
          <li
            className="group flex list-none items-center space-x-1 p-1 text-hText  hover:bg-hBgHov hover:text-hTextHov dark:text-hTextD dark:hover:bg-hBgHovD dark:hover:text-hTextHovD "
            onClick={() => setSetingThemesMenuOpen(!setingThemesMenuOpen)}
          >
            {/* // Від цього об'єкту li відраховуються відступи в випадаючих меню мов  */}
            {/* іконка валів/малювати */}
            <p>
              <svg
                className="h-8 w-8 text-hText group-hover:text-hTextHov dark:text-hTextD dark:group-hover:text-hTextHov"
                // class="h-8 w-8 text-red-500"
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
                <rect x="5" y="3" width="14" height="6" rx="2" />{" "}
                <path d="M19 6h1a2 2 0 0 1 2 2a5 5 0 0 1 -5 5l-5 0v2" />{" "}
                <rect x="10" y="15" width="4" height="6" rx="1" />
              </svg>
              {/* іконка фарби */}
              {/* <svg
                class="h-8 w-8 text-red-500"
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
                <path d="M12 21a9 9 0 1 1 0 -18a9 8 0 0 1 9 8a4.5 4 0 0 1 -4.5 4h-2.5a2 2 0 0 0 -1 3.75a1.3 1.3 0 0 1 -1 2.25" />{" "}
                <circle cx="7.5" cy="10.5" r=".5" fill="currentColor" />{" "}
                <circle cx="12" cy="7.5" r=".5" fill="currentColor" />{" "}
                <circle cx="16.5" cy="10.5" r=".5" fill="currentColor" />
              </svg> */}
            </p>
            <p>Теми</p>
          </li>
          {/* Випадаюче меню Теми */}
          {setingThemesMenuOpen && (
            <ThemesMenuDroop
              setSetingThemesMenuOpen={setSetingThemesMenuOpen}
            />
          )}
        </ul>
      </div>
    </div>
  );
};

export default HeaderThemesDroopMenu;
