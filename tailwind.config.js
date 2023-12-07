/** @type {import('tailwindcss').Config} */
const { nextui } = require("@nextui-org/react");
module.exports = {
  // screens: {'sm':'640px','md': '768px','lg': '1024px',xl': '1280px',2xl': '1536px',}
  darkMode: "class",
  content: [
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      //   backgroundImage: {
      //     "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
      //     "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      //   },
      colors: {
        openLevel: "#00f",
        // closeLevel: "#82AE46",
        1: "#82AE46",
        2: "#00f",
        3: "#13ff11",
        4: "#ac00ca",
        itemHover: "#f64532",
        mainColor: "red",

        //-- Загальні
        text: "var(--color-text)",
        textD: "var(--color-textD)",
        bg: "var(--color-bg)",
        bgD: "var(--color-bgD)",
        errorMsg: "var(--color-errorMsg)",
        errorMsgD: "var(--color-errorMsgD)",
        bgEclipse: "var(--color-bgEclipse)", //Затемнення екрану

        //-- headTape --------------------------------------------
        hTapeText: "var(--color-hTapeText)",
        hTapeTextD: "var(--color-hTapeTextD)", //"#9de160", //"#82AE46",
        hTapeBg: "var(--color-hTapeBg)", //"#82AE46", //1 "#82AE46",
        hTapeBgD: "var(--color-hTapeBgD)", //"rgba(65,69,69,1)",
        hTapeTextHov: "var(--color-hTapeTextHov)",
        hTapeTextHovD: "var(--color-hTapeTextHovD)",
        hTapeTextBgHov: "var(--color-hTapeTextBgHov)",
        hTapeTextBgHovD: "var(--color-hTapeTextBgHovD)",

        //-- head --------------------------------------------
        hText: "var(--color-hText)", //1 "#82AE46",
        hTextD: "var(--color-hTextD)", //білий
        hBg: "var(--color-hBg)", // "#F4F4EB", "#fff", //білий
        hBD: "var(--color-hBgD)",
        hTextHov: "var(--color-hTextHov)",
        hTextHov: "var(--color-hTextHovD)",
        hBgHovr: "var(--color-hBgHovr)",
        hBgHovD: "var(--color-hBgHovrD)", //білий

        //-- headLogo --------------------------------------------
        hLogoText: "var(--color-hLogoText)", //"#6B8E23", //1 "#82AE46",
        hLogoTextD: "var(--color-hLogoTextD)", //"#6B8E23", //"#6B8E23", //1
        hLogoTextHov: "var(--color-hLogoTextHov)",
        hLogoTextHovD: "var(--color-hLogoTextHovD)",

        //--  headIcon --------------------------------------------
        hIcon: "var(--color-hIcon)", //1 "#82AE46", "rgba(23,25,25,1)",
        hIconD: "var(--color-hIconD)", //"#9de160", //"#6B8E23", //1 "#82AE46", "rgba(23,25,25,1)",
        hIconHov: "var(--color-hIconHov)",
        hIconHovD: "var(--color-hIconHovD)", //"red",
        hIconBg: "var(--color- hIconBg)", //"rgba(65,69,69,1)",
        hIconBgD: "var(--color- hIconBgD)", //"rgba(65,69,69,1)",
        hIconBgHov: "var(--color-hIconBgHov)", //"#C9DFA7",
        hIconBgHovD: "var(--color-hIconBgHovD)", //"#E8EFD3",

        //-- headMobile --------------------------------------------
        hMobileText: "var(--color-hMobileText)", // "#6B8E23", //"#82AE46",
        hMobileTextD: "var(--color-hMobileTextD)", //"#6B8E23", // "#82AE46",
        hMobileTextHov: "var(--color-hMobileTextHov)", //"red",
        hMobileTextHovD: "var(--color-hMobileTextHovD)", //"red",
        hMobileBg: "var(--color-hMobileBg)", //"rgba(65,69,69,1)",
        hMobileBgD: "var(--color-hMobileBgD)", //"rgba(65,69,69,1)",
        hMobiletBgHov: "var(--color-hMobiletBgHov)", //"#fff", //білий
        hMobiletBgHovD: "var(--color-hMobiletBgHovD)", // "#fff", //білий
        hMobileIcon: "var(--color-hMobileIcon)", //"red",
        hMobileIconD: "var(--color-hMobileIcon)", //"red",

        //-- headMenu / + Всі випадаючі з head меню ???
        hMenuBorder: "var(--color-hMenuBorder)", //"#DCDCDC", //1  "#82AE46",
        hMenuBorderD: "var(--color-hMenuBorderD)", //"#6B8E23", //1  "#82AE46",
        hMenuText: "var(--color-hMenuText)", // "#6B8E23", // "#82AE46",
        hMenuTextD: "var(--color-hMenuTextD)", //"#6B8E23", //"#9de160", //"#95dd77","#9dd360", // //"#32cd32", //"#C9DFA7", //"#A5E189",
        hMenuTextHov: "var(--color-hMenuTextHov)", //"#fff",
        hMenuTextHovD: "var(--color-hMenuTextHovD)", //"#fff",
        hMenuBg: "var(--color-hMenuBg)", //"#E7F4E0",
        hMenuBgD: "var(--color-hMenuBgD)", //"rgba(23,25,25,1)",
        hMenuBgHov: "var(--color-hMenuBgHov)", //"#82AE46",
        hMenuBgHovD: "var(--color-hMenuBgHovD)", // "#82AE46",
        hMenuAct: "var(--color-hMenuAct)", //"#fff",
        hMenuActD: "var(--color-hMenuActD)", //"#fff",
        hMenuActBg: "var(--color-hMenuActBg)", // "red",
        hMenuActBgD: "var(--color-hMenuActBgD)", //"red",
        hMenuGorizBgHov: "var(--color-hMenuGorizBgHov)", //"#f64532",
        hMenuGorizBgHovD: "var(--color-hMenuGorizBgHovD)", //"#f64532",

        // //-- menuDroop /випадаючі меню (ше не викор)
        // menuDropBorder: "#DCDCDC",
        // menuDropBorderD: "#F4F4EB",
        // menuDropText: "#82AE46",
        // menuDropTextD: "#82AE46",
        // menuDropTextHov: "#fff",
        // menuDropTextHovD: "#fff",
        // menuDropBg: "#F4F4EB", //"#DCDCDC","#fff",
        // menuDropBgD: "rgba(65,69,69,1)",
        // menuDropBgHov: "#A5E189",
        // menuDropBgHovD: "#82AE46",
        // menuDropActBg: "red",
        // menuDropActBgD: "red",

        // //-- drawer --------------------------------------------
        // drawHText: "#6B8E23", //
        // drawHTextD: "#6B8E23", //
        // drawHTextHor: "#fff", //Підменю
        // drawHTextHorD: "#fff", //Підменю
        // drawHBg: "#3b6a3d", //
        // drawHBgD: "#3b6a3d", //
        // drawHIcon: "#6B8E23", //Іконка шапки drawer
        // drawHIconD: "#6B8E23", //Іконка шапки drawer
        // drawHIconHov: "red", //Іконка шапки drawer
        // drawHIconHovD: "red", //Іконка шапки drawer
        // drawHMenuBg: "#F4F4EB", //Підменю
        // drawHMenuBgD: "#F4F4EB", //Підменю
        // drawHMenuBgHov: "#A5E189", //Підменю
        // drawHMenuBgHovD: "#A5E189", //Підменю
        // //
        // drawDropMenuText: "#6B8E23", //Текст випадаючого меню
        // drawDropMenuTextD: "#6B8E23", //Текст випадаючого меню
        drawDropMenuBg: "var(--color-drawDropMenuBg)", //"#E7F4E0", // "#F4F4EB",
        drawDropMenuBgD: "var(--color-drawDropMenuBg)", //"#E7F4E0", // "#F4F4EB",
        // drawDropHr: "#6B8E23", // Лінії розмежування
        // drawDropHrD: "#6B8E23", // Лінії розмежування

        //-- drawer\multilevelMenu --------------------------------------------
        // drawDropMenuSubMain: "green", //"#82AE46", //Головне(верхнє) підменю
        // drawDropMenuSubMainD: "green", //"#82AE46", //Головне(верхнє) підменю
        // drawDropMenuArrow: "#82AE46", // Стрілка верхньогоменю
        // drawDropMenuArrowD: "#82AE46", // Стрілка верхньогоменю
        // drawDropMenuSub: "#6B8E23", //Підменю
        // drawDropMenuSubD: "#6B8E23", //Підменю
        // drawDropMenuSubChevron: "#6B8E23", //Субменю/подвійна стрілка-шеврон
        // drawDropMenuSubChevronD: "#6B8E23", //Субменю/подвійна стрілка-шеврон
        // drawDropMenuItem: "#82AE46", // Стрілка верхньогоменю
        // drawDropMenuItemD: "#82AE46", // Стрілка верхньогоменю
        // drawDropMenuItemHov: "#f64532", // Стрілка верхньогоменю
        // drawDropMenuItemHovD: "#f64532", // Стрілка верхньогоменю

        //-- docHead --------------------------------------------
        // docHTitle: "#6B8E23", //1 "#fff",
        // docHTitleD: "#6B8E23", //1 "#fff",
        // docHLable: "#f64532", //"#6B8E23", //1"#fff",
        // docHLableD: "#f64532", //"#6B8E23", //1"#fff",
        // docHBg: "#f8f8f8;", //agGrid-шапка
        // docHBgD: "#222628", //agGrid head

        //-- table (title/icons)--------------------------------------------
        tabHTitle: "var(--color- tabHTitle)", //"#6B8E23", //1 "#82AE46",
        tabHeadTitleD: "var(--color- tabHTitleD)", //"#6B8E23", //1 "#82AE46",
        tabHText: "var(--color-tabHText)", //"#000",
        tabHTextD: "var(--color-tabHTextD)", // "#FFFF",
        tabHBg: "var(--color-tabHBg)", //"#f8f8f8;", //agGrid-шапка
        tabHBgD: "var(--color-tabHBgD)", //"#222628", //agGrid head "rgba(23,25,25,1)","#68686e",
        tabIconHov: "var(--color-tabIconHov)", //"#6B8E23", //Поки не використав
        tabIconHovD: "var(--color-tabIconHovD)", //"#6B8E23", //Поки не використав
        tabIconBorder: "var(--color-tabIconBorder)", //"#E7F4E0", // "#f64532",
        tabIconBorderD: "var(--color-tabIconBorderD)", //"#E7F4E0", // "#f64532",
        tabIconBgHov: "var(--color-tabIconBgHov)", //"#E7F4E0",
        tabIconBgHovD: "var(--color-tabIconBgHovD)", //"#E7F4E0",
        tableIconBgHov: "var(--color-tableIconBgHov)", //"#E7F4E0",
        tableIconBgHovD: "var(--color-tableIconBgHovD)", //"#E7F4E0",
        tabIcon: "var(--color-tabIcon)", //"#f64532",
        tabIconD: "var(--color-tabIconD)", //"#f64532",
        tabIcon1: "var(--color-tabIcon1)", //"var(--color-bgEclipse)", //"black",
        tabIcon1D: "var(--color-tabIcon1D)", // "black",

        //-- table (th/tr/нижній підсумок) ------------------------------------------
        tabThBorder: "var(--color-tabThBorder)", //"#babfc7", //ag_Grid border(шапка)
        tabThBorderD: "var(--color-tabThBorderD)", //"#dde2eb", //ag_Grid border-secondery)(між рядками)
        tabTrBorder: "var(--color-tabTrBorder)", //"#babfc7", //ag_Grid border(шапка)
        tabTrBorderD: "var(--color-tabTrBorderD)", // "#dde2eb", //ag_Grid border-secondery)(між рядками)
        //
        tabThTexCol: "var(--color-tabThTexCol)", //"rgb(31 41 55)", //-Заголовок(text-gray-800)
        tabThTexColD: "var(--color-tabThTexColD)", //"#d3d3d3", //-Заголовок(text-gray-400)
        tabThBgCol: "var(--color-tabThBgCol)", //"rgb(214 211 209)", //(bg-stone-300)
        tabThBgColD: "var(--color-tabThBgColD)", // "rgb(31 41 55)", ///"rgb(156 163 175)",
        //Рядки
        tabTrTexCol: "var(--color-tabTrTexCol)", //"var(--color-bgEclipse)", // "#000", //<td-ячейки(text-neutral-800)
        tabTrTexColD: "var(--color-tabTrTexColD)", //"#FFF", //(text-slate-200)
        tabTrBgCol: "var(--color-tabTrBgCol)", //"var(--color-bgEclipse)", // "rgb(255 255 255)", //Непарні (bg-white)
        tabTrBgColD: "var(--color-tabTrBgColD)", //"var(--color-bgEclipse)", //"rgb(55 65 81)", //(bg-gray-700)
        tabTrBgHovCol: "var(--color-tabTrBgHovCol)", //"rgb(231 229 228)", //При наведенні(bg-stone-200)
        tabTrBgHovColD: "var(--color-tabTrBgHovColD)", //"rgb(107 114 128)", //(bg-gray-500)
        tabTrBgEveCol: "var(--color-tabTrBgEveCol)", //"rgb(245 245 244)", //Парні(bg-stone-100)
        tabTrBgEveColD: "var(--color-tabTrBgEveColD)", // "rgb(75 85 99)", //(bg-gray-600)
        tabTrBgSelCol: "var(--color-tabTrBgSelCol)", // "#E8EFD3", //Вибрані рядки
        tabTrBgSelColD: "var(--color-tabTrBgSelColD)", // "#6B8E23", //
        tabTrBgSelHovCol: "var(--color-tabTrBgSelHovCol)", //"#C9DFA7", //
        tabTrBgSelHovColD: "var(--color-tabTrBgSelHovColD)", //"#82AE46", //
        tabIconHovBgCol: "var(--color-tabIconHovBgCol)", //"var(--color-bgEclipse)", // "#82AE46", //Іконки
        tabIconHovBgColD: "var(--color-tabIconHovBgColD)", //"#fff", //

        //-- form---------------------------------------------
        // formTitle: "green", //"#6B8E23", //1"#82AE46",
        // formTitleD: "#6B8E23", //1
        // formLabel: "#f64532",
        // formLabelD: "#6B8E23", //1
        // formBorder: "green",
        // formBorderD: "green",
        // formBg: "#fff", //білий
        // formBgD: "#000",
        // formSubmit: "#6B8E23", //"green",
        // formSubmitD: "#6B8E23", //"green",
        // formSubmitHov: "#f64532",
        // formSubmitHovD: "#f64532",
        // formButtBorder: "#E7F4E0", //"#fff", //білий
        // formButtBorderD: "#222628", //"#babfc7", //ag_Grid border(шапка)
        // formInputText: "#060214",
        // formInputTextD: "#fff", //білий
        // formInputBg: "#fff", //білий,
        // formInputBgD: "#181d1f",
        // formIcon: "#f64532",
        // formIconD: "#f64532",
        // formIconBgHov: "#E7F4E0",
        // formIconBgHovD: "#6B8E23",
        // formIcon1: "black",
        // formIcon1D: "black",
        // formIcon2: "#f64532",
        // formIcon2D: "#f64532",

        //-- dialog ---------------------------------------------
        // dialogTitle: "#f64532", //"#6B8E23", //"#82AE46",
        // dialogTitleD: "#f64532", //"#6B8E23", //"#82AE46",
        // dialogLabel1: "#6B8E23",
        // dialogLabel1D: "#6B8E23",
        // dialogLabel2: "grey",
        // dialogLabel2D: "grey",
        // dialogSum1: "#f64532", //"#0092ff","blue",
        // dialogSum1D: "#f64532", //"#0092ff","blue",
        // dialogSum2: "grey",
        // dialogSum2D: "grey",
        // dialogBorder: "#6B8E23",
        // dialogBorderD: "#6B8E23",
        // dialogBg: "#fff", //білий
        // dialogBgD: "rgba(65,69,69,1)",
        // dialogSubmit: "#6B8E23", //"green",
        // dialogSubmitD: "#6B8E23", //"green",
        // dialogSubmitHov: "#f64532",
        // dialogSubmitHovD: "#f64532",
        // dialogButt: "#6B8E23",
        // dialogButtD: "#6B8E23",
        // dialogButtHov: "#f64532",
        // dialogButtHovD: "#f64532",
        // dialogButtBg: "#fff", //білий
        // dialogButtBgD: "rgba(65,69,69,1)",
        // dialogButtBgHov: "#E7F4E0", //"#9ACD32",
        // dialogButtBgHovD: "#E7F4E0", //"#9ACD32",
        // dialogButtBorder: "#6B8E23",
        // dialogButtBorderD: "#6B8E23",
        // dialogInputText: "#060214",
        // dialogInputTextD: "#060214",
        // dialogInputBg: "#fff", //білий,
        // dialogInputBgD: "#fff", //білий,
        // dialogIcon: "#f64532",
        // dialogIconD: "#f64532",
        // dialogIconBgHov: "#E7F4E0",
        // dialogIconBgHovD: "#E7F4E0",
        // dialogIcon1: "black",
        // dialogIcon1D: "black",
        // dialogIcon2: "#f64532",
        // dialogIcon2D: "#f64532",

        //-- paper/папір--це контейнер для відображення вмісту на підвищеній поверхні.
        // paperBg: "rgb(223, 222, 222)",
        // paperBgD: "rgb(223, 222, 222)",
        // paperBoxShadow: "2px 2px 2px rgba(0, 0, 0, 0.6)",
        // paperBoxShadowD: "2px 2px 2px rgba(0, 0, 0, 0.5)",
        // paperHBg: "rgba(187,190,190,1)",
        // paperHBgD: "rgba(0, 0, 0, 0.5)", //"rgba(64,61,51,1)",
        // paperHBoxShadow: "2px 2px 2px rgba(0, 0, 0, 0.6)",
        // paperHdBoxShadowD: "2px 2px 2px rgba(23,25,25,0.9)",

        //-- card/Картки – це поверхні, які відображають вміст і дії(кнопка) на одну тему.
        // cardBorder: "rgba(187,190,190,0.5)",
        // cardBorderD: "rgba(187,190,190,0.5)",
        // cardBg: "#fff",
        // cardBgD: "rgb(223, 222, 222)",
        // cardBoxShadow: "2px 2px 2px rgba(0, 0, 0, 0.6)",
      },
      width: {
        128: "32rem",
        driwerW: "80vw",
        driwerH: "80vh",
      },
      maxWidth: {
        driwerMW: "700px",
        driwerMH: "800px",
      },
    },
    keyframes: {
      slideHome: {
        "0%": {
          opacity: 100,
        },
        "45%": {
          opacity: 100,
        },
        "55%": {
          opacity: 0,
        },

        "100%": {
          opacity: 0,
        },
      },
      slideHome1: {
        "0%": {
          opacity: 100,
        },
        "100%": {
          opacity: 0,
        },
      },

      drawerDroop: {
        "0%": {
          transform: "translateХ(0)",
        },
        "100%": {
          transform: "translateY(200px)",
        },
      },
    },
    //   animation-name: slideHome; //ім'я секції анімації
    //   animation-duration: 5s; //протяжність анімації
    //   animation-delay: 5s; //Затримка анімації після протяжність анімації
    //   animation-timing-function: linear; //рівномірна зміна//??ease-in-out
    //   animation-iteration-count: infinite; //к-сть повторів/rinfinite нескінченно
    //   animation-direction: alternate; //Анімація змінює напрямок в кожному циклі
    // animation: {
    //   slideHome: "slideHome linear infinite 5s  alternate",
    //   slideHome1: "slideHome1 5s 5s ease-in-out  infinite alternate",
    //   drawerDroop: "drawerDroop ease-in-out",
    // },
    // backgroundImage: {
    //   "sort-up": "url('/public/images/table/up_arrow.png')",
    //   "sort-down": "url('/public/images/table/down_arrow.png')",
    //   "sort-default": "url('/public/images/table/default.png')",
    // },
  },
  //   plugins: [],
  plugins: [nextui()],
};
