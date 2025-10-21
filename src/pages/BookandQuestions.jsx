// src/pages/BookandQuestions.js

import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Navigation, Thumbs } from "swiper/modules";
import AnimatedButton from "../components/Products/AnimatedButton";
import { useTranslation } from "react-i18next"; // 1. IMPORTAR

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";

import "../assets/Style/BookandQuestions.css";

// Importações de Imagens (sem alteração)
import ImageProductBookDesk from "../assets/images/products-img/front-image-desk.png";
import ImageProductBookTablet from "../assets/images/products-img/front-image-tablet.png";
import ImageProductBookMobile from "../assets/images/products-img/front-image-mobile.png";
import ImageProductBookBackDesk from "../assets/images/products-img/back-book-desk.png";
import ImageProductBookBackTablet from "../assets/images/products-img/back-book-tablet.png";
import ImageProductBookBackMobile from "../assets/images/products-img/back-book-mobile.png";

import Faq from "../components/AskedQuestions/Faq";

// A constante bookImages FOI MOVIDA DAQUI...

const BookandQuestions = () => {
  const { t } = useTranslation(); // 2. INICIAR O HOOK

  // 3. MOVER A CONSTANTE PARA DENTRO E USAR t()
  const bookImages = [
    {
      id: 1,
      alt: t("bookPage.altFront"), // Traduzido
      desk: ImageProductBookDesk,
      tablet: ImageProductBookTablet,
      mobile: ImageProductBookMobile,
    },
    {
      id: 2,
      alt: t("bookPage.altBack"), // Traduzido
      desk: ImageProductBookBackDesk,
      tablet: ImageProductBookBackTablet,
      mobile: ImageProductBookBackMobile,
    },
    // ...outras imagens
  ];

  const [selectedImage, setSelectedImage] = useState(bookImages[0]);

  const handleThumbnailClick = (image) => {
    setSelectedImage(image);
  };

  const linkPaymentBook =
    "https://www.keniabispo.com/checkout?checkoutId=1a2c9665-ab6a-373b-8f52-dfcbfefdd1e8&origin=side+cart";

  return (
    <section className="section_bookandquestions">
      <div className="container container_bookandquestions">
        <div className="div_response_full">
          <div className="div_book-gallery">
            <div className="book-gallery">
              {/* Imagem Principal */}
              <div className="main-image-wrapper">
                <picture>
                  <source
                    media="(min-width: 992px)"
                    srcSet={selectedImage.desk}
                  />
                  <source
                    media="(min-width: 767px)"
                    srcSet={selectedImage.tablet}
                  />
                  {/* O 'alt' agora vem do objeto de estado traduzido */}
                  <img src={selectedImage.mobile} alt={selectedImage.alt} />
                </picture>
              </div>

              {/* Miniaturas com Swiper */}
              <Swiper
                spaceBetween={10}
                slidesPerView={5}
                freeMode={true}
                watchSlidesProgress={true}
                modules={[FreeMode, Thumbs]}
                className="thumbnails-swiper"
              >
                {bookImages.map((image) => (
                  <SwiperSlide key={image.id}>
                    <button
                      className={`thumbnail-button ${
                        selectedImage.id === image.id ? "active" : ""
                      }`}
                      onClick={() => handleThumbnailClick(image)}
                    >
                      {/* O 'alt' agora vem do map traduzido */}
                      <img src={image.desk} alt={image.alt} />
                    </button>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>

          {/* Coluna da Direita: Detalhes do Livro */}
          <div className="div_text_book">
            {/* ADICIONEI O WRAPPER "book-details-content" para o efeito "card" */}
            <div className="book-details-content">
              <div className="div_response_title_text">
                <h1 className="h1_title_productspage">
                  Caderno de Receitas: do mundo para sua casa
                </h1>
                <h5 className="h5_title_book">
                  {t("bookPage.subtitle")}
                </h5>
                <p className="p_text_book1">
                  {t("bookPage.desc1")}
                </p>
                <p className="p_text_book2">
                  {t("bookPage.desc2")}
                </p>

                <div className="book-details">
                  <h6 className="fw-bold dados_book">{t("bookPage.detailsTitle")}</h6>
                  <ul className="ul_ list-unstyled">
                    {/* Usando dangerouslySetInnerHTML para renderizar o HTML do JSON */}
                    <li className="li" dangerouslySetInnerHTML={{ __html: t("bookPage.detailsLi1") }} />
                    <li className="li" dangerouslySetInnerHTML={{ __html: t("bookPage.detailsLi2") }} />
                    <li className="li" dangerouslySetInnerHTML={{ __html: t("bookPage.detailsLi3") }} />
                    <li className="li" dangerouslySetInnerHTML={{ __html: t("bookPage.detailsLi4") }} />
                  </ul>
                </div>

                <AnimatedButton
                  className="button-book"
                  text={t("bookPage.buttonText")} // Traduzido
                  link={linkPaymentBook}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <article>
        {/* O Faq já está configurado e buscará suas próprias traduções */}
        <Faq />
      </article>
    </section>
  );
};

export default BookandQuestions;