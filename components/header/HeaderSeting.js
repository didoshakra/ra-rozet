//HeaderSeting  /Верхнє меню
//Викликає меню(з іконоками) :UserSwitcher/ThemeSwitcher/LocaleSwitcher

import ThemeSwitcher from "./ThemeSwitcher"

const HeaderSeting = () => {

  return (
    <div className=" h-16 flex justify-between items-center">
      {/* Іконки головного меню Seting */}
      <div className="hidden md:flex">
        {/* тема */}
        <ThemeSwitcher />
      </div>
    </div>
  )
}

export default HeaderSeting
