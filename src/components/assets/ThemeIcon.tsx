"use client";
import React, { useState, useEffect } from "react";
import { MoonStars, Sun } from "@phosphor-icons/react";

interface ThemeIconProps {
  cor: string;
  tamanho: number;
}

export default function ThemeIcon({ cor, tamanho }: ThemeIconProps) {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const detectDarkMode = () =>
      window.matchMedia &&
      window.matchMedia("(prefers-color-scheme: dark)").matches;

    setIsDarkMode(detectDarkMode());

    const handleChange = (event: MediaQueryListEvent) => {
      setIsDarkMode(event.matches);
    };

    const mediaQueryList = window.matchMedia("(prefers-color-scheme: dark)");
    mediaQueryList.addEventListener("change", handleChange);

    return () => {
      mediaQueryList.removeEventListener("change", handleChange);
    };
  }, []);

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [isDarkMode]);

  const toggleTheme = () => {
    setIsDarkMode((prev) => !prev);
  };

  // Determine the icon color based on the theme
  const iconColor = isDarkMode ? "white" : "black";

  return (
    <div>
      <button onClick={toggleTheme} className='mt-1'>
        {isDarkMode ? (
          <MoonStars size={tamanho} color={iconColor} />
        ) : (
          <Sun size={tamanho} color={iconColor} />
        )}
      </button>
    </div>
  );
}
