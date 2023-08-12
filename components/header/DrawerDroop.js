//Drawer.js

import Image from "next/image";
import Link from "next/link";
// import IconCancel from "../ui/svg/head/IconCancel" //хрестик
import IconCancel from "@/components/ui/icons/head/IconCancel"; //хрестик
import Navbar from "./multilevelMenu/Navbar";
import { menuAdmin, menuDocuments } from "./multilevelMenu/multilevelMenu";

//***************************************************************** */
export default function DrawerDroop({ drawerOpen, setDrawerOpen }) {
  //   console.log("***DrawerDroop/drawerOpen=", drawerOpen)
  //   const driwerLeft = "-370px"
  const driwerWidht = "80vw";
  const driwerHeight = "80vh";
  const driwerMaxWidht = "700px";
  const driwerMaxHeight = "800px";
   const themeType = "light";
   const colorIcon = themeType === "light" ? "#82AE46" : "red";
   const iconSize = "25";

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
      img: "/icons/social/github-retina.png",
      a: "github",
    },
    {
      url: "https://twitter.com/DidoshakR",
      img: "/icons/social/twitter-retina.png",
      a: "twitter",
    },
    {
      url: "https://www.facebook.com/profile.php?id=100004339204236",
      img: "/icons/social/facebook-f-64-grow.png",
      a: "facebook",
    },
  ];

  //********************************************************************** */
  const SocialMenu = ({ menu, title = "" }) => (
    <ul className="DrawerDroop-itemWraper">
      <p className="DrawerDroop-itemTitle">{title}</p>
      {menu.map((item, index) => {
        return (
          <li className="DrawerDroop-item" key={index}>
            <img src={item.img} alert="logo" top="5" height="20" />
            {item.link ? (
              <Link href={`${item.link}`}>
                <a title={item.title ? item.title : item.a}>{item.a}</a>
              </Link>
            ) : (
              <a title={item.a} href={`${item.url}`}>
                {item.a}
              </a>
            )}
          </li>
        );
      })}
    </ul>
  );
  //********************************************************************** */
  return (
    <div className="DrawerDroop">
      <div className="DrawerDroop-header">
        <div className="DrawerDroop-header_logo">
          <Link href="/">
            <Image
              title="ramag"
              width={80}
              height={80}
              src="/images/head/sun_man_mount-380-RA-Algerian.png"
              alt="logo"
            />
          </Link>
          <Link href="/" legacyBehavior>
            <a className="DrawerDroop-header_text" title="RAMAG">
              RAecom
            </a>
          </Link>
        </div>

        <div
          onClick={(e) => setDrawerOpen(false)}
          className="drawerSwitcher__icon"
        >
          <IconCancel
            width={iconSize}
            height={iconSize}
            colorFill={colorIcon}
          />
        </div>
      </div>
      {/* --- Список меню ----------------------------------------- */}
      {/* <hr className="DrawerDroop-hr" width="100%" /> */}
      {/* <Navbar multilevelMenu={menuAdmin} /> */}
      {/* ----------------------------------------------------------- */}
      {/* Divider/Роздільник */}
      <hr className="DrawerDroop-hr" />
      {/* <Navbar multilevelMenu={menuDocuments} /> */}
      <hr className="DrawerDroop-hr" />
      {/* ----------------------------------------------------------- */}
      <SocialMenu title={"Контакти"} menu={footerList} />
    </div>
  );
}
