import { create } from "zustand";
import { persist } from "zustand/middleware";

interface AppState {
  darkMode: boolean;
  toggleDarkMode: () => void;
  userName: string;
  setUserName: (name: string) => void;
}

export const userStore = create<AppState>()(
  persist(
    (set) => ({
      darkMode: false,
      toggleDarkMode: () => set((state) => ({ darkMode: !state.darkMode })),
      userName: "Guest",
      setUserName: (name) => set({ userName: name }),
    }),
    {
      name: "app-storage", // key name in localStorage
    },
  ),
);
