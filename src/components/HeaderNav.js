import React from 'react'

export const HeaderNav = () => {

    const links = [{ id: 10, href: "#quiensoy", text: "QUIEN SOY"},
                  { id: 20, href: "#servicios", text: "SERVICIOS"},
                  { id: 30, href: "#caracteristicas", text: "CARACTERÍSTICAS"},
                  { id: 40, href: "#portfolio", text: "PORTFOLIO"},
                  { id: 50, href: "#testimonios", text: "TESTIMONIOS"},
                  { id: 60, href: "#contacto", text: "CONTACTO"}];

  return (
    <nav className="principal">
       <ul>
         {links.map(link =>
            <a key = {link.id} href={link.href}>{link.text}</a>)}
    
       </ul>
     </nav>
  )
}