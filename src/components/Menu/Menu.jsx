import { useState } from "react";
import { useTranslation } from "react-i18next";

import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';

import ImgLogoMenuDesk from "../../assets/images/menu-img/logo (6).png";
import ImgLogoMenuTablet from "../../assets/images/menu-img/logo-tablet.png";
import ImgLogoMenuMobile from "../../assets/images/menu-img/logo-mobile.png";
import IconBrazil from "../../assets/icons/menu-icons/BR.svg";
import IconUSA from "../../assets/icons/menu-icons/EUA.svg";
import IconSpain from "../../assets/icons/menu-icons/ESP.svg";

import "../../assets/Style/Menu.css";
import Dropdown from "react-bootstrap/Dropdown";

const availableLanguages = [
  { id: "pt", name: "Português", icon: IconBrazil },
  { id: "en", name: "Inglês", icon: IconUSA },
  { id: "es", name: "Espanhol", icon: IconSpain },
];

const Menu = () => {
  const { t, i18n } = useTranslation();

  const [currentLanguage, setCurrentLanguage] = useState(
    () =>
      availableLanguages.find((lang) => lang.id === i18n.language) ||
      availableLanguages[0]
  );

  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleLanguageChange = (lang) => {
    i18n.changeLanguage(lang.id);
    setCurrentLanguage(lang);
  };

  return (
    <header className="header">
      <div className="container div_container_header">
        <div className="header-wrapper">
          <figure className="header-logo">
            <picture>
              <source media="(min-width: 992px)" srcSet={ImgLogoMenuDesk} />
              <source
                media="(min-width: 768px) and (max-width: 991px)"
                srcSet={ImgLogoMenuTablet}
              />
              <img
                className="img_logo_kenia"
                src={ImgLogoMenuMobile}
                alt="Logo for Drª Kenia's practice"
              />
            </picture>
          </figure>
          <nav className="header-nav">
            <ul className="header-nav-list list-unstyled">
              <li className="header-nav-item">
                <HashLink
                  className="header-nav-link text-decoration-none"
                  to="/#about"
                >
                  {t("header.about")}
                </HashLink>
              </li>
              <li className="header-nav-item">
                <HashLink
                  className="header-nav-link text-decoration-none"
                  to="/#services"
                >
                  {t("header.services")}
                </HashLink>
              </li>
              <li className="header-nav-item">
                <HashLink
                  className="header-nav-link text-decoration-none"
                  to="/#products"
                >
                  {t("header.products")}
                </HashLink>
              </li>
              <li className="header-nav-item">
                <HashLink
                  className="header-nav-link text-decoration-none"
                  to="/livro#faq"
                >
                  {t("header.FAQ")}
                </HashLink>
              </li>
              <li className="header-nav-item">
                <HashLink
                  className="header-nav-link text-decoration-none"
                  to="/comunidade"
                >
                  {t("header.community")}
                </HashLink>
              </li>
            </ul>
          </nav>

          <div className="header-actions">
            <div className="language-switcher">
              <Dropdown>
                <Dropdown.Toggle
                  id="dropdown-language"
                  className="language-switcher-toggle"
                >
                  <img
                    className="language-switcher-flag mx-1"
                    src={currentLanguage.icon}
                    alt={`${t("languages." + currentLanguage.id)} flag`}
                  />
                  <span className="language-switcher-text">
                    {t(`languages.${currentLanguage.id}`)}
                  </span>
                </Dropdown.Toggle>

                <Dropdown.Menu className="language-switcher-menu">
                  {availableLanguages
                    .filter((lang) => lang.id !== currentLanguage.id)
                    .map((lang) => (
                      <Dropdown.Item
                        key={lang.id}
                        onClick={() => handleLanguageChange(lang)}
                        className="item-language-menu"
                      >
                        <img
                          className="language-switcher-flag"
                          src={lang.icon}
                          alt={`${t("languages." + lang.id)} flag`}
                        />
                        <span className="mx-1 language-switcher-text">
                          {t(`languages.${lang.id}`)}
                        </span>
                      </Dropdown.Item>
                    ))}
                </Dropdown.Menu>
              </Dropdown>
            </div>

            <button
              className="hamburger-button"
              onClick={toggleMobileMenu}
            >
              <span className="material-symbols-outlined">menu</span>
            </button>
          </div>
        </div>

        {isMobileMenuOpen && (
          <nav className="mobile-nav">
            <ul className="mobile-nav-list list-unstyled">
              <li className="mobile-nav-item">
                <HashLink
                  className="mobile-nav-link text-decoration-none"
                  to="/#about"
                  onClick={toggleMobileMenu}
                >
                  {t("header.about")}
                </HashLink>
              </li>
              <li className="mobile-nav-item">
                <HashLink
                  className="mobile-nav-link text-decoration-none"
                  to="/#services"
                  onClick={toggleMobileMenu}
                >
                  {t("header.services")}
                </HashLink>
              </li>
              <li className="mobile-nav-item">
                <HashLink
                  className="mobile-nav-link text-decoration-none"
                  to="/#products"
                  onClick={toggleMobileMenu}
                >
                  {t("header.products")}
                </HashLink>
              </li>
              <li className="mobile-nav-item">
                <HashLink
                  className="mobile-nav-link text-decoration-none"
                  to="/livro#faq"
                  onClick={toggleMobileMenu}
                >
                  {t("header.FAQ")}
                </HashLink>
              </li>
              <li className="mobile-nav-item">
                <HashLink
                  className="mobile-nav-link text-decoration-none"
                  to="/comunidade"
                >
                  {t("header.community")}
                </HashLink>
              </li>
            </ul>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Menu;
