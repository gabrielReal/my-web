import React from "react";
import { useContext } from "react";
import moon from "../assets/moon.svg";
import sun from "../assets/sun.svg";
import { DarkModeContext } from "../context/DarkModeContext";


export const ButtonTheme = () => {

const { darkMode, toggleDarkMode } = useContext(DarkModeContext);

const handleTheme = () => {
    toggleDarkMode();
}

  return (
    <button id="btn-theme" onClick={handleTheme}>
        {darkMode ? <img src={sun} alt="light-theme"/> : <img src={moon} alt="dark-theme"/>}
    </button>
  )
}
