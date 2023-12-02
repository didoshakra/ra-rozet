import HeaderLogo from "./HeaderLogo";
import HeaderMenu from "./HeaderMenu";
import HeaderMenuRight from "./HeaderMenuRight";
// import MobileMenuIcon from "../1old/MobileMenuIcon";
import HeaderMobileDroopMenu from "./HeaderMobileDroopMenu";
import DrawerSwitche from "./DrawerSwitcher";

export default function Header() {
  return (
    <header className="mx-auto my-auto flex h-16 w-full items-center justify-between bg-hMenuBg  dark:bg-hMenuBgD">
      {/* Ліве випадаюче меню */}
      <div className="flex">
        <DrawerSwitche />
        <HeaderLogo />
      </div>
      <div className=" flex  items-center justify-end">
        {/*рядок меню */}
        <HeaderMenu />
        {/* мобільне меню/ Показує по style{md:hidden}*/}
        {/* <HeaderMobileDroopMenu /> */}
        {/* Налаштування(Теми,Мови) / Показує по style{hidden md:flex}*/}
        {/* <HeaderMenuRight /> */}
      </div>
    </header>
  );
}
