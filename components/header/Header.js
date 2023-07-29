import HeaderLogo from "./HeaderLogo"
import HeaderMenu from "./HeaderMenu"
import HeaderSeting from "./HeaderSeting"
import MobileMenuIcon from "./MobileMenuIcon"

export default function Header() {
  return (
    // <header className="fixed z-50 top-16 px-2 md:top-6 h-16 w-full dark:bg-slate-800 flex justify-between items-center    bg-white  ">
    // <header className="px-2 h-16 w-full  flex justify-between items-center bg-white dark:bg-slate-800  ">
    <header className="px-2 h-16 w-full  flex justify-between items-center bg-bgHeadMenu dark:bg-slate-800  ">
      <HeaderLogo />
      <div className=" flex  items-center justify-end">
        {/*рядок меню */}
        <HeaderMenu />
        {/* іконка мобільного меню/faList/ */}
        <MobileMenuIcon />
        {/* Налаштування(Теми,Мови)*/}
        <HeaderSeting />
      </div>
    </header>
  )
}
