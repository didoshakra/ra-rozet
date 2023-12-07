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
      <div className="grid place-items-center rounded-lg border border-hBorder bg-hBg drop-shadow-md dark:border-hBorderD dark:bg-hBgD">
        <div>
          <button
            className="w-full bg-themeDefBg  py-1 text-base text-hText hover:bg-hBgHov  hover:text-hTextHov dark:text-hTextD dark:hover:bg-hBgHovD dark:hover:text-hTextHovD"
            onClick={togleThemeDefault}
          >
            Основна
          </button>
          <button
            className="w-full bg-theme1Bg  py-1 text-base text-hText hover:bg-hBgHov  hover:text-hTextHov dark:text-hTextD dark:hover:bg-hBgHovD dark:hover:text-hTextHovD"
            onClick={togleTheme1}
          >
            Тема 1
          </button>
          <button
            className="text-typography w-full bg-theme2Bg  py-1 text-hText hover:bg-hBgHov  hover:text-hTextHov dark:text-hTextD dark:hover:bg-hBgHovD dark:hover:text-hTextHovD"
            onClick={togleTheme2}
          >
            Тема 2
          </button>
          <button
            className="w-full bg-theme3Bg  py-1 text-base text-hText hover:bg-hBgHov  hover:text-hTextHov dark:text-hTextD dark:hover:bg-hBgHovD dark:hover:text-hTextHovD"
            onClick={togleTheme3}
          >
            Тема 3
          </button>
        </div>
      </div>
    </div>
  );
};

export default ThemesMenuDroop;
