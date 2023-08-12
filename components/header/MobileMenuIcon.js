//MobileMenuIcon.js ////Іконка(своя) яка викликає MobileMenuDroop-випадаюче меню

import IconList from "../ui/icons/head/IconListP_thin" //рисочки з крапочками (тонкі)

const MobileMenuIcon = (props) => {
  const themeType = "light"
  const colorIcon = themeType === "light" ? "#82AE46" : "red"
  const iconSize = "25"

  return (
    // Навігація
    // <div className="mx-1 flex justify-center aling-center  md:hidden">
    <div className="flex items-center  md:hidden">
      {/* іконка мобільного меню */}
      <button
        className="hover:bg-lime-300 flex z-0 items-center rounded-full"
        // onClick={() => props.mobileMenuToggle(props.mobileMenuOpen ? false : true)}
        title="меню"
      >
        <IconList width={iconSize} height={iconSize} colorFill={colorIcon} />
      </button>
    </div>
  )
}

export default MobileMenuIcon
