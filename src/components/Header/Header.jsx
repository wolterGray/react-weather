import React from "react";
import cl from "./header.module.scss";
import {LuMoon, LuSun} from "react-icons/lu";
import {RiCelsiusFill, RiFahrenheitFill} from "react-icons/ri";
import {MyContext} from "../../myContext";

function Header() {
  const storedTheme = localStorage.getItem("theme");
  const {degrees, setDegrees} = React.useContext(MyContext);
  const [theme, setTheme] = React.useState(storedTheme || "light");
  const toggleDegrees = () => {
    const newDegrees = degrees === "cel" ? "fah" : "cel";
    setDegrees(newDegrees);
    localStorage.setItem("degrees", newDegrees);
  };
  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
    document.body.className = newTheme;
  };
  React.useEffect(() => {
    document.body.className = theme;
  }, []);
  return (
    <div className={cl.header}>
      <nav className={`${cl.nav} container`}>
        <a href="#" className={cl.logo}>
          REACT<span> WR</span>
        </a>
        <div className={cl.tools}>
          <div onClick={toggleDegrees} className={cl.toggle}>
            {degrees === "cel" ? <RiCelsiusFill /> : <RiFahrenheitFill />}
          </div>
          <div onClick={toggleTheme} className={cl.toggle}>
            {theme === "dark" ? <LuMoon /> : <LuSun />}
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Header;
