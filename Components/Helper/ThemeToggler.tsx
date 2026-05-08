"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { IoSunny, IoSunnyOutline } from "react-icons/io5";

const ThemeToggler = () => {
    const [mounted, setMounted] = useState(false);
    const { theme, setTheme, systemTheme } = useTheme();

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) return null;

    const currentTheme = theme === "system" ? systemTheme : theme;

    if (!currentTheme) return null;

    return (
        <button
            onClick={() =>
                setTheme(currentTheme === "dark" ? "light" : "dark")
            }
            className="p-2 w-10 h-10 bg-gray-100 dark:bg-gray-800 rounded-lg flex items-center justify-center"
        >
            {currentTheme === "dark" ? (
                <IoSunnyOutline className="w-7 h-7 text-white" />
            ) : (
                <IoSunny className="w-7 h-7 text-black dark:text-white" />
            )}
        </button>
    );
};

export default ThemeToggler;