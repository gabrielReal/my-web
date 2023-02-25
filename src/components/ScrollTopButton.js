import React from "react";
import { useState, useEffect } from "react";
import arrowup from "../assets/icon_arrow_up_white.svg";


export function ScrollTopButton() {
    
    const [visible, setVisible] = useState(false);

    const goToTop = () => {
        window.scroll({
            top: 0,
            left: 0,
            behavior: 'smooth',
          })
        };

    useEffect(() => {       

    const onScroll = e => {
        let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        if (scrollTop > 600) {
            setVisible(true);
          } else {
            setVisible(false);
          }
    };
        
    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
    }, [visible]);
  
    return (
      <>
        {visible &&
        <button onClick={goToTop} id="myBtn" title="Volver arriba"><img src={arrowup} alt="arrowup" className="buttonTopIcon" /></button> }
      </>
    )
    }