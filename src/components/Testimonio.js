import React from "react";
import { useState, useEffect } from "react";
import testimoniosDB from "./TestimoniosDB";
import OwlCarousel from 'react-owl-carousel';  
import 'owl.carousel/dist/assets/owl.carousel.css';  
import 'owl.carousel/dist/assets/owl.theme.default.css';  
import { TestimonioSlide } from "./TestimonioSlide";


export const Testimonio = () => {

    const [, setTestimonios] = useState([]);

    const options = {
        nav: true,
        rewind: true,
        autoplay: false,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:1
            },
            1000:{
                items:2
            }
        }
    };
     
    

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

        <div className="testimonios-slide">
            <OwlCarousel className="owl-theme" {...options}>
                <TestimonioSlide />
            </OwlCarousel>         
        </div>

    )
}