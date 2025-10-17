import React from 'react';

// Importe todos os componentes que a página inicial precisa
import About from '../components/About/About';
import Service from '../components/Services-appointments/Service';
import EspacoSection from '../components/Services-appointments/EspacoSection';
import Products from '../components/Products/Products';
import Faq from '../components/AskedQuestions/Faq';
import Location from '../components/Location/Location';

// Importe o hook se ele for específico desta página
import useSmoothScroll from "../hooks/useSmoothScroll";

const HomePage = () => {
  // Se o scroll suave é para a página inteira, ele pode ficar no App.js ou no Layout
  // Se for só para âncoras DENTRO da HomePage, mantenha aqui.
  useSmoothScroll(80, { closeMenuSelector: ".menu-toggle" });

  return (
    // Usamos um Fragment <> para agrupar os componentes
    <>
      <About />
      <Service />
      <EspacoSection />
      <Products />
      <Faq />
      <Location />
    </>
  );
};

export default HomePage;