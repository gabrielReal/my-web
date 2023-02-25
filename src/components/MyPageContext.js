
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Header } from './Header';
import { MainImage } from './MainImage';
import { Portfolio } from './Portfolio';
import { QuienSoy } from './QuienSoy';
import { Services } from './Services';
import { Valores } from './Valores';
import { Testimonios } from './Testimonios';
import { ScrollTopButton } from './ScrollTopButton';
import Formulario from './Formulario';
import { ThemeProvider } from '../context/ThemeContext';
import MainContext from "./MainContext";


const MyPageContext = () => {

    return (
      <div className="my-page">
        <ThemeProvider>
            <MainContext />
            <Header />
            <MainImage />
            <QuienSoy />
            <Services />
            <Valores />
            <Portfolio />
            <Testimonios />
            <Formulario />
            <ScrollTopButton />
        </ThemeProvider>         
      </div>
    );
  };
  
  export default MyPageContext;

