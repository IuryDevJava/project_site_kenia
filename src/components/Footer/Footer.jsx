import React from "react";
import "../../assets/Style/Footer.css";

import { useTranslation } from "react-i18next";

import ImageLogoFooterDesk from "../../assets/images/footer-img/logo_footer_desk.png";
import ImageLogoFooterTablet from "../../assets/images/footer-img/logo_footer_tablet.png";
import ImageLogoFooterMobile from "../../assets/images/footer-img/logo_footer_mobile.png";

// 1. MANTENHA O 'Link' para a página /privacidade
import { Link } from "react-router-dom";
// 2. ADICIONE O 'HashLink' para os links de âncora
import { HashLink } from "react-router-hash-link";

const Footer = () => {
  const { t } = useTranslation();

  const linkLinkedin =
    "https://www.linkedin.com/in/keniabispo/?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app";

  const linkInstagram = "https://www.instagram.com/keniabisponutri/";

  const linkYoutube = "https://www.youtube.com/@keniabisponutri/videos";

  const linkWhatsapp =
    "https://api.whatsapp.com/send/?phone=5521969526214&text=Ol%C3%A1+gostaria+de+saber+mais+sobre+seus+servi%C3%A7os%21&type=phone_number&app_absent=0";

  return (
    <footer className="site-footer">
      <div className="container">
        <div className="row footer-top">
          <div className="col-12 col-md-6 col-lg-3">
            <div className="footer-brand">
              <div className="flex_items_imgtext">
                <picture>
                  {/* ... (código da imagem - sem alteração) ... */}
                  <source
                    media="(min-width: 992px)"
                    srcSet={ImageLogoFooterDesk}
                  />
                  <source
                    media="(min-width: 768px)"
                    srcSet={ImageLogoFooterTablet}
                  />
                  <img
                    src={ImageLogoFooterMobile}
                    alt="Logo"
                    className="footer-logo"
                  />
                </picture>
                <p className="footer-desc">{t("footer.footerTextAbout")}</p>
              </div>
              <div className="footer-social">
                <a
                  href={linkLinkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                  className="social-btn"
                >
                  <i className="bi bi-linkedin"></i>{" "}
                </a>
                <a
                  href={linkInstagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                  className="social-btn"
                >
                  <i className="bi bi-instagram"></i>{" "}
                </a>
                <a
                  href={linkYoutube}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="YouTube"
                  className="social-btn"
                >
                  <i className="bi bi-youtube"></i>{" "}
                </a>
                <a
                  href={linkWhatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="WhatsApp"
                  className="social-btn"
                >
                  <i className="bi bi-whatsapp"></i>{" "}
                </a>
              </div>
            </div>
          </div>

          <div className="col-6 col-md-6 col-lg-3 div_col_company">
            <h6 className="footer-title">
              {t("footer.footerTextTitleCompany")}
            </h6>
            <ul className="list-unstyled footer-list">
              <li>
                {/* 3. CORRIGIDO: Trocado <a> por <HashLink> */}
                <HashLink to="/#about">
                  {t("footer.footerTextCompanyp1")}
                </HashLink>
              </li>
              <li>
                {/* 4. CORRIGIDO: Trocado <a> por <HashLink> */}
                <HashLink to="/#services">
                  {t("footer.footerTextCompanyp2")}
                </HashLink>
              </li>
              <li>
                {/* 5. CORRIGIDO: Trocado <a> por <HashLink> */}
                <HashLink to="/#products">
                  {t("footer.footerTextCompanyp3")}
                </HashLink>
              </li>
              <li>
                {/* 6. CORRETO: Este link já estava certo!
                  Ele usa <Link> (normal) para uma página interna.
                */}
                <Link to="/politica-de-privacidade">{t("footer.footerTextCompanyp4")}</Link>
              </li>
            </ul>
          </div>

          {/* Column 3 */}
          <div className="col-6 col-md-6 col-lg-3 div_col_service">
            <h6 className="footer-title">
              {t("footer.footerTextTitleService")}
            </h6>
            <ul className="list-unstyled footer-list">
              <li>
                <HashLink to="/livro#faq">
                  {t("footer.footerTextServicep2")}
                </HashLink>
              </li>
              <li>
                <Link to="/termos-de-uso">
                  {t("footer.footerTextServicep3")}
                </Link>
              </li>
              <li>
                <Link className="a_police" to="/politica-de-cancelamento">
                  {t("footer.footerTextServicep4")}
                </Link>
              </li>
            </ul>
          </div>

          <div className="col-12 col-md-6 col-lg-3 div_col_nutrition">
            <h6 className="footer-title">
              {t("footer.footerTextTitleNutrition")}
            </h6>
            <ul className="list-unstyled footer-list">
              <li>
                <Link to="/comunidade">
                  {t("footer.footerTextNutritionp1")}
                </Link>
              </li>
              <li>
                {/* CORRETO: Link externo (Hotmart) usa <a> */}
                <a
                  href="https://pay.hotmart.com/M100399386O?bid=1750428900670"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {t("footer.footerTextNutritionp2")}
                </a>
              </li>
              <li>
                {/* CORRETO: Link externo (Checkout) usa <a> */}
                <Link
                  to="/livro"
                >
                  {t("footer.footerTextNutritionp3")}
                </Link>
              </li>
              {/* <li>
                <a href="#">{t("footer.footerTextNutritionp4")}</a>
              </li> */}
            </ul>
          </div>
        </div>

        <hr className="footer-divider" />

        <div className="footer-bottom">
          <p className="copy-left">{t("footer.footerRodape1")}</p>
          <p className="copy-right">
            <span className="a_copy_footer">
              {t("footer.footerRodape2_part1")}
              <a
                className="a_icdigitalexperience"
                href="#" // Lembre-se de atualizar este link
                target="_blank"
                rel="noopener noreferrer"
              >
                {t("footer.footerRodape2_part2")}
              </a>
            </span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
