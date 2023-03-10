/* IMAGENES */
import avtboton from "../assets/portfolio/avt-boton.jpg";
import paz from "../assets/portfolio/paz_boton.jpg";
import gamboaboton from "../assets/portfolio/BodegaGamboa_boton.jpg";
import signature from "../assets/portfolio/signature_boton.jpg";
import tecno from "../assets/portfolio/tecnobridge-boton.jpg";
import castro from "../assets/portfolio/castro-web-boton.jpg";
import solpa from "../assets/portfolio/solpa-web-boton.jpg";
import egsa from "../assets/portfolio/egsa_boton.jpg";
import brochure from "../assets/portfolio/castro-brochure-boton.jpg";
import vision from "../assets/portfolio/vision_boton.jpg";
import calvo from "../assets/portfolio/calvo_boton.jpg";
import maserati from "../assets/portfolio/maserati-boton.jpg";
import castrolanding from "../assets/portfolio/castro-landing-boton.jpg";
import taycom from "../assets/portfolio/taycom-boton.jpg";

import avt01 from "../assets/portfolio/avt-01.jpg";
import avt02 from "../assets/portfolio/avt-02.jpg";
import paz01 from "../assets/portfolio/paz_00.jpg";
import paz02 from "../assets/portfolio/paz_01.jpg";
import gamboa01 from "../assets/portfolio/BodegaGamboa_01.jpg";
import gamboa02 from "../assets/portfolio/BodegaGamboa_02.jpg";
import signa01 from "../assets/portfolio/signature_01.jpg";
import signa02 from "../assets/portfolio/signature_02.jpg";
import tecno01 from "../assets/portfolio/tecnobridge001.jpg";
import tecno02 from "../assets/portfolio/tecnobridge002.jpg";
import castro01 from "../assets/portfolio/castro-web.jpg";
import castro02 from "../assets/portfolio/castro-web-02.jpg";
import solpa01 from "../assets/portfolio/solpa-web.jpg";
import solpa02 from "../assets/portfolio/solpa-web-02.jpg";
import egsa01 from "../assets/portfolio/egsa_01.jpg";
import egsa02 from "../assets/portfolio/egsa_02.jpg";
import brochure01 from "../assets/portfolio/castro-brochure-02.jpg";
import brochure02 from "../assets/portfolio/castro-brochure-05.jpg";
import vision01 from "../assets/portfolio/vision_01.jpg";
import vision02 from "../assets/portfolio/vision_02.jpg";
import calvo01 from "../assets/portfolio/calvo_01.jpg";
import calvo02 from "../assets/portfolio/calvo_02.jpg";
import maserati01 from "../assets/portfolio/maserati-01.jpg";
import maserati02 from "../assets/portfolio/maserati-02.jpg";
import castrolanding01 from "../assets/portfolio/castro-landing-01.jpg";
import castrolanding02 from "../assets/portfolio/castro-landing-02.jpg";
import taycom01 from "../assets/portfolio/taycom-01.jpg";
import taycom02 from "../assets/portfolio/taycom-02.jpg";
import taycomIdentidadBtn from "../assets/portfolio/taycom-identidad-boton.jpg"
import taycomIdentidad from "../assets/portfolio/taycom-identidad-01.jpg";
import taycomIdentidad2 from "../assets/portfolio/taycom-identidad-02.jpg";
import exoticBtn from "../assets/portfolio/exotic-boton.jpg";
import exotic01 from "../assets/portfolio/exotic-01.jpg";
import exotic02 from "../assets/portfolio/exotic-02.jpg";
import exotic03 from "../assets/portfolio/exotic-03.jpg";
import fundalBtn from "../assets/portfolio/Fundal-boton.jpg"
import fundal01 from "../assets/portfolio/Fundal-01.jpg"
import fundal02 from "../assets/portfolio/Fundal-02.jpg"


const projectsDB = [
    {
      id: 101,
      client: "Argentina Virtual Tours",
      type: "Landing Page",
      category: ['all', 'web'],
      web: "www.argentinavirtualtours.com",
      link: "http://argentinavirtualtours.com/",
      description: "Desarrollo Front-end",
      description2: "HTML, CSS3 y Javascript",
      image: avtboton,
      slide01: avt01,
      slide02: avt02
    },
    {
      id: 102,
      client: "Paz Martorell",
      type: "Landing Page",
      category: ['all', 'web'],
      web: "www.pazmartorell.com.ar",
      link: "http://www.pazmartorell.com.ar",
      description: "Dise??o y Desarrollo Front-end",
      description2: "HTML, CSS3 y Javascript",
      image: paz,
      slide01: paz01,
      slide02: paz02
    },
    {
      id: 103,
      client: "BodegaGamboa",
      type: "Landing Page",
      category: ['all', 'web'],
      web: "www.bodegagamboa.com.ar",
      link: "http://bodegagamboa.com.ar/",
      description: "Desarrollo Front-end",
      description2: "HTML, CSS3 y Javascript",
      image: gamboaboton,
      slide01: gamboa01,
      slide02: gamboa02
    },
    {
      id: 104,
      client: "SignatureDMC",
      type: "Sitio Web",
      category: ['all', 'web'],
      web: "www.signaturedmc.com",
      link: "http://www.signaturedmc.com",
      description: "Dise??o Web",
      description2: "HTML, CSS3 y Javascript",
      image: signature,
      slide01: signa01,
      slide02: signa02
    },
    {
      id: 105,
      client: "Tecnobridge",
      type: "Sitio Web",
      category: ['all', 'web'],
      web: "www.tecnobridge.com.ar",
      link: "https://www.tecnobridge.com.ar",
      description: "Desarrollo Front-end",
      description2: "HTML, CSS3 y Javascript",
      image: tecno,
      slide01: tecno01,
      slide02: tecno02
    },
    {
      id: 106,
      client: "Castro & Asociados | Broker de Seguros",
      type: "Brochure Institucional",
      category: ['all', 'diseno'],
      description2: "Carpeta contenenedora",
      description3: "Solapa interna con troquel para tarjeta",
      description4: "Medida 22 x 30 cm",
      description5: "Cartulina mate de 350 grs",
      description6: "Polipropileno mate",
      image: brochure,
      slide01: brochure01,
      slide02: brochure02
    },
    {
      id: 107,
      client: "TAYCOM S.A. | Multilog??stica",
      type: "Imagen Corporativa",
      category: ['all', 'diseno'],
      description2: "Isologo",
      description3: "Branding",
      description4: "Papeler??a Institucional",
      image: taycomIdentidadBtn,
      slide01: taycomIdentidad,
      slide02: taycomIdentidad2
    },
    {
      id: 108,
      client: "FUNDAL | Ingenier??a y Dise??o",
      type: "Cat??logo de Productos",
      category: ['all', 'diseno'],
      description2: "Medida 21 x 29,7 cm",
      description3: "24 p??ginas",
      description4: "Impreso 4/4 colores",
      image: fundalBtn,
      slide01: fundal01,
      slide02: fundal02,
    },
    {
      id: 109,
      client: "EXOTIC | Agencia de Turismo",
      type: "Cat??logo de Productos",
      category: ['all', 'diseno'],
      description2: "Medida 21 x 29,7 cm",
      description3: "84 p??ginas",
      description4: "Impreso 4/4 colores",
      image: exoticBtn,
      slide01: exotic02,
      slide02: exotic03,
    },
    {
      id: 111,
      client: "Castro & Asociados | Broker de Seguros",
      type: "Webpage",
      category: ['all', 'web'],
      web: "www.organizacioncastro.com.ar",
      link: "https://www.organizacioncastro.com.ar/",
      description: "Dise??o Website",
      description2: "Desarrollo HTML, CSS y Javascript",
      image: castro,
      slide01: castro01,
      slide02: castro02
    },
    {
      id: 112,
      client: "Solpa S.A. | Insumos M??dicos",
      type: "Webpage",
      category: ['all', 'web'],
      web: "www.solpa.com.ar",
      link: "https://www.solpa.com.ar/",
      description: "Dise??o Website",
      description2: "Desarrollo HTML, CSS3 y Javascript",
      image: solpa,
      slide01: solpa01,
      slide02: solpa02
    },
    {
      id: 113,
      client: "EGSA | Geociencias",
      type: "Webpage",
      category: ['all', 'web'],
      web: "www.eg-sa.com.ar",
      link: "https://www.eg-sa.com.ar/",
      description: "Dise??o Website",
      description2: "Desarrollo HTML, CSS3 y Javascript",
      image: egsa,
      slide01: egsa01,
      slide02: egsa02
    },   
    {
      id: 114,
      client: "Vision Interior | F??brica de Muebles",
      type: "Cat??logo de Productos",
      category: ['all', 'diseno'],
      description2: "Dise??o de Cat??logo", 
      description3: "Formato A4", 
      description4: "28 p??ginas", 
      description5: "Encuadernado t??rmico",
      image: vision,
      slide01: vision01,
      slide02: vision02
    },
    {
      id: 115,
      client: "Estudio Calvo | Arquitectura",
      type: "Webpage",
      category: ['all', 'web'],
      web: "www.estudiocalvo.com",
      link: "https://www.estudiocalvo.com/",
      description: "Website",
      description2: "Desarrollo HTML, CSS3 y Bootstrap",
      image: calvo,
      slide01: calvo01,
      slide02: calvo02
    },
    {
      id: 112,
      client: "Maserati Argentina",
      type: "Landing Page",
      category: ['all', 'web'],
      web: "www.levante.maserati.com.ar",
      link: "http://levante.maserati.com.ar/",
      description: "Landing Page",
      description2: "Desarrollo HTML, CSS3 y Javascript",
      image: maserati,
      slide01: maserati01,
      slide02: maserati02
    },
    {
      id: 113,
      client: "Castro & Asociados | Broker de Seguros",
      type: "Landing Page",
      category: ['all', 'web'],
      web: "www.organizacioncastro.com.ar",
      link: "https://www.organizacioncastro.com.ar/landings/seguro-vida/index.php",
      description: "Landing Page",
      description2: "Desarrollo HTML, CSS3 y Javascript",
      image: castrolanding,
      slide01: castrolanding01,
      slide02: castrolanding02
    },
    {
      id: 114,
      client: "TAYCOM S.A. | Log??stica",
      type: "Folleto Institucional",
      category: ['all', 'diseno'],
      description2: "Folleto D??ptico", 
      description3: "Medida 21 x 29,7 cm", 
      description4: "Cartulina mate de 250 grs", 
      description5: "Polipropileno mate",
      image: taycom,
      slide01: taycom01,
      slide02: taycom02
    },
  ];

  export default projectsDB;