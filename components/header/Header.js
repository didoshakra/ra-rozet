import HeaderLogo from "./HeaderLogo";
import HeaderMenu from "./HeaderMenu";
import HeaderSeting from "./HeaderSeting";
import MobileMenuIcon from "./MobileMenuIcon";
import DrawerSwitche from "./DrawerSwitcher";

export default function Header() {
  return (
    <header className="flex h-16  w-full items-center justify-between bg-headMenuBg p-1 px-2 dark:bg-headMenuBgDark">
      {/* <header className="flex h-16  w-full items-center justify-between bg-slate-800"> */}
      {/* Ліве випадаюче меню */}
      <div className="flex">
        <DrawerSwitche />
        <HeaderLogo />
      </div>
      <div className=" flex  items-center justify-end">
        {/*рядок меню */}
        <HeaderMenu />
        {/* іконка мобільного меню/faList/ */}
        <MobileMenuIcon />
        {/* Налаштування(Теми,Мови)*/}
        <HeaderSeting />
      </div>
    </header>
  );
}
