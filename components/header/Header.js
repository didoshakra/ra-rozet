import HeaderLogo from "./HeaderLogo";
import HeaderMenu from "./HeaderMenu";
import HeaderMenuRight from "./HeaderMenuRight";
// import MobileMenuIcon from "../1old/MobileMenuIcon";
import HeaderMobileDroopMenu from "./HeaderMobileDroopMenu";
import DrawerSwitche from "./DrawerSwitcher";

export default function Header() {
  return (
    <header className="m-y-0 mx-0 flex h-12 max-w-full items-center justify-between bg-hMenuBg  dark:bg-hMenuBgD md:h-14">
      {/* Ліве випадаюче меню */}
      <div className="flex items-center justify-start">
        <DrawerSwitche />
        <HeaderLogo />
      </div>
      <div className=" flex items-center justify-end">
        {/*рядок меню */}
        <HeaderMenu />
        {/* мобільне меню/ Показує по style{md:hidden}*/}
        <HeaderMobileDroopMenu />
        {/* Налаштування(Теми,Мови) / Показує по style{hidden md:flex}*/}
        <HeaderMenuRight />
      </div>
    </header>
  );
}
