import React from "react";
import { useState, useEffect } from "react";
import testimoniosDB from "./TestimoniosDB";


export const TestimonioSlide = () => {

    const [testimonios, setTestimonios] = useState([]);

    useEffect(() => {

        const getTestimonios = () => {
          
          testimoniosDB.forEach((el) => {
    
              let testimonio = {
                  id: el.id,
                  image: el.image,
                  client: el.client,
                  company: el.company,
                  text: el.text,
              };
      
              setTestimonios((testimonios) => [...testimonios, testimonio]);
            });
        }
      
        getTestimonios();
      }, []);

    return (

        testimonios.map((el) => (
            
            <div key={el.id} className="carousel-slide">
                <img src={el.image} alt={`icono ${el.client}`}/>
                <div className="testimonio-texto">
                    <h4>{el.client}</h4>
                    <h6>{el.company}</h6>
                    <p>{el.text}</p> 
                </div>
            </div>  
                
        ))
    );
}