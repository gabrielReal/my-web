import React from "react";
import { Circle } from "./Circle";



export const Valor = () => {

const porques = [
    {
        title: "Diseño UX",
        text: "Proyecto mis propuestas aplicando metodologías ágiles y centrando el desarrollo en la experiencia de potenciales usuarios.",
    },

    {
        title: "Desarrollos a medida",
        text: "Me adapto a las necesidades y requerimientos de cada cliente, considerando siempre la posibilidad de escalar el producto a futuro.",
    },

    {
        title: "Adaptabilidad",
        text: "Diseño aplicaciones web adaptables a todos los dispositivos de navegación.",
    },

    {
        title: "Usabilidad",
        text: "Busco que el flujo de navegación e interacción resulte accesible e intuitivo para el usuario, optimizando el tiempo de cada proceso.",
    }
];


  return (
    <section className="valores">
        {porques.map(porque =>
            <article className="valor-article"> 
                <Circle/>
                <div className="valor-texto">
                <h4>{porque.title}</h4>
                <p>{porque.text}</p>
                </div>
            </article>)}
    </section>
  )
}
