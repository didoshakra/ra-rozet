//HeaderSeting  /Верхнє меню
//Викликає меню(з іконоками) :UserSwitcher/ThemeSwitcher/LocaleSwitcher

import ThemeSwitcher from "./ThemeSwitcher"
import UserSwitcher from "./UserSwitcher";
import HeaderSetingDroopMenu from "./HeaderSetingDroopMenu";


const HeaderSeting = () => {

  return (
    <div className=" flex h-16 items-center justify-between">
      {/* Іконки головного меню Seting */}
      <div className="hidden md:flex">
        {/* User */}
        <UserSwitcher />
        {/* тема */}
        <ThemeSwitcher />
      </div>
      {/* Випадаюче меню Seting(мобільне) */}
      <div className="headerSeting__mobile">
        <HeaderSetingDroopMenu />
      </div>
    </div>
  );
}

export default HeaderSeting
