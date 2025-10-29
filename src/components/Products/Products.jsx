import React from "react";
import "../../assets/Style/Products.css";
import AnimatedButton from "./AnimatedButton";

// CORREÇÃO 1: Importar <Trans> para lidar com HTML nas traduções
import { useTranslation, Trans } from "react-i18next";

import ImageOpenBookDesk from "../../assets/images/products-img/Image-open-livro.png";
import ImageOpenBookTablet from "../../assets/images/products-img/Image-open-livro 2.png";
import ImageOpenBookMobile2 from "../../assets/images/products-img/Image-open-livro 3.png";
import ImageOpenBookMobile1 from "../../assets/images/products-img/Image-open-livro 4.png";

import ImageBookFront from "../../assets/images/products-img/BookFront.png";
import ImageBookBack from "../../assets/images/products-img/LivroBack.png";
import ImageBooks from "../../assets/images/products-img/ImageLivros.png";
import ImageEbook from "../../assets/images/products-img/Capa guia inteligente emagrecimento 1.png";
import ImageHartDecoration from "../../assets/images/products-img/Ilustração2-hart-img.png";

import SparkleIcon from "./SparkIcon";

const Products = () => {
  const linkPaymentEbook =
    "https://pay.hotmart.com/M100399386O?bid=1750428900670";

  const { t } = useTranslation();

  return (
    <section className="section_products" id="products">
      {/* CORREÇÃO 2: Imagem decorativa escondida */}
      <SparkleIcon className="sparkle_icon sparkle--1" aria-hidden="true" />
      <SparkleIcon className="sparkle_icon sparkle--2" aria-hidden="true" />
      <img
        className="img_decoration_heart"
        src={ImageHartDecoration}
        alt="" // <-- CORREÇÃO 2: Imagem decorativa
      />

      <div className="div_products_container">
        <div className="div_product_block">
          <div className="div_product_item">
            <div className="div_product_image-wrapper">
              <h2 className="h1_version_mobile">
                {t("products.productsBookTitle")}
              </h2>

              <picture>
                <source
                  media="(min-width: 992px)"
                  srcSet={ImageOpenBookDesk}
                />
                <source
                  media="(min-width: 767px) and (max-width: 991px)"
                  srcSet={ImageOpenBookTablet}
                />
                <source
                  media="(max-width: 460px)"
                  srcSet={ImageOpenBookMobile1}
                />

                <img
                  src={ImageOpenBookMobile2}
                  alt={t('products.bookOpenAlt', "Livro 'Caderno de Receitas' aberto exibindo ilustrações e receitas")}
                  className="product_image_open-book"
                />
              </picture>
            </div>
            <div className="div_product_content-wrapper div_product_content-wrapper--center">
              <h2 className="h1_product_title">
                <Trans i18nKey="products.productsBookTitleStyled">
                  Caderno de Receitas: <br />
                  do mundo para sua casa
                </Trans>
              </h2>
              <ul className="ul_product_features">
                <li>{t("products.productsBookText1")}</li>
                <li>{t("products.productsBookText2")}</li>
                <li>{t("products.productsBookText3")}</li>
                <li>{t("products.productsBookText4")}</li>
              </ul>
            </div>
          </div>

          <div className="div_product_item div_product_item--purchase">
            <div className="div_product_image-wrapper">
              <div className="div_purchase-card">
                <div className="div_purchase-card_covers">
                  <img
                    src={ImageBookFront}
                    alt={t('products.bookFrontAlt', "Capa frontal do livro 'Caderno de Receitas'")}
                    className="img_purchase-card_cover"
                  />
                  <img
                    src={ImageBookBack}
                    alt={t('products.bookBackAlt', "Capa traseira do livro 'Caderno de Receitas'")}
                    className="img_purchase-card_cover"
                  />
                </div>
                <div className="div_purchase-card_price-info">
                  <span className="span_price_original">
                    <Trans i18nKey="products.productsBookPriceOld">
                      De <s>R$ 197,00</s>
                    </Trans>
                  </span>
                  <span className="span_price_current">
                    <Trans i18nKey="products.productsBookPriceNew">
                      Por <strong>R$ 97,00</strong>
                    </Trans>
                  </span>
                </div>
                <AnimatedButton
                  text={t("products.productsBookButton")}
                  link="/livro"
                />
              </div>
            </div>
            <div className="div_product_content-wrapper div_product_content-wrapper--centered">
              <img
                src={ImageBooks}
                alt=""
                className="img_product_stacked-books"
              />
            </div>
          </div>
        </div>

        <div className="div_products_block">
          <div className="div_product_item">
            <div className="div_product_content-wrapper">
              <h2 className=" h2_product_subtitle">
                {t("products.productsE-BookTitle")}
              </h2>
              <ul className=" ul_product_features">
                <li>{t("products.productsE-BookText1")}</li>
                <li>{t("products.productsE-BookText2")}</li>
                <li>{t("products.productsE-BookText3")}</li>
              </ul>
            </div>
            <div className="div_product_image-wrapper">
              <div className="div_purchase-card div_purchase-card--ebook">
                <h2 className="h3_purchase-card_title">
                  <Trans i18nKey="products.productsE-BookTitleNameStyled">
                    Guia Inteligente do <br />
                    Emagrecimento
                  </Trans>
                </h2>
                <img
                  src={ImageEbook}
                  alt={t('products.ebookCoverAlt', "Capa do Ebook 'Guia Inteligente do Emagrecimento'")}
                  className="img_purchase-card_ebook-cover"
                />
                <div className="div_purchase-card_price-info">
                  <span className="span_price_original">
                    <Trans i18nKey="products.productsEbookPriceOld">
                      De <s>R$ 97,00</s>
                    </Trans>
                  </span>
                  <span className="span_price_current">
                    <Trans i18nKey="products.productsEbookPriceNew">
                      Por <strong>R$ 27,00</strong>
                    </Trans>
                  </span>
                </div>
                <AnimatedButton
                  text={t("products.productsE-BookButton")}
                  link={linkPaymentEbook}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Products;