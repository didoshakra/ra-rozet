//HeaderTape.js
import IconPhone from "@/components/ui/icons/social/IconPhone";
// import IconTwitter from "@/components/ui/icons/social/IconTwitter"
// import IconInstagram from "../ui/icons/social/IconInstagram_c2"
import IconFacebook from "@/components/ui/icons/social/Facebook_IconSF";

const HeaderTape = () => {
  const iconSize = "13";

  return (
    // <div className="flex h-16 w-full flex-col justify-start bg-tapeMenuBg px-2     text-sm text-white dark:bg-tapeMenuBgDark md:h-6 md:flex-row md:justify-between ">
    // <header className="flex h-16  w-full items-center justify-between bg-headMenuBg p-1 px-2 dark:bg-headMenuBgDark">

    <div className="flex h-16  w-full items-center justify-between bg-headMenuBg p-1 px-2 dark:bg-headMenuBgDark">
      {/* <div className="h-18 mx-auto my-auto flex w-full flex-col justify-start bg-tapeMenuBg px-2 text-sm text-white dark:bg-tapeMenuBgDark md:h-6 md:flex-row md:justify-between "> */}
      GGGGGGGGGGGG
      {/* <div className="relative flex flex-col justify-start md:flex-row md:justify-between "> */}
      <div className="flex flex-col justify-start md:flex-row md:justify-between ">
        <a
          className="flex items-center justify-start px-1 text-sm"
          href="tel:+380508580704"
        >
          <IconPhone width={iconSize} height={iconSize} colorFill="white" />
          +38(050-0000000)
        </a>
        <a
          className="flex items-center justify-start px-1 text-sm"
          href="tel:+380687832306"
        >
          <IconPhone width={iconSize} height={iconSize} colorFill="white" />
          +38(068-0000000)
        </a>
        {/* <span className="px-1 text-sm ">
          Tailwindcss/PostgreSQL/multiLevelMenu/RTable
        </span> */}
      </div>
      {/* <span className="px-1 text-sm">ПРОБА Next.js 13-4/27-11-2023</span> */}
      {/* ======================================================================== */}
    </div>
  );
};

export default HeaderTape;
