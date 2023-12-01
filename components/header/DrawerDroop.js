//Drawer.js

import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/multiLevelMenu/Navbar";
import {
  menuAdmin,
  menuDocuments,
  menuBig,
} from "@/components/multiLevelMenu/dataMultilevelMenu";
//***************************************************************** */
export default function DrawerDroop({ drawerOpen, setDrawerOpen }) {
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
    <ul className="bg-hMenuBg">
      <p className="pl-2 text-sm  font-bold italic  text-hMenuText dark:text-hMenuTextD">
        {title}
      </p>
      <li>
        <a
          className="flex gap-2 px-1  py-2 text-base font-normal hover:bg-hMenuBgHov"
          href="https://www.facebook.com/profile.php?id=100004339204236"
          title="Facebook"
        >
          {/* Facebook */}
          <svg
            class="h-6 w-6 text-hIcon dark:text-hIconD"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            {" "}
            <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
          </svg>

          <p>Facebook</p>
        </a>
        <a
          className="flex gap-2 px-1 py-2 text-base font-normal hover:bg-hMenuBgHov"
          href="https://github.com/didoshakra?tab=repositories"
          title="IconGitHub"
        >
          {/* GitHub */}
          <svg
            class="h-6 w-6 text-hIcon dark:text-hIconD"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            {" "}
            <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
          </svg>
          <p>GitHub</p>
        </a>
        <a
          className="flex gap-2 px-1 py-2 text-base font-normal hover:bg-hMenuBgHov"
          href="https://twitter.com/home?lang=uk"
          title="Twitter"
        >
          {/* Twitter */}
          <svg
            class="h-6 w-6 text-hIcon dark:text-hIconD"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            {" "}
            <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z" />
          </svg>
          <p>Twitter</p>
        </a>
        <a
          className="flex gap-2 px-1 py-2 text-base font-normal hover:bg-hMenuBgHov"
          href="https://www.facebook.com/profile.php?id=100017742340573"
          title="Instagram"
        >
          {/* IconInstagram */}
          <svg
            class="h-6 w-6 text-hIcon dark:text-hIconD"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            {" "}
            <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />{" "}
            <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />{" "}
            <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
          </svg>
          <p>Instagram</p>
        </a>
      </li>
    </ul>
  );

  //   const SocialMenuMap = ({ menu, title = "" }) => (
  //     <ul className="bg-hMenuBgHov">
  //       <p className="pl-2 text-sm font-semibold">{title}</p>
  //       {menu.map((item, index) => {
  //         return (
  //           <li
  //             className=" hover:bg-hMenuBgHov flex  px-1 py-2 text-base font-normal  text-hMenuText dark:text-hMenuTextD"
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
  //                 className="ml-2 flex items-center text-hMenuText dark:text-hMenuTextD"
  //                 title={item.title ? item.title : item.a}
  //               >
  //                 {item.a}
  //               </Link>
  //             ) : (
  //               <a
  //                 href={`${item.url}`}
  //                 color="read"
  //                 className="ml-2 flex items-center text-hMenuText dark:text-hMenuTextD"
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
      className={`fixed -left-[85vw] top-0 z-20 flex h-full w-[85vw] flex-col overflow-y-scroll  bg-drawDropMenuBg dark:bg-hMenuBgD ${
        drawerOpen ? "translate-x-full" : "translate-x-0"
      } duration-500 ease-in-out `}
    >
      {/* <div className="w-full/5 fixed inset-0 z-20 flex max-h-[600px] max-w-[300px] flex-col overflow-y-scroll bg-drawerDropMenuBg transition-transform duration-200 ease-out dark:bg-hMenuBgD"> */}
      {/* Шапка */}
      <div className="flex h-20 items-center justify-between gap-1 bg-drawHBg">
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
            className="justify-begin  flex items-center px-4 text-2xl font-bold italic  text-drawDropMenuText md:text-2xl"
            title="RAMAG"
          >
            RAecom
          </Link>
        </div>
        <div onClick={(e) => setDrawerOpen(false)} className="pr-2">
          {/* <IconCancel */}
          <svg
            class="h-6 w-6 text-hIcon dark:text-hIconD"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            stroke-width="2"
            stroke="currentColor"
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            {" "}
            <path stroke="none" d="M0 0h24v24H0z" />{" "}
            <line x1="18" y1="6" x2="6" y2="18" />{" "}
            <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        </div>
      </div>
      {/* --- Список меню ----------------------------------------- */}
      <hr className="h-1 min-w-full bg-drawDropHr" />
      <Navbar
        multilevelMenu={menuBig}
        title={"Багаторівнневе пробне меню"}
        setDrawerOpen={setDrawerOpen}
      />
      <hr className="h-1 min-w-full bg-drawDropHr" />
      <Navbar
        multilevelMenu={menuAdmin}
        title={"Адмін"}
        setDrawerOpen={setDrawerOpen}
      />
      {/* ----------------------------------------------------------- */}
      {/* Divider/Роздільник */}
      <hr className="h-1 min-w-full bg-drawDropHr" />
      <Navbar
        multilevelMenu={menuDocuments}
        title={"Документи"}
        setDrawerOpen={setDrawerOpen}
      />
      <hr className="h-1 min-w-full bg-drawDropHr" />
      {/* ----------------------------------------------------------- */}
      <SocialMenuUl title={"Контакти"} />
      {/* <SocialMenuMap title={"Контакти"} menu={footerList} /> */}
    </div>
  );
}
