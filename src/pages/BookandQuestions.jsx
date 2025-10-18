// src/pages/BookandQuestions.js

import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Navigation, Thumbs } from "swiper/modules";
import AnimatedButton from "../components/Products/AnimatedButton";

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

const bookImages = [
  {
    id: 1,
    alt: "Capa da frente do livro Caderno de Receitas",
    desk: ImageProductBookDesk,
    tablet: ImageProductBookTablet,
    mobile: ImageProductBookMobile,
  },
  {
    id: 2,
    alt: "Capa de trás do livro Caderno de Receitas",
    desk: ImageProductBookBackDesk,
    tablet: ImageProductBookBackTablet,
    mobile: ImageProductBookBackMobile,
  },
  // ...outras imagens
];

const BookandQuestions = () => {
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
          <div>
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
                <h1 className="h1_title_patreon">
                  Caderno de Receitas: do mundo para sua casa
                </h1>
                <h5 className="h5_title_book">
                  Um livro que une gastronomia, memórias e arte.
                </h5>
                <p className="p_text_book1">
                  Em "O caderno de receitas: do mundo para a sua casa", a
                  nutricionista e viajante Kenia Bispo apresenta um repertório
                  de receitas inspiradas em suas experiências, traduzindo a
                  essência de diferentes culturas para uma cozinha elegante e
                  cheia de significado.
                </p>
                <p className="p_text_book2">
                  Cada página é acompanhada por delicadas aquarelas pintadas
                  pela própria autora...
                </p>

                <div className="book-details">
                  <h6 className="fw-bold dados_book">Dados do Livro</h6>
                  <ul className="ul_ list-unstyled">
                    <li className="li">
                      <strong className="strong">Páginas:</strong> 133
                    </li>
                    <li className="li">
                      <strong className="strong">Formato:</strong> 13,5 x 21 cm
                    </li>
                    <li className="li">
                      <strong className="strong">Encadernação:</strong> Capa dura, lombada quadrada
                      e plastificação fosca
                    </li>
                    <li className="li">
                      <strong className="strong">Idioma:</strong> Português
                    </li>
                  </ul>
                </div>

                <AnimatedButton
                className="button-book"
                  text="Comprar agora"
                  link={linkPaymentBook}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <article>
        <Faq />
      </article>
    </section>
    
  );
};

export default BookandQuestions;
