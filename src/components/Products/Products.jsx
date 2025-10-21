import React from "react";
import "../../assets/Style/Products.css";
import AnimatedButton from "./AnimatedButton";

import { useTranslation } from "react-i18next";

// Importando as imagens
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
      <SparkleIcon className="sparkle_icon sparkle--1" />
      <SparkleIcon className="sparkle_icon sparkle--2" />
      <img
        className="img_decoration_heart"
        src={ImageHartDecoration}
        alt="Decoração de coração"
      />

      <div className="div_products_container">
        <div className="div_product_block">
          <div className="div_product_item">
            <div className="div_product_image-wrapper">
              <h1 className="h1_version_mobile">
                Caderno de Receitas: do mundo para sua casa
              </h1>
              {/* <img
                src={ImageOpenBook}
                alt="Livro Aberto"
                className="img_product_open-book"
              /> */}

              <picture>
                {/* Imagem para Desktop (telas a partir de 1024px) */}
                <source
                  media="(min-width: 992px)"
                  alt="Livro Aberto"
                  srcSet={ImageOpenBookDesk}
                />
                {/* Imagem para Tablet (telas a partir de 768px) */}
                <source
                  media="(min-width: 767px) and (max-width: 991px)"
                  alt="Livro Aberto"
                  srcSet={ImageOpenBookTablet}
                />

                <source
                  media="(max-width: 460px)"
                  alt="Livro Aberto"
                  srcSet={ImageOpenBookMobile1}
                />

                {/* Imagem padrão (Mobile) e fallback */}
                <img
                  src={ImageOpenBookMobile2}
                  alt="Livro Aberto"
                  className="footer-logo"
                />
              </picture>
            </div>
            <div className="div_product_content-wrapper div_product_content-wrapper--center">
              <h1 className="h1_product_title">
                Caderno de Receitas: <br />
                do mundo para sua casa
              </h1>
              <ul className="ul_product_features">
                <li>{t("products.productsBookText1")}</li>
                <li>
                  {t("products.productsBookText2")}
                </li>
                <li>{t("products.productsBookText3")}</li>
                <li>{t("products.productsBookText4")}</li>
              </ul>
            </div>
          </div>

          {/* --- Item 2: Card de Compra + Livros Empilhados --- */}
          <div className="div_product_item div_product_item--purchase">
            <div className="div_product_image-wrapper">
              <div className="div_purchase-card">
                <div className="div_purchase-card_covers">
                  <img
                    src={ImageBookFront}
                    alt="Capa frontal do livro"
                    className="img_purchase-card_cover"
                  />
                  <img
                    src={ImageBookBack}
                    alt="Capa traseira do livro"
                    className="img_purchase-card_cover"
                  />
                </div>
                <div className="div_purchase-card_price-info">
                  <span className="span_price_original">
                    {t("products.productsBookPreco1")} <s>R$ 197,00</s>
                  </span>
                  <span className="span_price_current">
                    {t("products.productsBookPreco2")} <strong>R$ 97,00</strong>
                  </span>
                </div>
                <AnimatedButton text={t("products.productsBookButton")} link="/livro" />
              </div>
            </div>
            <div className="div_product_content-wrapper div_product_content-wrapper--centered">
              <img
                src={ImageBooks}
                alt="Pilha de livros"
                className="img_product_stacked-books"
              />
            </div>
          </div>
        </div>

        {/* ========== Bloco: Ebook ========== */}
        <div className="div_products_block">
          {/* --- Item 3: Descrição Ebook + Card de Compra Ebook --- */}
          <div className="div_product_item">
            <div className="div_product_content-wrapper">
              <h2 className=" h2_product_subtitle">Ebook</h2>
              <ul className=" ul_product_features">
                <li>
                  {t("products.productsE-BookText1")}
                </li>
                <li>
                  {t("products.productsE-BookText2")}
                </li>
                <li>{t("products.productsE-BookText3")}</li>
              </ul>
            </div>
            <div className="div_product_image-wrapper">
              <div className="div_purchase-card div_purchase-card--ebook">
                <h3 className="h3_purchase-card_title">
                  Guia Inteligente do <br />
                  Emagrecimento
                </h3>
                <img
                  src={ImageEbook}
                  alt="Capa do Ebook"
                  className="img_purchase-card_ebook-cover"
                />
                <div className="div_purchase-card_price-info">
                  <span className="span_price_original">
                    {t("products.productsE-BookPreco1")} <s>R$ 97,00</s>
                  </span>
                  <span className="span_price_current">
                    {t("products.productsE-BookPreco2")} <strong>R$ 27,00</strong>
                  </span>
                </div>
                <AnimatedButton text={t("products.productsE-BookButton")} link={linkPaymentEbook} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Products;
