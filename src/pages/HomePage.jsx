import React from 'react';

// Importe todos os componentes que a página inicial precisa
import About from '../components/About/About';
import Service from '../components/Services-appointments/Service';
import EspacoSection from '../components/Services-appointments/EspacoSection';
import Products from '../components/Products/Products';
import Location from '../components/Location/Location';
import useSmoothScroll from "../hooks/useHashScrollOffset";

const HomePage = () => {
  useSmoothScroll(80, { closeMenuSelector: ".menu-toggle" });

  return (
    <>
      <About />
      <Service />
      <EspacoSection />
      <Products />
      {/* <Faq /> */}
      <Location />
    </>
  );
};

export default HomePage;