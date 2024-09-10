"use client";

import { MoonIcon, SunIcon } from "lucide-react";
import { ThemeProvider as NextThemesProvider, useTheme } from "next-themes";
import { type ThemeProviderProps } from "next-themes/dist/types";
import * as React from "react";

export function ThemeProvider({ children, ...props }: ThemeProviderProps) {
  return <NextThemesProvider {...props}>{children}</NextThemesProvider>;
}

export function ThemeButton(): JSX.Element {
  const { setTheme, resolvedTheme } = useTheme();
  const [currentTheme, setThemeState] = React.useState(resolvedTheme);

  React.useEffect(() => {
    setThemeState(resolvedTheme);
  }, [resolvedTheme]);

  const handleThemeChange = () => {
    const newTheme = currentTheme === "dark" ? "light" : "dark";
    setTheme(newTheme);
    setThemeState(newTheme);
  };

  return (
    <div className="cursor-pointer px-2" onClick={handleThemeChange}>
      {currentTheme === "dark" ? <MoonIcon size={20} /> : <SunIcon size={20} />}
    </div>
  );
}
