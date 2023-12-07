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
        text: "#060214",
        textD: "#fff",
        bg: "#fff", //білий/
        bgD: "rgba(65,69,69,1)",
        errorMsg: "#f21e08",
        errorMsgD: "#f21e08",
        eclipseBg: "rgba(0, 0, 0, 0.4)", //Затемнення екрану

        // *** drawer
        drawerDropMenuText: "#82FF46", //Текст випадаючого меню
        drawerDropMenuBg: "#E7F4E0",
        drawerDropHr: "#6B8E23", // Лінії розмежування

        //-- headTape --------------------------------------------
        hTapeText: "#fff",
        hTapeTextD: "#6B8E23", //"#9de160", //"#82AE46",
        hTapeBg: "#6B8E23", //"#82AE46", //1 "#82AE46",
        hTapeBgD: "#000", //"rgba(65,69,69,1)",
        hTapeTextHov: "red",
        hTapeTextHovD: "red",
        hTapeTextBgHov: "#82AE46",
        hTapeTextBgHovD: "rgba(65,69,69,1)",

        //-- head --------------------------------------------
        hText: "#6B8E23", //1 "#82AE46",
        hTextD: "#fff", //білий
        hBg: "#E7F4E0", // "#F4F4EB", "#fff", //білий
        hBD: "rgba(23,25,25,1)",
        hTextHov: "#fff",
        hTextHovD: "rgba(23,25,25,1)",
        hBgHovr: "#82AE46",
        hBgHovD: "#fff", //білий

        //-- headLogo --------------------------------------------
        hLogoText: "#6B8E23", //"#6B8E23", //1 "#82AE46",
        hLogoTextD: "#6B8E23", //"#6B8E23", //1
        hLogoTextHov: "red",
        hLogoTextHovD: "red",

        //--  headIcon --------------------------------------------
        IconH: "#6B8E23", //1 "#82AE46", "rgba(23,25,25,1)",
        IconHD: "#6B8E23", //"#9de160", //"#6B8E23", //1 "#82AE46", "rgba(23,25,25,1)",
        IconHHov: "red",
        IconHHovD: "red",
        IconHBg: "rgba(65,69,69,1)",
        IconHBgD: "rgba(65,69,69,1)",
        IconHBgHov: "#C9DFA7",
        IconHBgHovD: "#E8EFD3",

        //-- headMobile --------------------------------------------
        hMobileText: "#6B8E23", //"#82AE46",
        hMobileTextD: "#6B8E23", // "#82AE46",
        hMobileTextHov: "red",
        hMobileTextHovD: "red",
        hMobileBg: "rgba(65,69,69,1)",
        hMobileBgD: "rgba(65,69,69,1)",
        hMobiletBgHov: "#fff", //білий
        hMobiletBgHovD: "#fff", //білий
        hMobileIcon: "red",
        hMobileIconD: "red",

        //-- headMenu / + Всі випадаючі з head меню ???
        menuBorder: "#DCDCDC", //1  "#82AE46",
        // menuBorderD: "#F4F4EB", //1  "#82AE46",
        menuBorderD: "#6B8E23", //1  "#82AE46",
        menuText: "#6B8E23", // "#82AE46",
        menuTextD: "#6B8E23", //"#9de160", //"#95dd77","#9dd360", // //"#32cd32", //"#C9DFA7", //"#A5E189",
        // menuTextD: "#fff", //1  "#82AE46",
        menuTextHov: "#fff",
        menuTextHovD: "#fff",
        menuBg: "#E7F4E0",
        menuBgD: "rgba(23,25,25,1)",
        menuBgHov: "#82AE46",
        menuBgHovD: "#82AE46",
        menuAct: "#fff",
        menuActD: "#fff",
        menuActBg: "red",
        menuActBgD: "red",
        menuGorizBgHov: "#f64532",
        menuGorizBgHovD: "#f64532",

        //-- menuDroop /випадаючі меню (ше не викор)
        menuDropBorder: "#DCDCDC",
        menuDropBorderD: "#F4F4EB",
        menuDropText: "#82AE46",
        menuDropTextD: "#82AE46",
        menuDropTextHov: "#fff",
        menuDropTextHovD: "#fff",
        menuDropBg: "#F4F4EB", //"#DCDCDC","#fff",
        menuDropBgD: "rgba(65,69,69,1)",
        menuDropBgHov: "#A5E189",
        menuDropBgHovD: "#82AE46",
        menuDropActBg: "red",
        menuDropActBgD: "red",

        //-- drawer --------------------------------------------
        drawHText: "#6B8E23", //
        drawHTextD: "#6B8E23", //
        drawHTextHor: "#fff", //Підменю
        drawHTextHorD: "#fff", //Підменю
        drawHBg: "#3b6a3d", //
        drawHBgD: "#3b6a3d", //
        drawIconH: "#6B8E23", //Іконка шапки drawer
        drawIconHD: "#6B8E23", //Іконка шапки drawer
        drawIconHHov: "red", //Іконка шапки drawer
        drawIconHHovD: "red", //Іконка шапки drawer
        drawmenuBg: "#F4F4EB", //Підменю
        drawmenuBgD: "#F4F4EB", //Підменю
        drawmenuBgHov: "#A5E189", //Підменю
        drawmenuBgHovD: "#A5E189", //Підменю
        //
        drawDropMenuText: "#6B8E23", //Текст випадаючого меню
        drawDropMenuTextD: "#6B8E23", //Текст випадаючого меню
        drawDropMenuBg: "#E7F4E0", // "#F4F4EB",
        drawDropMenuBgD: "#E7F4E0", // "#F4F4EB",
        drawDropHr: "#6B8E23", // Лінії розмежування
        drawDropHrD: "#6B8E23", // Лінії розмежування

        //-- drawer\multilevelMenu --------------------------------------------
        drawDropMenuSubMain: "green", //"#82AE46", //Головне(верхнє) підменю
        drawDropMenuSubMainD: "green", //"#82AE46", //Головне(верхнє) підменю
        drawDropMenuArrow: "#82AE46", // Стрілка верхньогоменю
        drawDropMenuArrowD: "#82AE46", // Стрілка верхньогоменю
        drawDropMenuSub: "#6B8E23", //Підменю
        drawDropMenuSubD: "#6B8E23", //Підменю
        drawDropMenuSubChevron: "#6B8E23", //Субменю/подвійна стрілка-шеврон
        drawDropMenuSubChevronD: "#6B8E23", //Субменю/подвійна стрілка-шеврон
        drawDropMenuItem: "#82AE46", // Стрілка верхньогоменю
        drawDropMenuItemD: "#82AE46", // Стрілка верхньогоменю
        drawDropMenuItemHov: "#f64532", // Стрілка верхньогоменю
        drawDropMenuItemHovD: "#f64532", // Стрілка верхньогоменю

        //-- docHead --------------------------------------------
        docHTitle: "#6B8E23", //1 "#fff",
        docHTitleD: "#6B8E23", //1 "#fff",
        docHLable: "#f64532", //"#6B8E23", //1"#fff",
        docHLableD: "#f64532", //"#6B8E23", //1"#fff",
        docHBg: "#f8f8f8;", //agGrid-шапка
        docHBgD: "#222628", //agGrid head

        //-- table (title/icons)--------------------------------------------
        tabHTitle: "#6B8E23", //1 "#82AE46",
        tabHeadTitleD: "#6B8E23", //1 "#82AE46",
        tabHText: "#000",
        tabHTextD: "#FFFF",
        tabHBg: "#f8f8f8;", //agGrid-шапка
        tabHBgD: "#222628", //agGrid head "rgba(23,25,25,1)","#68686e",
        iconT: "#f64532",
        iconTD: "#f64532",
        iconTHov: "#6B8E23", //Поки не використав
        iconTHovD: "#6B8E23", //Поки не використав
        iconTBorder: "#E7F4E0", // "#f64532",
        iconTBorderD: "#E7F4E0", // "#f64532",
        iconTBgHov: "#E7F4E0",

        iconT1: "black",
        iconT1D: "black",
        iconT2: "#f64532",
        iconT2D: "#f64532",
        //-- table (th/tr/нижній підсумок) ------------------------------------------
        tabThBorder: "#babfc7", //ag_Grid border(шапка)
        tabThBorderD: "#dde2eb", //ag_Grid border-secondery)(між рядками)
        tabTrBorder: "#babfc7", //ag_Grid border(шапка)
        tabTrBorderD: "#dde2eb", //ag_Grid border-secondery)(між рядками)
        //
        tabThTexCol: "rgb(31 41 55)", //-Заголовок(text-gray-800)
        tabThTexColD: "#d3d3d3", //-Заголовок(text-gray-400)
        // tabThTexColD: "rgb(156 163 175)", //-Заголовок(text-gray-400)
        tabThBgCol: "rgb(214 211 209)", //(bg-stone-300)
        // tabThTexColD: "rgb(156 163 175)", //-Заголовок(text-gray-400)
        tabThBgColD: "rgb(31 41 55)", //(bg-gray-800)
        //Рядки
        // tabTrTexCol: "rgb(38 38 38)", //<td-ячейки(text-neutral-800)
        tabTrTexCol: "#000", //<td-ячейки(text-neutral-800)
        // tabTrTexColD: "rgb(226 232 240)", //(text-slate-200)
        tabTrTexColD: "#FFF", //(text-slate-200)
        tabTrBgCol: "rgb(255 255 255)", //Непарні (bg-white)
        tabTrBgColD: "rgb(55 65 81)", //(bg-gray-700)
        tabTrBgHovCol: "rgb(231 229 228)", //При наведенні(bg-stone-200)
        tabTrBgHovColD: "rgb(107 114 128)", //(bg-gray-500)
        tabTrBgEveCol: "rgb(245 245 244)", //Парні(bg-stone-100)
        tabTrBgEveColD: "rgb(75 85 99)", //(bg-gray-600)
        tabTrBgSelCol: "#E8EFD3", //Вибрані рядки
        tabTrBgSelColD: "#6B8E23", //
        tabTrBgSelHovCol: "#C9DFA7", //
        tabTrBgSelHovColD: "#82AE46", //
        iconTHovBgCol: "#82AE46", //Іконки
        iconTHovBgColD: "#fff", //

        //-- form---------------------------------------------
        formTitle: "green", //"#6B8E23", //1"#82AE46",
        formTitleD: "#6B8E23", //1
        formLabel: "#f64532",
        formLabelD: "#6B8E23", //1
        formBorder: "green",
        formBorderD: "green",
        formBg: "#fff", //білий
        formBgD: "#000",
        formSubmit: "#6B8E23", //"green",
        formSubmitD: "#6B8E23", //"green",
        formSubmitHov: "#f64532",
        formSubmitHovD: "#f64532",
        formButtBorder: "#E7F4E0", //"#fff", //білий
        formButtBorderD: "#222628", //"#babfc7", //ag_Grid border(шапка)
        formInputText: "#060214",
        formInputTextD: "#fff", //білий
        formInputBg: "#fff", //білий,
        formInputBgD: "#181d1f",
        formIcon: "#f64532",
        formIconD: "#f64532",
        formIconBgHov: "#E7F4E0",
        formIconBgHovD: "#6B8E23",
        formIcon1: "black",
        formIcon1D: "black",
        formIcon2: "#f64532",
        formIcon2D: "#f64532",

        //-- dialog ---------------------------------------------
        dialogTitle: "#f64532", //"#6B8E23", //"#82AE46",
        dialogTitleD: "#f64532", //"#6B8E23", //"#82AE46",
        dialogLabel1: "#6B8E23",
        dialogLabel1D: "#6B8E23",
        dialogLabel2: "grey",
        dialogLabel2D: "grey",
        dialogSum1: "#f64532", //"#0092ff","blue",
        dialogSum1D: "#f64532", //"#0092ff","blue",
        dialogSum2: "grey",
        dialogSum2D: "grey",
        dialogBorder: "#6B8E23",
        dialogBorderD: "#6B8E23",
        dialogBg: "#fff", //білий
        dialogBgD: "rgba(65,69,69,1)",
        dialogSubmit: "#6B8E23", //"green",
        dialogSubmitD: "#6B8E23", //"green",
        dialogSubmitHov: "#f64532",
        dialogSubmitHovD: "#f64532",
        dialogButt: "#6B8E23",
        dialogButtD: "#6B8E23",
        dialogButtHov: "#f64532",
        dialogButtHovD: "#f64532",
        dialogButtBg: "#fff", //білий
        dialogButtBgD: "rgba(65,69,69,1)",
        dialogButtBgHov: "#E7F4E0", //"#9ACD32",
        dialogButtBgHovD: "#E7F4E0", //"#9ACD32",
        dialogButtBorder: "#6B8E23",
        dialogButtBorderD: "#6B8E23",
        dialogInputText: "#060214",
        dialogInputTextD: "#060214",
        dialogInputBg: "#fff", //білий,
        dialogInputBgD: "#fff", //білий,
        dialogIcon: "#f64532",
        dialogIconD: "#f64532",
        dialogIconBgHov: "#E7F4E0",
        dialogIconBgHovD: "#E7F4E0",
        dialogIcon1: "black",
        dialogIcon1D: "black",
        dialogIcon2: "#f64532",
        dialogIcon2D: "#f64532",

        //-- paper/папір--це контейнер для відображення вмісту на підвищеній поверхні.
        paperBg: "rgb(223, 222, 222)",
        paperBgD: "rgb(223, 222, 222)",
        paperBoxShadow: "2px 2px 2px rgba(0, 0, 0, 0.6)",
        paperBoxShadowD: "2px 2px 2px rgba(0, 0, 0, 0.5)",
        paperHBg: "rgba(187,190,190,1)",
        paperHBgD: "rgba(0, 0, 0, 0.5)", //"rgba(64,61,51,1)",
        paperHBoxShadow: "2px 2px 2px rgba(0, 0, 0, 0.6)",
        paperHdBoxShadowD: "2px 2px 2px rgba(23,25,25,0.9)",

        //-- card/Картки – це поверхні, які відображають вміст і дії(кнопка) на одну тему.
        cardBorder: "rgba(187,190,190,0.5)",
        cardBorderD: "rgba(187,190,190,0.5)",
        cardBg: "#fff",
        cardBgD: "rgb(223, 222, 222)",
        cardBoxShadow: "2px 2px 2px rgba(0, 0, 0, 0.6)",
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
