import React from 'react';
import diseno from "../assets/icon_diseno.svg";
import disenoweb from "../assets/icon_diseno_web.svg";
import desarrolloweb from "../assets/icon_desarrollo_web.svg"
import arrowdown from "../assets/icon_arrow_down.svg";





export const ServiceCard = () => {

const servicios = [
    {
        image: diseno,
        title: "DISEÑO GRÁFICO",
        text: "Diseño de todo tipo de piezas gráficas, implementando distintas estrategias de comunicación interna y externa acordes al requerimiento específico de cada caso.",
        arrow: {
            image: arrowdown,
            link: "#portfolio",
            text: "VER PORTFOLIO"
        },
    },

    {
        image: disenoweb,
        title: "DISEÑO WEB",
        text: "Diseño de interfaces amigables, considerando una óptima experiencia del usuario a través de la correcta usabilidad y navegabilidad.",
        arrow: {
            image: arrowdown,
            link: "#portfolio",
            text: "VER PORTFOLIO"
        },
    },

    {
        image: desarrolloweb,
        title: "DESARROLLO WEB",
        text: "Maquetado y programación web para que tu sitio quede online, sea ágil, escalable y adaptable a todos los dispositivos de navegación.",
        arrow: {
            image: arrowdown,
            link: "#portfolio",
            text: "VER PORTFOLIO"
        },
    },
]





  return (
    <>

        {servicios.map(servicio =>
            <article className="servicio"> 
                <img src={servicio.image} alt={`icono ${servicio.title}`}/>
                <div className="servicio-texto">
                <h4>{servicio.title}</h4>
                <p>{servicio.text}</p>
                <div className="servicio-arrow">
                    <a href= {servicio.arrow.link}><img src={servicio.arrow.image} alt="arrow"/>{servicio.arrow.text}</a>
                </div>
                </div>
            </article>)}
    </>
  )
}
