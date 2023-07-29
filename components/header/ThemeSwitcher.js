import IconSun from "../ui/icons/head/IconSun_border"
import IconMoon from "../ui/icons/head/IconMoon_border"

const ThemeSwitche = () => {
//   const themeType = "dark"
  const themeType = "light"
  const colorIcon = themeType === "light" ? "#82AE46" : "red"
  const iconSize = "25"

  return (
    // <div className="themeSwitcher">
    <div className="mx-1 flex justify-center aling-center ">
      <p
        className=" z-0  flex justify-center aling-center hover:bg-lime-300 rounded-full"
        title="Теми"
        // onClick={themeMenuToggle}
      >
        {themeType === "light" ? (
          <IconMoon width={iconSize} height={iconSize} colorFill={colorIcon} />
        ) : (
          <IconSun width={iconSize} height={iconSize} colorFill={colorIcon} />
        )}
      </p>
    </div>
  )
}

export default ThemeSwitche
