//HeaderTape.js
// import IconPhone from "@/components/ui/icons/social/IconPhone";

const HeaderTape = () => {
  const iconSize = "13";

  return (
    <div className="h-18 mx-auto my-auto mt-1 flex w-full flex-col justify-start overflow-hidden bg-hTapeBg px-2 text-sm text-hTapeText dark:bg-hTapeBgD dark:text-hTapeTextD md:h-6 md:flex-row md:justify-between ">
      <div className="flex flex-col justify-start md:flex-row md:justify-between ">
        <a
          className="flex items-center justify-start px-1 text-sm"
          href="tel:+380508580704"
        >
          {/* <IconPhone width={iconSize} height={iconSize} colorFill="white" /> */}
          {/* phone */}
          <svg
            className="h-4 w-4 text-hTapeText dark:text-hTapeTextD"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            strokeWidth="2"
            stroke="currentColor"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            {" "}
            <path stroke="none" d="M0 0h24v24H0z" />{" "}
            <path d="M5 4h4l2 5l-2.5 1.5a11 11 0 0 0 5 5l1.5 -2.5l5 2v4a2 2 0 0 1 -2 2a16 16 0 0 1 -15 -15a2 2 0 0 1 2 -2" />
          </svg>
          +38(050-0000000)
        </a>
        <a
          className="flex items-center justify-start px-1 text-sm"
          href="tel:+380687832306"
        >
          {/* <IconPhone width={iconSize} height={iconSize} colorFill="white" /> */}
          {/* phone */}
          <svg
            className="h-4 w-4 text-hTapeText dark:text-hTapeTextD"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            strokeWidth="2"
            stroke="currentColor"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            {" "}
            <path stroke="none" d="M0 0h24v24H0z" />{" "}
            <path d="M5 4h4l2 5l-2.5 1.5a11 11 0 0 0 5 5l1.5 -2.5l5 2v4a2 2 0 0 1 -2 2a16 16 0 0 1 -15 -15a2 2 0 0 1 2 -2" />
          </svg>
          +38(068-0000000)
        </a>
        <span className="items-center px-1 text-sm ">
          Tailwindcss/PostgreSQL/multiLevelMenu/RTable
        </span>
      </div>
      <span className="px-1 text-sm">ПРОБА Next.js 13-4/27-11-2023</span>
    </div>
  );
};

export default HeaderTape;
