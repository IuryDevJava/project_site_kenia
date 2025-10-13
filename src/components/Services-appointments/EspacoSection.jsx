import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./EspacoSection.css";

import img1 from "../../assets/images/service-img/Image-card1.jpeg";
import img2 from "../../assets/images/service-img/Image-card2.jpeg";
import img3 from "../../assets/images/service-img/Image-card3.jpeg";
import img4 from "../../assets/images/service-img/Image-card4.jpeg";
import img5 from "../../assets/images/service-img/Image-card5.jpeg";
import img6 from "../../assets/images/service-img/Image-card6.jpeg";

function EspacoSection() {
  const espacoImages = [img1, img2, img3, img4, img5, img6];

  return (
    <section className="espaco-section">
      <div className="container">
        <div className="row">
          <div className="col-lg-4 col-md-12 espaco-texto">
            <h2>Nosso espaço</h2>
            <p>
              Nosso espaço foi pensado para oferecer conforto, privacidade e uma
              experiência única em cada consulta.
            </p>
          </div>

          <div className="col-lg-8 col-md-12">
            <div className="espaco-carousel-wrapper">
              <Swiper
                modules={[Navigation, Pagination]}
                spaceBetween={-25}
                slidesPerView={"auto"}
                centeredSlides={false}
                grabCursor={true}
                loop={true}
                navigation={{
                  nextEl: ".swiper-button-next-custom",
                  prevEl: ".swiper-button-prev-custom",
                }}
                // ✅ 1. A ÚNICA MUDANÇA NO SWIPER: DIZER ONDE FICARÃO OS BULLETS
                pagination={{
                  clickable: true,
                  el: ".swiper-pagination-container",
                }}
                className="espaco-swiper"
              >
                {espacoImages.map((imgSrc, index) => (
                  <SwiperSlide key={index}>
                    <img src={imgSrc} alt={`Foto do espaço ${index + 1}`} />
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>

          {/* O contêiner de controles fica fora da coluna do carrossel para alinhar com o container geral */}
          <div className="swiper-navigation-controls">
            {/* O contêiner dos bullets vem PRIMEIRO, para aparecer em cima */}
            <div className="swiper-pagination-container"></div>

            {/* ✅ 2. A ÚNICA MUDANÇA NA ESTRUTURA: AGRUPAR OS BOTÕES */}
            <div className="swiper-buttons-wrapper">
              <div className="swiper-button-prev-custom"></div>
              <div className="swiper-button-next-custom"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default EspacoSection;