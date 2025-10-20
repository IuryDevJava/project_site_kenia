import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "../../assets/Style/EspacoSection.css";
import { useTranslation } from "react-i18next";

import img1 from "../../assets/images/service-img/Image-card1 1.png";
import img2 from "../../assets/images/service-img/Image-card2 1.png";
import img3 from "../../assets/images/service-img/Image-card3.png";
import img4 from "../../assets/images/service-img/Image-card4 1.png";
import img5 from "../../assets/images/service-img/Image-card5.png";
import img6 from "../../assets/images/service-img/Image-card6 1.png";

function EspacoSection() {
  const espacoImages = [img1, img2, img3, img4, img5, img6];

  const { t } = useTranslation();

  return (
    <section className="espaco-section">
      <div className="container">
        <div className="row">
          <div className="col-lg-4 col-md-12 espaco-texto">
            <h2 className="space_h2">{t("services.appointmentsTitle")}</h2>
            <p className="p_espaco_section">
              {t("services.appointmentsText")}
            </p>
          </div>

          <div className="col-lg-8 col-md-12">
            <div className="espaco-carousel-wrapper">
              <Swiper
                modules={[Navigation, Pagination]}
                spaceBetween={2}
                slidesPerView={"auto"}
                centeredSlides={false}
                grabCursor={true}
                loop={true}
                navigation={{
                  nextEl: ".swiper-button-next-custom",
                  prevEl: ".swiper-button-prev-custom",
                }}
                pagination={{
                  clickable: true,
                  el: ".swiper-pagination-container",
                }}
                className="espaco-swiper"
              >

              {/* <Swiper
                modules={[Navigation, Pagination]}
                spaceBetween={24} // positivo (sem "recortes")
                slidesPerView={"auto"}
                centeredSlides={true} // centraliza o slide principal
                grabCursor={true}
                loop={true}
                navigation={{
                  nextEl: ".swiper-button-next-custom",
                  prevEl: ".swiper-button-prev-custom",
                }}
                pagination={{
                  clickable: true,
                  el: ".swiper-pagination-container",
                }}
                className="espaco-swiper"
              > */}
                {espacoImages.map((imgSrc, index) => (
                  <SwiperSlide key={index}>
                    <img src={imgSrc} alt={`Foto do espaço ${index + 1}`} />
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
          <div className="swiper-navigation-controls">
            <div className="swiper-pagination-container"></div>
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
