//Footer.js ff
import IconHeart from "@/components/ui/icons/IconHeart"
import IconMapMarker from "components/ui/icons/IconMapMarker"
import IconPhone from "components/ui/icons/social/IconPhone"
import IconMail from "components/ui/icons/social/IconMail"
import IconFacebook from "components/ui/icons/social/IconFacebook"
import IconShevronUp from "components/ui/icons/IconShevronUp" //^Стрілка вверх

const Footer = () => {
  const themeType = "light"
  const colorIcon = themeType === "light" ? "#82AE46" : "red"

  return (
    <section className=" relative w-full ">
      {/* <div className="footer-mouse"> */}
      <div className="absolute flex items-center justify-center inset-x-0 top-[-30px]">
        <a
          href="#"
          className=" flex items-center justify-center  w-[60px] h-[60px]  border-0 rounded-full border-current bg-headMenuText"
        >
          <div className="flex items-center justify-center w-[30px] h-[30px] m-1 rounded-full text-orange-600 text-xl">
            {/* <span className="ion-ios-arrow-up"> */}
            <span className="flex items-center justify-center">
              <IconShevronUp width="24" height="24" colorFill="white" />
            </span>
          </div>
        </a>
      </div>
      {/* <div className="footer-context-row"> */}
      <div className="pt-10 w-full flex flex-col md:flex-row justify-between items-start">
        {/* <div className="footer-context-item-col"> */}
        <div className="relative flex flex-col justify-start items-start text-left">
          <h2 className="px-4 flex flex-row justify-center items-center text-lg font-bold text-headMenuText">
            DBogdan
          </h2>
          <ul className="flex justify-between items-center">
            <li className="px-4  flex flex-row justify-start items-center">
              <a href="https://www.facebook.com/profile.php?id=100017742340573">
                <IconFacebook width="26" height="26" colorFill={colorIcon} />
              </a>
            </li>
          </ul>
        </div>

        <div className="relative py-2 flex flex-col justify-start items-start text-left">
          <h2 className="px-4  flex flex-row justify-center items-center text-lg font-bold text-headMenuText">
            Є запитання?
          </h2>
          <ul>
            <li className="px-4  flex flex-row justify-start items-center text-sm">
              <IconMapMarker width="15" height="15" colorFill={colorIcon} colorStroke={colorIcon} />
              <span className="px-2"> вул. Гулака 7, Калуш, Україна</span>
            </li>
            <li className="px-4  flex flex-row justify-start items-center text-sm">
              <IconPhone width="15" height="15" colorFill={colorIcon} />
              {/* <span className="px-2">+ 38(050-8580704)</span> */}
              <a className="px-2" href="tel:+380508580704">
                + 38(050-8580704)
              </a>
            </li>
            <li className="px-4  flex flex-row justify-start items-center text-sm">
              <IconPhone width="15" height="15" colorFill={colorIcon} />
              {/* <span className="px-2">+ 38(068-7832306)</span> */}
              <a className="px-2" href="tel:+380687832306">
                + 38(068-7832306)
              </a>
            </li>
            <li className="px-4  flex flex-row justify-start items-center text-sm">
              <IconMail width="15" height="15" icon colorFill={colorIcon} colorFill1={colorIcon} />
              <span className="px-2">bogdandrogomirezkiy@gmail.com</span>
            </li>
          </ul>
        </div>
      </div>
      <div className="w-full pt-10 flex flex-row justify-center items-center">
        <div className="flex flex-row justify-center items-center">
          Copyright © {new Date().getFullYear()}
          <IconHeart width="15" height="15" colorFill={colorIcon} colorStroke={colorIcon} />
        </div>
      </div>
    </section>
  )
}
export default Footer
