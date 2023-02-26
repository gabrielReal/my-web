import React from "react";
import testimoniosDB from "./TestimoniosDB";


export const TestimonioSlide = () => {
    return (

        testimoniosDB.map((el) => (
            
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