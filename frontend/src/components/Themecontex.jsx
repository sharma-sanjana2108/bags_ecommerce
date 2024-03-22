import React, { useEffect, useState } from "react";
import { ThemeContext } from "../features/Context";

function ThemeProvider({ children }) {
  const [darkmode, setdarkmode] = useState(() => {
    const savedtheme = localStorage.getItem("theme");
    return savedtheme ? JSON.parse(savedtheme) : false;
  });
  const [register, setregister] = useState(false);
  const toggleTheme = () => {
    setdarkmode(!darkmode);
  };

  useEffect(() => {
    localStorage.setItem("theme", JSON.stringify(darkmode));
  }, [darkmode]);

  return (
    <ThemeContext.Provider
      value={{ darkmode, toggleTheme, register, setregister }}
    >
      {children}
    </ThemeContext.Provider>
  );
}

export default ThemeProvider;
