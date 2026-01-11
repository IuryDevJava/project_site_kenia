import React from "react";
import "../../assets/Style/About.css";
import ImageAboutDesk1 from '../../assets/images/about-img/img_kenia_about_desk.jpg';
import ImageAboutTablet1 from '../../assets/images/about-img/img_kenia_about_tablet.jpg';
import ImageAboutMobile1 from '../../assets/images/about-img/img_kenia_about_mobile.jpg';

import { useTranslation } from "react-i18next";

const About = () => {
  const { t } = useTranslation();

  return (
    <section className="about_section" id="about">
      <div className="container">
        <main className="row row-div-section">
          <article className="col-12 div_section_cont">
            
            <div className="about_section_text">
              {/* <h1 className="title_about_text">{t('about.aboutTitle')}</h1> */}
              <p className="p-1-text">
                {t('about.textAbout1')}
              </p>
              <p className="p-2-text">
                {t('about.textAbout2')}
              </p>
            </div>

            <div className="about_image_container"> 
              <picture>
               
                <source 
                  media="(min-width: 992px)"
                  srcSet={ImageAboutDesk1}
                />
                <source
                  media="(min-width: 768px) and (max-width: 991px)"
                  srcSet={ImageAboutTablet1}
                />
                <img
                  className="img-about-content"
                  src={ImageAboutMobile1}
                  alt={t('about.imageAlt', 'Imagem de Kenia Bispo no consultório')}
                />
              </picture>
            </div>

          </article>
        </main>
      </div>
    </section>
  );
};

export default About;