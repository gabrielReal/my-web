import React from 'react'
import mail from "../assets/icon_mail.svg";
import wp from "../assets/icon_whatsapp.svg";

export const MainImageBtn = () => {

    return (
        <div className="MainImageBtn">
            <a href="mailto:dg.gabrielreal@gmail.com"><img src={mail} alt="mail"/></a>
            <a href="https://wa.me/1154622212" target="_blank" rel="noopener noreferrer"><img src={wp} alt="whatsapp"/></a>
        </div>
    )
}