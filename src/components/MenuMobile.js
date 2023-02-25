import React from 'react';
import { useRef } from "react";

export default function MenuMobile() {
    let refMenu = useRef(),
    refMenuBtn = useRef();

    const links = [{ id: 10, href: "#quiensoy", text: "QUIEN SOY"},
                  { id: 20, href: "#servicios", text: "SERVICIOS"},
                  { id: 30, href: "#caracteristicas", text: "CARACTERÍSTICAS"},
                  { id: 40, href: "#portfolio", text: "PORTFOLIO"},
                  { id: 50, href: "#testimonios", text: "TESTIMONIOS"},
                  { id: 60, href: "#contacto", text: "CONTACTO"}];


const handleToggleMenu = (e) => {

    if (refMenuBtn.current.textContent === "&#8801;") {
        refMenuBtn.current.textContent = "&#10005;";
        refMenu.current.style.display = "none";
    } else {
        refMenuBtn.current.textContent = "&#8801;";
        refMenu.current.style.display = "block";
        refMenu.current.style.opacity = "1";
        refMenu.current.style.visibility = "visible";
    }
};

return (

<>
    <button className="panel-btn" ref={refMenuBtn} onClick={handleToggleMenu}>&#8801;</button>

    <nav className="principalMobile" ref={refMenu}>
       <ul>
         {links.map(link =>
            <a key = {link.id} href={link.href}>{link.text}</a>)}
    
       </ul>
     </nav>
    </>
)
}