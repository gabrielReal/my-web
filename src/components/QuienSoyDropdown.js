import React from 'react';
import { useState } from "react";
import arrowdown from "../assets/icon_arrow_down.svg";
import arrowup from "../assets/icon_arrow_up.svg";




export const QuienSoyDropdown = () => {
    const [open, setOpen] = useState(false);
    const [open2, setOpen2] = useState(false);
    const [open3, setOpen3] = useState(false);
    const [open4, setOpen4] = useState(false);

  
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

      const handleOpen4 = () => {
        setOpen4(!open4);
    };
    
      const handleMenuFour = () => {
        // do something
        setOpen4(false);
    };
  
    
  
    return (
      <div className="dropdown">
        <button onClick={handleOpen}>Educación {open ? <div className="arrow"><img src={arrowup} alt="arrow-up"/></div> : <div className="arrow"><img src={arrowdown} alt="arrow-down"/></div>} </button>
        
        {open ? (
          <ul className="menu-drop">
            <li className="menu-drop-item menu-drop-education">
              <button onClick={handleMenuOne}>
                <li>Diseñador Gráfico (ORT)</li>
                <li>Fotógrafía Integral<br/> (Escuela Argentina de Fotografía)</li>
                <li>Front-end Web Developer (EducactionIT)</li>
              </button>
            </li>
          </ul>
        ) : null}

        <button onClick={handleOpen2}>Experiencia {open2 ? <div className="arrow"><img src={arrowup} alt="arrow-up"/></div> : <div className="arrow"><img src={arrowdown} alt="arrow-down"/></div>}</button>
        {open2 ? (
          <ul className="menu-drop">
            <li className="menu-drop-item menu-drop-experience">
              <button onClick={handleMenuTwo}>
                <li>Deca Publicidad</li>
                <li>Konex-Canon Argentina</li>
                <li>Estudio de Diseño Creacion Uno</li>
                <li>Consult-ar Marketing Digital</li>
              </button>
            </li>
          </ul>
        ) : null}

        <button onClick={handleOpen3}>Habilidades Técnicas {open3 ? <div className="arrow"><img src={arrowup} alt="arrow-up"/></div> : <div className="arrow"><img src={arrowdown} alt="arrow-down"/></div>}</button>
        {open3 ? (
          <ul className="menu-drop">
            <li className="menu-drop-item menu-drop-skills">
              <button onClick={handleMenuTree}>
                <li>Adobe Suite</li>
                <li>HTML / CSS</li>
                <li>Bootstrap / Tailwind</li>
                <li>Vanilla Javascript</li>
                <li>ReactJS</li>
              </button>
            </li>
          </ul>
        ) : null}
        <button onClick={handleOpen4}>Habilidades Blandas {open4 ? <div className="arrow"><img src={arrowup} alt="arrow-up"/></div> : <div className="arrow"><img src={arrowdown} alt="arrow-down"/></div>}</button>
        {open4 ? (
          <ul className="menu-drop">
            <li className="menu-drop-item menu-drop-soft-skills">
              <button onClick={handleMenuFour}>
                <li>Responsabilidad</li>
                <li>Compromiso</li>
                <li>Creatividad</li>
                <li>Empatía</li>
              </button>
            </li>
          </ul>
        ) : null}
      </div>
    );
  };