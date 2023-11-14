//Footer.js ff
"use client";
import { useTheme } from "next-themes";
import resolveConfig from "tailwindcss/resolveConfig"; //отримання змінних з tailwind.config
import tailwindConfig from "@/tailwind.config"; //отримання змінних з tailwind.config
import IconHeart from "@/components/ui/icons/IconHeart";
import IconMapMarker from "@/components/ui/icons/IconMapMarker";
import IconPhone from "@/components/ui/icons/social/IconPhone";
import IconMail from "@/components/ui/icons/social/IconMail";
import IconFacebook from "@/components/ui/icons/social/Facebook_IconSF";
import IconShevronUp from "@/components/ui/icons/IconShevronUp"; //^Стрілка вверх

const Footer = () => {
  const { resolvedTheme } = useTheme();
  const { theme } = resolveConfig(tailwindConfig); //отримання змінних з tailwind.config

  const colorIcon =
    resolvedTheme === "dark"
      ? theme.colors.headMenuTextDark
      : theme.colors.headMenuText;

  return (
    // <section className=" relative block w-full">
    <section className="mx-auto w-full">
      {/* <div className="footer-mouse"> */}
      <div className="absolute inset-x-0 top-[-5px] flex items-center justify-center p-1">
        <a
          href="#"
          className=" flex h-[60px] w-[60px]  items-center justify-center  rounded-full border-0 border-current bg-headMenuText dark:bg-headMenuTextDark"
        >
          <div className="m-1 flex h-[30px] w-[30px] items-center justify-center rounded-full text-xl text-orange-600">
            {/* <span className="ion-ios-arrow-up"> */}
            <span className="flex items-center justify-center">
              <IconShevronUp width="24" height="24" colorFill="white" />
            </span>
          </div>
        </a>
      </div>
      {/* <div className="footer-context-row"> */}
      <div className="flex w-full flex-col items-start justify-between pt-10 md:flex-row">
        {/* <div className="footer-context-item-col"> */}
        <div className="relative flex flex-col items-start justify-start text-left">
          <h2 className="flex flex-row items-center justify-center px-4 text-lg font-bold text-headMenuText dark:text-headMenuTextDark">
            DBogdan
          </h2>
          <ul className="flex items-center justify-between">
            <li className="flex  flex-row items-center justify-start px-4">
              <a href="https://www.facebook.com/profile.php?id=100017742340573">
                <IconFacebook
                  width="26"
                  height="26"
                  colorFill={colorIcon}
                  colorStroke={colorIcon}
                />
              </a>
            </li>
          </ul>
        </div>

        <div className="relative flex flex-col items-start justify-start py-2 text-left">
          <h2 className="flex  flex-row items-center justify-center px-4 text-lg font-bold text-headMenuText dark:text-headMenuTextDark">
            Є запитання?
          </h2>
          <ul>
            <li className="flex  flex-row items-center justify-start px-4 text-sm">
              <IconMapMarker
                width="15"
                height="15"
                colorFill={colorIcon}
                colorStroke={colorIcon}
              />
              <span className="px-2"> вул. Гулака 7, Калуш, Україна</span>
            </li>
            <li className="flex  flex-row items-center justify-start px-4 text-sm">
              <IconPhone width="15" height="15" colorFill={colorIcon} />
              {/* <span className="px-2">+ 38(050-8580704)</span> */}
              <a className="px-2" href="tel:+380508580704">
                + 38(050-8580704)
              </a>
            </li>
            <li className="flex  flex-row items-center justify-start px-4 text-sm">
              <IconPhone width="15" height="15" colorFill={colorIcon} />
              {/* <span className="px-2">+ 38(068-7832306)</span> */}
              <a className="px-2" href="tel:+380687832306">
                + 38(068-7832306)
              </a>
            </li>
            <li className="flex  flex-row items-center justify-start px-4 text-sm">
              <IconMail
                width="15"
                height="15"
                icon
                colorFill={colorIcon}
                colorFill1={colorIcon}
              />
              <span className="px-2">bogdandrogomirezkiy@gmail.com</span>
            </li>
          </ul>
        </div>
      </div>
      <div className="flex w-full flex-row items-center justify-center pt-10">
        <div className="flex flex-row items-center justify-center">
          Copyright © {new Date().getFullYear()}
          <IconHeart
            width="15"
            height="15"
            colorFill={colorIcon}
            colorStroke={colorIcon}
          />
        </div>
      </div>
    </section>
  );
};
export default Footer;
