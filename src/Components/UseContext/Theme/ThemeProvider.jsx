import { createContext, useState } from "react";
import Themebutton from "./ThemeButton";
const ThemeProv = createContext();
const ThemeProvider = () => {
  const [toggle, setToggle] = useState("light");

  const toggleTheme = () => {
    setToggle((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };
  return (
    <div
      style={{
        backgroundColor: toggle === "dark" ? "#333" : "#fff",
        color: toggle === "dark" ? "#fff" : "#000",
        height: "100vh",
      }}
    >
      <ThemeProv.Provider value={{ toggle, toggleTheme }}>
        <Themebutton />
      </ThemeProv.Provider>
    </div>
  );
};

export {ThemeProv, ThemeProvider}