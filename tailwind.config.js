/** @type {import('tailwindcss').Config} */
module.exports = {
  // screens: {'sm':'640px','md': '768px','lg': '1024px',xl': '1280px',2xl': '1536px',}
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
    //   backgroundImage: {
    //     "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
    //     "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
    //   },
      colors: {
        bgTapeMenu: "#82AE46",
        headMenuText: "#828C46",
        // headMenuText: "text-lime-700",
        // bgHeadMenu: "#C9DFA7",
        // bgHeadMenu: "#DFE6D4",
        // bgHeadMenu: "#E8EFD3",
        bgHeadMenu: "#F1F4E2",
        // headMenuText: "#82FF46",
        // headMenuText: "#82FF46",
        // mainColor: "#050C2A",
        mainColor: "red",
      },
    },
  },
  plugins: [],
}
