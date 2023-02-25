import React from "react";
import { createContext, useState } from "react";

const DarkModeContext = createContext();


const DarkModeProvider = ({ children }) => {
  const [darkMode, setDarkMode] = useState(true);

  const toggleDarkMode = () => {
      setDarkMode(!darkMode);
  };


  return (
    <DarkModeContext.Provider 
    value={{darkMode, toggleDarkMode}}>
        {children}
    </DarkModeContext.Provider>
  )
};

export { DarkModeContext, DarkModeProvider };