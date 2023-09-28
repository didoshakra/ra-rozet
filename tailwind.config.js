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
        headMenuText: "#828C46",
        headMenuTextDark: "#82FF46",
        headMenuTextBgHover: "#DFE6D4",
        // headMenuBg: "#C9DFA7",
        // headMenuBg: "#E8EFD3",
        headMenuBg: "#F1F4E2",
        headMenuBgDark: "rgb(30 41 59)",
        // headMenuBgDark: "rgb(15 23 42)",
        // headMenuBgDark:"#696969",
        drawerHeadBg: "#3b6a3d", //
        // drawerDropMenuText: "#6B8E23", //Текст випадаючого меню
        drawerDropMenuText: "#82FF46", //Текст випадаючого меню
        drawerDropMenuBg: "#E7F4E0",
        drawerDropHr: "#6B8E23", // Лінії розмежування
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
