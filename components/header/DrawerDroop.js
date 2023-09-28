//Drawer.js

import Image from "next/image";
import Link from "next/link";
import { useTheme } from "next-themes";
import resolveConfig from "tailwindcss/resolveConfig"; //отримання змінних з tailwind.config
import tailwindConfig from "@/tailwind.config"; //отримання змінних з tailwind.config
// import IconCancel from "../ui/svg/head/IconCancel" //хрестик
import IconCancel from "@/components/ui/icons/head/IconCancel"; //хрестик
import Navbar from "@/components/multiLevelMenu/Navbar";
import {
  menuAdmin,
  menuDocuments,
  menuBig,
} from "@/components/multiLevelMenu/dataMultilevelMenu";
// import { dataMenuBig } from "@/components/multiLevelMenu/dataMenuBig";
import IconFacebook from "@/components/ui/icons/social/Facebook_IconSF";
import IconGitHub from "@/components/ui/icons/social/GitHub_IconSF";
import IconTwitter from "@/components/ui/icons/social/Twiter_IconSF";
import IconInstagram from "@/components/ui/icons/social/Instagram_IconSF";

//***************************************************************** */
export default function DrawerDroop({ drawerOpen, setDrawerOpen }) {
  const { resolvedTheme } = useTheme();
  const { theme } = resolveConfig(tailwindConfig); //отримання змінних з tailwind.config
  //   console.log("***DrawerDroop/drawerOpen=", drawerOpen)
  //   const driwerLeft = "-370px"
  const colorIcon =
    resolvedTheme === "dark"
      ? theme.colors.headMenuTextDark
      : theme.colors.drawerDropMenuText;
  const iconSize = "20";
  //********************************************************* */

  const menu1 = [
    {
      a: "home",
      link: "/begin/home",
      img: "/icons/png/Book24_24.png",
    },
    {
      a: "shop",
      link: "/begin/shop",
      img: "/icons/png/Book24_24.png",
    },
    {
      a: "about",
      title: "про мене",
      link: "/begin/about",
      img: "/icons/png/Book24_24.png",
    },
    {
      a: "blog",
      link: "/begin/blog",
      img: "/icons/png/Book24_24.png",
    },
    {
      a: "contact",
      link: "/begin/contacts",
      img: "/icons/png/Book24_24.png",
    },
  ];
  const footerList = [
    {
      url: "https://github.com/didoshakra",
      img: "/icon_svg/social/instagram-sketched.svg",
      a: "github",
    },
    {
      url: "https://twitter.com/DidoshakR",
      img: "/icon_svg/social/twitter.svg",
      a: "twitter",
    },
    {
      url: "https://www.facebook.com/profile.php?id=100004339204236",
      img: "/icon_svg/social/facebook.svg",
      a: "facebook",
    },
  ];

  //********************************************************************** */
  const SocialMenuUl = ({ title = "" }) => (
    <ul className="bg-bgHeadMenu">
      <p className="pl-2 text-sm  font-bold italic  text-headMenuText dark:text-headMenuTextDark">
        {title}
      </p>
      <li>
        <a
          className="hover:bg-bgHeadMenuHover flex gap-2  px-1 py-2 text-base font-normal"
          href="https://www.facebook.com/profile.php?id=100004339204236"
          title="Facebook"
        >
          <IconFacebook
            width="20"
            height="20"
            colorStroke="#0095ff"
            colorFill="#0095ff"
          />
          <p>Facebook</p>
        </a>
        <a
          className="hover:bg-bgHeadMenuHover flex gap-2 px-1 py-2 text-base font-normal"
          href="https://github.com/didoshakra?tab=repositories"
          title="IconGitHub"
        >
          <IconGitHub width="20" height="20" colorFill="black" />
          <p>IconGitHub</p>
        </a>
        <a
          className="hover:bg-bgHeadMenuHover flex gap-2 px-1 py-2 text-base font-normal"
          href="https://twitter.com/home?lang=uk"
          title="Twitter"
        >
          <IconTwitter
            width="20"
            height="20"
            colorStroke="#89b5f4"
            colorFill="#89b5f4"
          />
          <p>Twitter</p>
        </a>
        <a
          className="hover:bg-bgHeadMenuHover flex gap-2 px-1 py-2 text-base font-normal"
          href="https://www.facebook.com/profile.php?id=100017742340573"
          title="Instagram"
        >
          <IconInstagram
            width="20"
            height="20"
            colorFill="#fc69b1"
            colorStroke="white"
            // colorStroke="red"
          />
          <p>Instagram</p>
        </a>
      </li>
    </ul>
  );

//   const SocialMenuMap = ({ menu, title = "" }) => (
//     <ul className="bg-bgHeadMenu">
//       <p className="pl-2 text-sm font-semibold">{title}</p>
//       {menu.map((item, index) => {
//         return (
//           <li
//             className=" hover:bg-bgHeadMenuHover flex  px-1 py-2 text-base font-normal  text-headMenuText dark:text-headMenuTextDark"
//             key={index}
//           >
//             <Image
//               width={20}
//               height={20}
//               // Якщо реальний розмір Image не співпадає з width= і height= то виникає помилка: If you use CSS to change the size of your image, also include the styles 'width: "auto"' or 'height: "auto"' to maintain the aspect ratio
//               // Щоб не було цієї помилки треба добавити style=
//               style={{ width: 20, height: 20, color: "red" }} //Нові розміри Image
//               src={item.img}
//               alt="icon"
//             />
//             {item.link ? (
//               <Link
//                 href={`${item.link}`}
//                 className="ml-2 flex items-center text-headMenuText dark:text-headMenuTextDark"
//                 title={item.title ? item.title : item.a}
//               >
//                 {item.a}
//               </Link>
//             ) : (
//               <a
//                 href={`${item.url}`}
//                 color="read"
//                 className="ml-2 flex items-center text-headMenuText dark:text-headMenuTextDark"
//                 title={item.a}
//               >
//                 {item.a}
//               </a>
//             )}
//           </li>
//         );
//       })}
//     </ul>
//   );
  //********************************************************************** */

  return (
    <div
      //Зправа
      //   className={`fixed right-0 top-0 z-20 flex h-full w-[35vw] flex-col overflow-y-scroll  bg-drawerDropMenuBg dark:bg-headMenuBgDark ${
      //     drawerOpen ? "translate-x-0" : "translate-x-full"
      //   } duration-300 ease-in-out `}
      //Зліва
      className={`fixed -left-[35vw] top-0 z-20 flex h-full w-[35vw] flex-col overflow-y-scroll  bg-drawerDropMenuBg dark:bg-headMenuBgDark ${
        drawerOpen ? "translate-x-full" : "translate-x-0"
      } duration-500 ease-in-out `}
    >
      {/* <div className="w-full/5 fixed inset-0 z-20 flex max-h-[600px] max-w-[300px] flex-col overflow-y-scroll bg-drawerDropMenuBg transition-transform duration-200 ease-out dark:bg-headMenuBgDark"> */}
      {/* Шапка */}
      <div className="flex h-20 items-center justify-between gap-1 bg-drawerHeadBg  ">
        <div className="flex items-center justify-between gap-2 pl-1  ">
          <Link href="/">
            <Image
              title="ramag"
              width={70}
              height={70}
              src="/images/home/sun_man_mount-380-RA-Algerian.png"
              alt="logo"
            />
          </Link>
          <Link
            href="/"
            // legacyBehavior//Дозволяє тег (a), але тоді пропадають стилі
            // style={{
            //   textDecoration: "none",
            //   color: "red",
            //   fontSize: 30,
            //   fontStyle: "italic",
            // }}
            className="justify-begin  flex items-center px-4 text-2xl font-bold italic  text-drawerDropMenuText md:text-2xl"
            title="RAMAG"
          >
            RAecom
          </Link>
        </div>
        <div onClick={(e) => setDrawerOpen(false)} className="pr-2">
          <IconCancel
            width={iconSize}
            height={iconSize}
            colorFill={colorIcon}
          />
        </div>
      </div>
      {/* --- Список меню ----------------------------------------- */}
      <hr className="h-1 min-w-full bg-drawerDropHr" />
      <Navbar
        multilevelMenu={menuBig}
        title={"Багаторівнневе пробне меню"}
        setDrawerOpen={setDrawerOpen}
      />
      <hr className="h-1 min-w-full bg-drawerDropHr" />
      <Navbar
        multilevelMenu={menuAdmin}
        title={"Адмін"}
        setDrawerOpen={setDrawerOpen}
      />
      {/* ----------------------------------------------------------- */}
      {/* Divider/Роздільник */}
      <hr className="h-1 min-w-full bg-drawerDropHr" />
      <Navbar
        multilevelMenu={menuDocuments}
        title={"Документи"}
        setDrawerOpen={setDrawerOpen}
      />
      <hr className="h-1 min-w-full bg-drawerDropHr" />
      {/* ----------------------------------------------------------- */}
      <SocialMenuUl title={"Контакти"} />
      {/* <SocialMenuMap title={"Контакти"} menu={footerList} /> */}
    </div>
  );
}
