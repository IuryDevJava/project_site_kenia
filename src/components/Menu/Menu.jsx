import { useState } from "react";
import { useTranslation } from "react-i18next";

// logos e ícones
import ImgLogoMenuDesk from "../../assets/images/menu-img/logo (6).png";
import ImgLogoMenuTablet from "../../assets/images/menu-img/logo-tablet.png";
import ImgLogoMenuMobile from "../../assets/images/menu-img/logo-mobile.png";
import IconBrazil from "../../assets/icons/menu-icons/BR.svg";
import IconUSA from "../../assets/icons/menu-icons/EUA.svg";
import IconSpain from "../../assets/icons/menu-icons/ESP.svg";

import "./Menu.css";
import Dropdown from "react-bootstrap/Dropdown";

// Agora o 'name' aqui serve mais como um fallback ou identificador
const availableLanguages = [
  { id: "pt", name: "Português", icon: IconBrazil },
  { id: "en", name: "Inglês", icon: IconUSA },
  { id: "es", name: "Espanhol", icon: IconSpain },
];

const Menu = () => {
  const { t, i18n } = useTranslation();

  const [currentLanguage, setCurrentLanguage] = useState(
    () => availableLanguages.find(lang => lang.id === i18n.language) || availableLanguages[0]
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
      <div className="container">
        <div className="header-wrapper d-flex align-items-end">
          <figure className="header-logo mb-0 pb-0">
             <picture>
               <source media="(min-width: 992px)" srcSet={ImgLogoMenuDesk} />
               <source media="(min-width: 768px) and (max-width: 991px)" srcSet={ImgLogoMenuTablet} />
               <img
                 className="img_logo_kenia"
                 src={ImgLogoMenuMobile}
                 alt="Logo for Drª Kenia's practice"
               />
             </picture>
           </figure>
           <nav className="header-nav">
             <ul className="header-nav-list d-flex list-unstyled mb-0">
               <li className="header-nav-item"><a className="header-nav-link text-decoration-none" href="#about">{t('header.about')}</a></li>
               <li className="header-nav-item"><a className="header-nav-link text-decoration-none" href="#services">{t('header.services')}</a></li>
               <li className="header-nav-item"><a className="header-nav-link text-decoration-none" href="#products">{t('header.products')}</a></li>
               <li className="header-nav-item"><a className="header-nav-link text-decoration-none" href="#faq">{t('header.FAQ')}</a></li>
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
                    alt={`${t('languages.' + currentLanguage.id)} flag`} // ALTERADO AQUI
                  />
                  {/* --- ALTERAÇÃO PRINCIPAL AQUI --- */}
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
                          className="mb-1 language-switcher-flag"
                          src={lang.icon}
                          alt={`${t('languages.' + lang.id)} flag`} // ALTERADO AQUI
                        />
                        {/* --- E ALTERAÇÃO PRINCIPAL AQUI --- */}
                        <span className="mx-1 language-switcher-text">
                          {t(`languages.${lang.id}`)}
                        </span>
                      </Dropdown.Item>
                    ))}
                </Dropdown.Menu>
              </Dropdown>
            </div>

            <button
              className="hamburger-button p-0 m-0"
              onClick={toggleMobileMenu}
            >
              <span className="material-symbols-outlined">menu</span>
            </button>
          </div>
        </div>

        {/* ... (código do menu mobile) ... */}
        {isMobileMenuOpen && (
           <nav className="mobile-nav">
             <ul className="mobile-nav-list list-unstyled mb-0">
               <li className="mobile-nav-item"><a className="mobile-nav-link text-decoration-none" href="#about" onClick={toggleMobileMenu}>{t('header.about')}</a></li>
               <li className="mobile-nav-item"><a className="mobile-nav-link text-decoration-none" href="#services" onClick={toggleMobileMenu}>{t('header.services')}</a></li>
               <li className="mobile-nav-item"><a className="mobile-nav-link text-decoration-none" href="#products" onClick={toggleMobileMenu}>{t('header.products')}</a></li>
               <li className="mobile-nav-item"><a className="mobile-nav-link text-decoration-none" href="#faq" onClick={toggleMobileMenu}>{t('header.FAQ')}</a></li>
             </ul>
           </nav>
         )}
      </div>
    </header>
  );
};

export default Menu;