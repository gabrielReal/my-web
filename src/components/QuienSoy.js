import React from 'react';
import { QuienSoyDropdown } from "./QuienSoyDropdown";

export const QuienSoy = () => {
    return (
        <div className="quien_soy viewport" id="quiensoy">
            <p>Llevo varios años desarrollando mi profesión tanto en relación de dependencia como en el ámbito free-lance.
            Actualmente colaboro de manera estable con agencias de diseño y marketing digital, y estoy al frente de mi propio estudio: <strong>Cuatrovistas.</strong>
            <br/><br/>
            A lo largo de mi carrera me he ido adaptando exitosamente a los cambios constantes que afectaron a mi profesión con la llegada de la era digital. Este cambio de paradigma en la comunicación gráfica y social, me ha llevado a introducirme en el mundo del diseño de interfaces y el desarrollo web, a través de una constante capacitación.
            <br/><br/>
            Estoy preparado para colaborar en el diseño de Identidad Corporativa, folletos, catálogos, afiches, banners, etc. En materia de diseño y desarrollo web, Sitios Web complejos, Landings Pages, Banners animados o estáticos, Newsletters o Mailings responsivos, etc.
            <br/><br/>
            Enfrento cada proyecto con la misma pasión, buscando siempre lograr la satisfacción de quienes me confíen sus requerimientos. Ese es mi objetivo y el éxito más gratificante.</p>
            

            <QuienSoyDropdown />
        </div>
    )
}