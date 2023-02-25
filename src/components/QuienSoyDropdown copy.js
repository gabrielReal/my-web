import React from 'react';
import { useState } from "react";
import arrowdown from "../assets/icon_arrow_down.svg";
import arrowup from "../assets/icon_arrow_up.svg";




export const QuienSoyDropdown = () => {
    const [open, setOpen] = useState(false);
    const [open2, setOpen2] = useState(false);
    const [open3, setOpen3] = useState(false);

  
    const handleOpen = () => {
      setOpen(!open);
    };
  
    const handleMenuOne = () => {
      // do something
      setOpen(false);
    };

    const handleOpen2 = () => {
      setOpen2(!open2);
    };
    
      const handleMenuTwo = () => {
        // do something
        setOpen2(false);
    };

    const handleOpen3 = () => {
        setOpen3(!open3);
    };
    
      const handleMenuTree = () => {
        // do something
        setOpen3(false);
    };
  
    
  
    return (
      <div className="dropdown">
        <button onClick={handleOpen}>Educación {open ? <div className="arrow"><img src={arrowup} alt="arrow-up"/></div> : <div className="arrow"><img src={arrowdown} alt="arrow-down"/></div>} </button>
        
        {open ? (
          <ul className="menu-drop">
            <li className="menu-drop-item">
              <button onClick={handleMenuOne}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ac tincidunt ex. Quisque vitae metus ut augue laoreet convallis in.</button>
            </li>
          </ul>
        ) : null}

        <button onClick={handleOpen2}>Experiencia {open2 ? <div className="arrow"><img src={arrowup} alt="arrow-up"/></div> : <div className="arrow"><img src={arrowdown} alt="arrow-down"/></div>}</button>
        {open2 ? (
          <ul className="menu-drop">
            <li className="menu-drop-item">
              <button onClick={handleMenuTwo}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ac tincidunt ex. Quisque vitae metus ut augue laoreet convallis in.</button>
            </li>
          </ul>
        ) : null}

        <button onClick={handleOpen3}>Habilidades {open3 ? <div className="arrow"><img src={arrowup} alt="arrow-up"/></div> : <div className="arrow"><img src={arrowdown} alt="arrow-down"/></div>}</button>
        {open3 ? (
          <ul className="menu-drop">
            <li className="menu-drop-item">
              <button onClick={handleMenuTree}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ac tincidunt ex. Quisque vitae metus ut augue laoreet convallis in.</button>
            </li>
          </ul>
        ) : null}
      </div>
    );
  };