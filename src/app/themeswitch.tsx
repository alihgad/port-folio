"use client";
import { cilMoon, cilSun } from "@coreui/icons";
import CIcon from "@coreui/icons-react";
import { useState, useEffect } from "react";

export default function ThemeSwitch() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    let theme = localStorage.getItem("theme");
    if (theme === "dark") {
      setDarkMode(true);
    } else {
      setDarkMode(false);
    }
  }, []);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);
  return <>
      <div
      className="relative  flex items-center  cursor-pointer "
      onClick={()=>{
        setDarkMode(!darkMode);
      }}
      >
        {darkMode ? 
        <CIcon icon={cilSun} size="xxl" className=" text-white"/> : <CIcon icon={cilMoon} size="xxl" />}
      </div>
  </>;
}
