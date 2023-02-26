import React from "react";
import { Circle } from "./Circle";

const porques = [
    {   id:'qwe',
        title: "Diseño UX",
        text: "Proyecto mis propuestas aplicando metodologías ágiles y centrando el desarrollo en la experiencia de potenciales usuarios.",
    },

    {   id:'qwer',
        title: "Desarrollos a medida",
        text: "Me adapto a las necesidades y requerimientos de cada cliente, considerando siempre la posibilidad de escalar el producto a futuro.",
    },

    {   id:'qwert',
        title: "Adaptabilidad",
        text: "Diseño aplicaciones web adaptables a todos los dispositivos de navegación.",
    },

    {   id:'qwerty',
        title: "Usabilidad",
        text: "Busco que el flujo de navegación e interacción resulte accesible e intuitivo para el usuario, optimizando el tiempo de cada proceso.",
    }
];

export const Valor = () => {




  return (
    <section className="valores">
        {porques.map(porque =>
            <article className="valor-article" key={porque.id}> 
                <Circle/>
                <div className="valor-texto">
                <h4>{porque.title}</h4>
                <p>{porque.text}</p>
                </div>
            </article>)}
    </section>
  )
}
