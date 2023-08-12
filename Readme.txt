//20230723-lorozet
//Проба зробити шпблон свйту https://rozetka.com.ua/ua/
==================================================================
Для того щоб працювала допомога по tailwindcss треба:
    - у VSCode: Tailwind CSS IntelliSense - підказки по командах
    - у проекті:https://github.com/tailwindlabs/prettier-plugin-tailwindcss
        - npm install -D prettier prettier-plugin-tailwindcss
        - // prettier.config.js
            module.exports = {
            plugins: ['prettier-plugin-tailwindcss'],
            }
------------------------------------------------------------------------------
2023.06.23/Dark Mode in Next Js 13
https://medium.com/@danielcracbusiness/dark-mode-in-next-js-13-aab566d20baa
npm i next-themes
npm i react-icons
Для того, щоб можна було використовувати свої теми darkMode у className= "dark:bg-slate-800"
треба в tailwind.config.js: module.exports = { darkMode: 'class',
}
---------------------------------------------------------------------------
// Використання: своїх іконок з кольорами з tailwindcss.config
import resolveConfig from "tailwindcss/resolveConfig"; //отримання змінних з tailwind.config
import tailwindConfig from "@/tailwind.config"; //отримання змінних з tailwind.config
*** Отримання змінних з TailwindCSS:
    -отримання змінних з tailwind.config
        import resolveConfig from "tailwindcss/resolveConfig";
        import tailwindConfig from "@/tailwind.config";
        const { theme } = resolveConfig(tailwindConfig);
        console.log("ThemeSwitche/theme=", theme);
        console.log("ThemeSwitche/theme.colors=", theme.colors);
    - зміні теми з допомогою import { useTheme } from "next-themes";
        const { resolvedTheme, setTheme } = useTheme();
        сonst colorIcon =resolvedTheme === "dark"? theme.colors.darkHeadMenuText: theme.colors.headMenuText;
    -отримання внутрішніх змінних tailwindcss/кольорів
        const requireColors = require("tailwindcss/colors");
        console.log("ThemeSwitche/requireColors=", requireColors);
----------------------------------------------------------------------------
*** використання іконок з heroicons
        Dark Theme in NextJs 13 – Using React Context in Server Components//https://www.youtube.com/watch?v=RTAJ-enfums&ab_channel=HamedBahram
    npm i @heroicons/react --save-dev // Для добавлення іконок з heroicons