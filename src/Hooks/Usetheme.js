import create from "zustand";

export const BackgroundColors = ["white", "black", "red", "gray", "blue"];

const DEFAULT_COLOR = false;

export const useThemeToggle = create((set) => ({
  useDarkTheme: DEFAULT_COLOR,
  setUseDarkTheme: (useDarkTheme) =>
    set((state) => ({ useDarkTheme: useDarkTheme })),
}));
