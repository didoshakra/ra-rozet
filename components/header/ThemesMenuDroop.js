//ThemesMenuDroop.js
//Саме випадаюче меню вибору палітри тем
 
import { changeTheme } from "@/utils/helper";

const ThemesMenuDroop = ({ setSetingThemesMenuOpen }) => {
     const togleThemeDefault = (e) => {
        changeTheme("");
       setSetingThemesMenuOpen(false);
     };
     const togleTheme1 = (e) => {
        changeTheme("theme1");
       setSetingThemesMenuOpen(false);
     };
     const togleTheme2 = (e) => {
        changeTheme("theme2");
       setSetingThemesMenuOpen(false);
     };
     const togleTheme3 = (e) => {
        changeTheme("theme3");
       setSetingThemesMenuOpen(false);
     };
  return (
    <div className="absolute right-0 z-10 m-0 p-0">
      {/* <ul className="rounded-lg border border-hMenuBorder bg-hMenuBg  p-1 drop-shadow-md dark:border-hMenuBorderD dark:bg-hMenuBgD">
        <li
          className="flex list-none flex-nowrap  items-center p-1 text-sm font-normal text-hMenuText  hover:bg-hMenuBgHov  hover:text-hMenuTextHov dark:text-hMenuTextD dark:hover:bg-hMenuBgHovD dark:hover:text-hMenuTextHovD"
          onClick={loginToggle}
        >
          <a href="#" onClick={handleSignin} className="flex-nowrap">
            Sing in/ Вхід
          </a>
        </li>
        <li
          className="flex list-none items-center  p-1 text-sm font-normal text-hMenuText hover:bg-hMenuBgHov  hover:text-hMenuTextHov  dark:text-hMenuTextD dark:hover:bg-hMenuBgHovD dark:hover:text-hMenuTextHovD"
          onClick={registrationToggle}
        >
          <a>Registration</a>
        </li>
        <li
          className="flex list-none flex-nowrap  items-center p-1 text-sm font-normal text-hMenuText  hover:bg-hMenuBgHov  hover:text-hMenuTextHov dark:text-hMenuTextD dark:hover:bg-hMenuBgHovD dark:hover:text-hMenuTextHovD"
          onClick={registrationToggle}
        >

          <a>Registration1</a>
        </li>
      </ul> */}
      <div className="grid place-items-center rounded-lg border border-hMenuBorder bg-hMenuBg drop-shadow-md dark:border-hMenuBorderD dark:bg-hMenuBgD">
        <div>
          <button
            className="bg-buttons text-typography m-2 px-8 py-1 text-hMenuText hover:bg-hMenuBgHov  hover:text-hMenuTextHov dark:text-hMenuTextD dark:hover:bg-hMenuBgHovD dark:hover:text-hMenuTextHovD"

            onClick={togleThemeDefault}
          >
            Default
          </button>
          <button
            className="bg-buttons text-typography m-2 px-8 py-1 text-hMenuText hover:bg-hMenuBgHov  hover:text-hMenuTextHov dark:text-hMenuTextD dark:hover:bg-hMenuBgHovD dark:hover:text-hMenuTextHovD"

            onClick={togleTheme1}
          >
            theme 1
          </button>
          <button
            className="bg-buttons text-typography m-2 px-8 py-1 text-hMenuText hover:bg-hMenuBgHov  hover:text-hMenuTextHov dark:text-hMenuTextD dark:hover:bg-hMenuBgHovD dark:hover:text-hMenuTextHovD"

            onClick={togleTheme2}
          >
            theme 2
          </button>
          <button
            className="bg-buttons text-typography m-2 px-8 py-1 text-hMenuText hover:bg-hMenuBgHov  hover:text-hMenuTextHov dark:text-hMenuTextD dark:hover:bg-hMenuBgHovD dark:hover:text-hMenuTextHovD"
            onClick={togleTheme3}
          >
            theme 3
          </button>
        </div>
      </div>
    </div>
  );
};

export default ThemesMenuDroop;
