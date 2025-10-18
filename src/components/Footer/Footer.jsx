import React from "react";
import "../../assets/Style/Footer.css";

import ImageLogoFooterDesk from "../../assets/images/footer-img/logo_footer_desk.png";
import ImageLogoFooterTablet from "../../assets/images/footer-img/logo_footer_tablet.png";
import ImageLogoFooterMobile from "../../assets/images/footer-img/logo_footer_mobile.png";

const Footer = () => {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="row footer-top">
          <div className="col-12 col-md-6 col-lg-3">
            <div className="footer-brand">
              <div className="flex_items_imgtext">
                {/* --- ALTERAÇÃO AQUI --- */}
                <picture>
                  {/* Imagem para Desktop (telas a partir de 1024px) */}
                  <source
                    media="(min-width: 992px)"
                    srcSet={ImageLogoFooterDesk}
                  />
                  {/* Imagem para Tablet (telas a partir de 768px) */}
                  <source
                    media="(min-width: 768px)"
                    srcSet={ImageLogoFooterTablet}
                  />
                  {/* Imagem padrão (Mobile) e fallback */}
                  <img
                    src={ImageLogoFooterMobile}
                    alt="Logo"
                    className="footer-logo"
                  />
                </picture>
                {/* --- FIM DA ALTERAÇÃO --- */}
                <p className="footer-desc">
                  Acompanhamento nutricional personalizado, com foco em saúde,
                  bem-estar e equilíbrio alimentar.
                </p>
              </div>
              <div className="footer-social">
                <a
                  href="https://www.linkedin.com/in/keniabispo/?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                  className="social-btn"
                >
                  <i className="bi bi-linkedin"></i>{" "}
                  {/* Corrigido para className */}
                </a>
                <a
                  href="https://www.instagram.com/keniabisponutri/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                  className="social-btn"
                >
                  <i className="bi bi-instagram"></i>{" "}
                  {/* Corrigido para className */}
                </a>
                <a
                  href="https://www.youtube.com/@keniabisponutri/videos"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="YouTube"
                  className="social-btn"
                >
                  <i className="bi bi-youtube"></i>{" "}
                  {/* Corrigido para className */}
                </a>
                <a
                  href="https://api.whatsapp.com/send/?phone=5521969526214&text=Ol%C3%A1+gostaria+de+saber+mais+sobre+seus+servi%C3%A7os%21&type=phone_number&app_absent=0"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="WhatsApp"
                  className="social-btn"
                >
                  <i className="bi bi-whatsapp"></i>{" "}
                  {/* Corrigido para className */}
                </a>
              </div>
            </div>
          </div>

          {/* Column 2 */}
          <div className="col-6 col-md-6 col-lg-3 div_col_company">
            <h6 className="footer-title">Empresa</h6>
            <ul className="list-unstyled footer-list">
              <li>
                <a href="#about" target="_top" rel="noopener noreferrer">
                  Sobre mim
                </a>
              </li>
              <li>
                <a href="#services" target="_top" rel="noopener noreferrer">
                  Serviços
                </a>
              </li>
              <li>
                <a href="#products" target="_top" rel="noopener noreferrer">
                  Meus produtos
                </a>
              </li>
              <li>
                <a href="#" target="_blank" rel="noopener noreferrer">
                  Política de privacidade
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3 */}
          <div className="col-6 col-md-6 col-lg-3 div_col_service">
            <h6 className="footer-title">Atendimento</h6>
            <ul className="list-unstyled footer-list">
              <li>
                <a href="#" target="_blank" rel="noopener noreferrer">
                  Como funciona o Atendimento
                </a>
              </li>
              <li>
                <a href="#" target="_blank" rel="noopener noreferrer">
                  Dúvidas frequentes
                </a>
              </li>
              <li>
                <a href="#" target="_blank" rel="noopener noreferrer">
                  Termos de uso
                </a>
              </li>
              <li>
                <a
                  className="a_police"
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Política de cancelamento
                </a>
              </li>
            </ul>
          </div>

          {/* Column 4 */}
          <div className="col-12 col-md-6 col-lg-3 div_col_nutrition">
            <h6 className="footer-title">Nutrição</h6>
            <ul className="list-unstyled footer-list">
              <li>
                <a href="#" target="_blank" rel="noopener noreferrer">
                  Blog / Artigos
                </a>
              </li>
              <li>
                <a
                  href="https://pay.hotmart.com/M100399386O?bid=1750428900670"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  E-book
                </a>
              </li>
              <li>
                <a
                  href="https://www.keniabispo.com/checkout?checkoutId=1a2c9665-ab6a-373b-8f52-dfcbfefdd1e8&origin=side+cart"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Receitas
                </a>
              </li>
              <li>
                <a href="#">Dicas de alimentação saudável</a>
              </li>
            </ul>
          </div>
        </div>

        <hr className="footer-divider" />

        <div className="footer-bottom">
          <p className="copy-left">
            © 2025 Drª Kenia. Todos os direitos reservados.
          </p>
          <p className="copy-right">
            <s className="a_copy_footer" href="">
              Desenvolvido por{" "}
              <a
                className="a_icdigitalexperience"
                href="#"
                target="_blank"
                rel="noopener noreferrer"
              >
                IC Digital Experience
              </a>
            </s>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
