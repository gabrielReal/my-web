import React from 'react';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import { TestimonioSlide } from './TestimonioSlide';

const options = {
  nav: true,
  rewind: true,
  autoplay: false,
  responsive: {
    0: {
      items: 1,
    },
    600: {
      items: 1,
    },
    1000: {
      items: 2,
    },
  },
};

export const Testimonio = () => {
  return (
    <div className="testimonios-slide">
      <OwlCarousel className="owl-theme" {...options}>
        <TestimonioSlide />
      </OwlCarousel>
    </div>
  );
};
