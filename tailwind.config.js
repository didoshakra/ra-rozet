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
        tapeMenuBg: "#82AE46",
        tapeMenuBgDark: "#000",
        // headMenuText: "#828C46",
        headMenuText: "#82AE46",
        // headMenuTextDark: "#82FF46",
        headMenuTextDark: "#6B8E23",
        headMenuTextBgHover: "#DFE6D4",
        // headMenuBg: "#C9DFA7",
        // headMenuBg: "#E8EFD3",
        headMenuBg: "#F1F4E2",
        headMenuBgDark: "rgb(30 41 59)",
        // headMenuBgDark: "rgb(15 23 42)",
        // headMenuBgDark:"#696969",

        // *** drawer
        drawerHeadBg: "#3b6a3d", //
        // drawerDropMenuText: "#6B8E23", //Текст випадаючого меню
        drawerDropMenuText: "#82FF46", //Текст випадаючого меню
        drawerDropMenuBg: "#E7F4E0",
        drawerDropHr: "#6B8E23", // Лінії розмежування

        // *** table
        //Заголовок/шапка/нижній підсумок
        tabThTexCol: "rgb(31 41 55)", //-Заголовок(text-gray-800)
        tabThBgCol: "rgb(214 211 209)", //(bg-stone-300)
        tabThTexColD: "rgb(156 163 175)", //-Заголовок(text-gray-400)
        tabThBgColD: "rgb(31 41 55)", //(bg-gray-800)
        //Рядки
        tabTrTexCol: "rgb(38 38 38)", //<td-ячейки(text-neutral-800)
        tabTrTexColD: "rgb(226 232 240)", //(text-slate-200)
        tabTrBgCol: "rgb(255 255 255)", //Непарні (bg-white)
        tabTrBgColD: "rgb(55 65 81)", //(bg-gray-700)
        tabTrBgHovCol: "rgb(231 229 228)", //При наведенні(bg-stone-200)
        tabTrBgHovColD: "rgb(107 114 128)", //(bg-gray-500)
        tabTrBgEveCol: "rgb(245 245 244)", //Парні(bg-stone-100)
        tabTrBgEveColD: "rgb(75 85 99)", //(bg-gray-600)
        // tabTrBgSelCol: "#C9DFA7", //Вибрані рядки
        tabTrBgSelCol: "#E8EFD3", //Вибрані рядки
        tabTrBgSelColD: "#6B8E23", //
        tabTrBgSelHovCol: "#C9DFA7", //
        tabTrBgSelHovColD: "#82AE46", //
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
          // transform: "translateY(0)",
        },
        "100%": {
          opacity: 0,
          // transform: "translateY(20px)",
        },
      },
      slideHome1: {
        "0%": {
          opacity: 100,
          // transform: "translateY(0)",
        },
        "100%": {
          opacity: 0,
          // transform: "translateY(20px)",
        },
      },
      drawerDroop: {
        "0%": {
          //   opacity: 100,
          transform: "translateХ(0)",
        },
        "100%": {
          //   opacity: 0,
          transform: "translateY(200px)",
        },
      },
    },
    //   animation-name: slideHome; //ім'я секції анімації
    //   animation-duration: 5s; //протяжність анімації
    //   animation-delay: 5s; //Затримка анімації після протяжність анімації
    //   animation-timing-function: linear; //рівномірна зміна
    //   animation-iteration-count: infinite; //к-сть повторів/rinfinite нескінченно
    //   animation-direction: alternate; //Анімація змінює напрямок в кожному циклі
    animation: {
      slideHome: "slideHome 5s ease-in-out infinite alternate",
      slideHome1: "slideHome1 5s 5s ease-in-out  infinite alternate",
      drawerDroop: "drawerDroop ease-in-out",
    },
    // backgroundImage: {
    //   "sort-up": "url('/public/images/table/up_arrow.png')",
    //   "sort-down": "url('/public/images/table/down_arrow.png')",
    //   "sort-default": "url('/public/images/table/default.png')",
    // },
  },
  //   plugins: [],
  plugins: [nextui()],
};
