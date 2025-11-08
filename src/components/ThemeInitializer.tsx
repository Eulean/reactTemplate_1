import { useThemeStore } from "@/store/themeStore";
import { useEffect } from "react";

export function ThemeInitializer() {
  const { theme } = useThemeStore();

  useEffect(() => {
    // ensure theme class matches stored theme at startup
    document.documentElement.classList.toggle("dark", theme === "dark");
  }, [theme]);
  return null;
}
