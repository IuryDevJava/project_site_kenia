import { useState } from "react";
import ImgLogo from "../../assets/images/menu-img/Kenia Bispo 1.png";
import IconBrazil from "../../assets/icons/menu-icons/BR.svg";
import IconUSA from "../../assets/icons/menu-icons/EUA.svg";
import IconSpain from "../../assets/icons/menu-icons/ESP.svg";
import "./Menu.css";
import Dropdown from "react-bootstrap/Dropdown";

const availableLanguages = [
  { id: "pt", name: "Português", icon: IconBrazil },
  { id: "en", name: "Inglês", icon: IconUSA },
  { id: "es", name: "Espanhol", icon: IconSpain },
];

const Menu = () => {
  const [currentLanguage, setCurrentLanguage] = useState(availableLanguages[0]);
  
  // NOVO: Estado para controlar a visibilidade do menu mobile
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  // NOVO: Função para abrir/fechar o menu mobile
  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="header">
      <div className="container">
        <div className="header-wrapper d-flex align-items-center">
          <figure className="header-logo mb-0 pb-0">
            <img className="img_logo_kenia" src={ImgLogo} alt="Logo for Drª Kenia's practice" />
          </figure>
          <nav className="header-nav">
            <ul className="header-nav-list d-flex list-unstyled mb-0">
              <li className="header-nav-item">
                <a className="header-nav-link text-decoration-none" href="#about">
                  Sobre mim
                </a>
              </li>
              <li className="header-nav-item">
                <a className="header-nav-link text-decoration-none" href="#services">
                  Serviços e agendamentos
                </a>
              </li>
              <li className="header-nav-item">
                <a className="header-nav-link text-decoration-none" href="#products">
                  Produtos
                </a>
              </li>
              <li className="header-nav-item">
                <a className="header-nav-link text-decoration-none" href="#faq">
                  FAQ
                </a>
              </li>
            </ul>
          </nav>

          <div className="header-actions ms-auto d-flex align-items-center">
            <div className="language-switcher">
              <Dropdown>
                <Dropdown.Toggle
                  id="dropdown-language"
                  className="language-switcher-toggle d-flex align-items-center"
                >
                  <img
                    className="language-switcher-flag mx-1 mb-1"
                    src={currentLanguage.icon}
                    alt={`${currentLanguage.name} flag`}
                  />
                  <span className="language-switcher-text">
                    {currentLanguage.name}
                  </span>
                </Dropdown.Toggle>

                <Dropdown.Menu className="language-switcher-menu">
                  {availableLanguages
                    .filter((lang) => lang.id !== currentLanguage.id)
                    .map((lang) => (
                      <Dropdown.Item
                        key={lang.id}
                        onClick={() => setCurrentLanguage(lang)}
                        className="item-language-menu"
                      >
                        <img
                          className="mb-1 language-switcher-flag"
                          src={lang.icon}
                          alt={`${lang.name} flag`}
                        />
                        <span className="mx-1 language-switcher-text">
                          {lang.name}
                        </span>
                      </Dropdown.Item>
                    ))}
                </Dropdown.Menu>
              </Dropdown>
            </div>

            {/* NOVO: Botão Hambúrguer. Ele só vai aparecer em telas pequenas via CSS */}
            <button className="hamburger-button p-0 m-0" onClick={toggleMobileMenu}>
              <span className="material-symbols-outlined">menu</span>
            </button>
            
          </div>
        </div>

        {/* NOVO: Menu Mobile. Só é renderizado se o estado isMobileMenuOpen for true */}
        {isMobileMenuOpen && (
          <nav className="mobile-nav">
            <ul className="mobile-nav-list list-unstyled mb-0">
              <li className="mobile-nav-item">
                <a className="mobile-nav-link text-decoration-none" href="#about" onClick={toggleMobileMenu}>
                  Sobre mim
                </a>
              </li>
              <li className="mobile-nav-item">
                <a className="mobile-nav-link text-decoration-none" href="#services" onClick={toggleMobileMenu}>
                  Serviços e agendamentos
                </a>
              </li>
              <li className="mobile-nav-item">
                <a className="mobile-nav-link text-decoration-none" href="#products" onClick={toggleMobileMenu}>
                  Produtos
                </a>
              </li>
              <li className="mobile-nav-item">
                <a className="mobile-nav-link text-decoration-none" href="#faq" onClick={toggleMobileMenu}>
                  FAQ
                </a>
              </li>
            </ul>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Menu;