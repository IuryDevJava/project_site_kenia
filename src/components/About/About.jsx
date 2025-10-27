import React from "react";
import "../../assets/Style/About.css";
// import IconArrow from "../../assets/icons/about-icons/Icon-arrow.svg";
import ImageAboutDesk1 from '../../assets/images/about-img/img_kenia_about_desk.png';
import ImageAboutTablet1 from '../../assets/images/about-img/img_kenia_about_tablet.png';
import ImageAboutMobile1 from '../../assets/images/about-img/img_kenia_about_mobile.png';

import { useTranslation } from "react-i18next";

const About = () => {
  const { t } = useTranslation();

  return (
    <section className="about_section" id="about">
      <div className="container">
        <div className="row row-div-section">
          <div className="col-12 div_section_cont">
            <div className="about_section_text">
              <p className="p-1-text">
                {t('about.textAbout1')}
              </p>
              <p className="p-2-text">
                {t('about.textAbout2')}
              </p>
            </div>

            <div className="about_image_container"> 
              <picture>
               
                <source alt="Imagem de Kenia Bispo"
                  media="(min-width: 992px)"
                  srcSet={ImageAboutDesk1}
                />
                {/* Imagem para Tablet (telas de 768px até 991px) */}
                <source alt="Imagem de Kenia Bispo"
                  media="(min-width: 768px) and (max-width: 991px)"
                  srcSet={ImageAboutTablet1}
                />
                <img
                  className="img-about-content"
                  src={ImageAboutMobile1}
                  alt="Imagem de Kenia Bispo"
                />
              </picture>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default About;