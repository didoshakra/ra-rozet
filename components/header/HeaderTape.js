//HeaderTape.js
import IconPhone from "@/components/ui/icons/social/IconPhone";
// import IconTwitter from "@/components/ui/icons/social/IconTwitter"
// import IconInstagram from "../ui/icons/social/IconInstagram_c2"
import IconFacebook from "@/components/ui/icons/social/Facebook_IconSF";

const HeaderTape = () => {
  const iconSize = "13";

  return (
    // <div className="flex h-16 w-full flex-col justify-start bg-tapeMenuBg px-2     text-sm text-white dark:bg-tapeMenuBgDark md:h-6 md:flex-row md:justify-between ">
    <div className="flex h-16 w-full flex-col justify-start bg-tapeMenuBg px-2 text-sm text-white dark:bg-tapeMenuBgDark md:h-6 md:flex-row md:justify-between ">
      <div className="relative flex items-center justify-between ">
        <div className="relative flex flex-col items-center justify-between md:flex-row ">
          {/* <span className="px-2 flex items-center justify-between text-sm"> */}
          <a
            className="flex items-center justify-between px-2 text-sm"
            href="tel:+380508580704"
          >
            <IconPhone width={iconSize} height={iconSize} colorFill="white" />
            +38(050-0000000)
          </a>
          <a
            className="flex items-center justify-between px-2 text-sm"
            href="tel:+380687832306"
          >
            <IconPhone width={iconSize} height={iconSize} colorFill="white" />
            +38(068-0000000)
          </a>
          <span>Tailwindcss/PostgreSQL/multiLevelMenu/RTable</span>
          {/* </span> */}
          {/* <span className="px-2 flex items-center justify-between text-sm">
            <IconPhone width={iconSize} height={iconSize} colorFill="white" /> +38(068-7832306)
          </span> */}
        </div>
      </div>
      <span className="items-center px-2">ПРОБА Next.js 13-4/27-11-2023</span>
      {/* ======================================================================== */}
    </div>
  );
};

export default HeaderTape;
