import React from "react";
import { useContext } from "react";
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
import { DarkModeContext } from "../context/DarkModeContext";


const MainContext = () => {

const { darkMode } = useContext(DarkModeContext);
  return (
    <main className={darkMode ? `` : `light`}>
            <Header />
            <MainImage />
            <QuienSoy />
            <Services />
            <Valores />
            <Portfolio />
            <Testimonios />
            <Formulario />
            <ScrollTopButton />
    </main>
  );
};

export default MainContext;
