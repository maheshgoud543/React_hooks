import { useContext } from "react";
import { ThemeProv } from "./ThemeProvider";
const Themebutton = () => {
  const { toggle, toggleTheme } = useContext(ThemeProv);
  return (
    <div>
      <button
        onClick={toggleTheme}
        style={{
          background: toggle === "dark" ? "black" : "white",
          color: toggle === "dark" ? "white" : "black",
        }}
      >
        Toggle
      </button>
    </div>
  );
};

export default Themebutton;
