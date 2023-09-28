// Використання: своїх іконок з кольорами з tailwindcss.config//іконок з heroicons/react
"use client";
import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import resolveConfig from "tailwindcss/resolveConfig"; //отримання змінних з tailwind.config
import tailwindConfig from "@/tailwind.config"; //отримання змінних з tailwind.config
// import { SunIcon, MoonIcon } from "@heroicons/react/24/solid";
import { SunIcon, MoonIcon } from "@heroicons/react/24/outline";
import IconSun from "../ui/icons/head/IconSun_border";
import IconMoon from "../ui/icons/head/IconMoon_border";

const ThemeSwitcher = () => {
  const { resolvedTheme, setTheme } = useTheme();
  const { theme } = resolveConfig(tailwindConfig); //отримання змінних з tailwind.config
//   console.log("ThemeSwitche/theme.colors=", theme.colors);
  const colorIcon =
    resolvedTheme === "dark"
      ? theme.colors.headMenuTextDark
      : theme.colors.headMenuText;
  const iconSize = "25";

  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  if (!mounted) {
    return null;
  }

  return (
    <button
      label="Toggle Dark Mode"
      type="button"
      className="flex items-center justify-center rounded-full p-2 transition-colors hover:bg-zinc-200 dark:hover:bg-zinc-500"
      onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
    >
      {resolvedTheme === "dark" ? (
        <SunIcon className="h-8 w-8 text-headMenuTextDark" />
      ) : (
        // <IconSun width={iconSize} height={iconSize} colorFill={colorIcon} />
        <MoonIcon className="h-8 w-8 text-headMenuText" />
        // <IconMoon width={iconSize} height={iconSize} colorFill={colorIcon} />
      )}
    </button>
  );
};

export default ThemeSwitcher;
