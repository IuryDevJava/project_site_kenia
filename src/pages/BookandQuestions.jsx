import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Thumbs, A11y } from "swiper/modules";
import AnimatedButton from "../components/Products/AnimatedButton";
import { useTranslation, Trans } from "react-i18next";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import "../assets/Style/BookandQuestions.css";
import ImageProductBookDesk from "../assets/images/products-img/front-image-desk.png";
import ImageProductBookTablet from "../assets/images/products-img/front-image-tablet.png";
import ImageProductBookMobile from "../assets/images/products-img/front-image-mobile.png";
import ImageProductBookBackDesk from "../assets/images/products-img/back-book-desk.png";
import ImageProductBookBackTablet from "../assets/images/products-img/back-book-tablet.png";
import ImageProductBookBackMobile from "../assets/images/products-img/back-book-mobile.png";

import Faq from "../components/AskedQuestions/Faq";

const BookandQuestions = () => {
  const { t } = useTranslation();

  const bookImages = [
    {
      id: 1,
      alt: t("bookPage.altFront"),
      desk: ImageProductBookDesk,
      tablet: ImageProductBookTablet,
      mobile: ImageProductBookMobile,
    },
    {
      id: 2,
      alt: t("bookPage.altBack"),
      desk: ImageProductBookBackDesk,
      tablet: ImageProductBookBackTablet,
      mobile: ImageProductBookBackMobile,
    },
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

              <Swiper
                spaceBetween={10}
                slidesPerView={5}
                freeMode={true}
                watchSlidesProgress={true}
                modules={[FreeMode, Thumbs, A11y]}
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
                      <img src={image.desk} alt="" aria-hidden="true" />
                    </button>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>

          <div className="div_text_book">
            <div className="book-details-content">
              <div className="div_response_title_text">
                <h1 className="h1_title_productspage">
                  Caderno de Receitas: do mundo para sua casa
                </h1>
                <h2 className="h5_title_book">{t("bookPage.subtitle")}</h2>
                <p className="p_text_book1">{t("bookPage.desc1")}</p>
                <p className="p_text_book2">{t("bookPage.desc2")}</p>

                <div className="book-details">
                  <h6 className="fw-bold dados_book">
                    {t("bookPage.detailsTitle")}
                  </h6>
                  <ul className="ul_ list-unstyled">
                    <li className="li">
                      <Trans
                        i18nKey="bookPage.detailsLi1"
                        components={{ strong: <strong className="strong" /> }}
                      />
                    </li>
                    <li className="li">
                      <Trans
                        i18nKey="bookPage.detailsLi2"
                        components={{ strong: <strong className="strong" /> }}
                      />
                    </li>
                    <li className="li">
                      <Trans
                        i18nKey="bookPage.detailsLi3"
                        components={{ strong: <strong className="strong" /> }}
                      />
                    </li>
                    <li className="li">
                      <Trans
                        i18nKey="bookPage.detailsLi4"
                        components={{ strong: <strong className="strong" /> }}
                      />
                    </li>
                  </ul>
                </div>

                <AnimatedButton
                  className="button-book"
                  text={t("bookPage.buttonText")}
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
