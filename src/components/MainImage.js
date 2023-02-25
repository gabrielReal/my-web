import React from 'react'
import { MainImageBtn } from "./MainImageBtn"

export const MainImage = () => {
    return (
        <div className="main-image viewport">
            <p>BIENVENIDOS</p>
            <h1>Hola, soy Gabriel Real</h1>
            <h3>Diseñador Gráfico especializado<br/> 
            en Diseño UI y Desarrollo Web.
            </h3>
            <p>Si necesitás mi colaboración escribime y te responderé a la brevedad.</p> 
            <MainImageBtn />       
        </div>
    )
}