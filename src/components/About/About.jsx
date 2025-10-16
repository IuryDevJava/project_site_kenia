import React from "react";
import "./About.css";
import IconArrow from "../../assets/icons/about-icons/Icon-arrow.svg";
import ImageAbout from "../../assets/images/about-img/Image-about.png";

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
              <div className="div-button-about">
                <a
                href="https://www.patreon.com/KeniaBispo"
                target="_blank"
                rel="noopener noreferrer"
                className="button-section btn-base">
                  {t('about.aboutButton')}
                  <span>
                    <img
                      className="button_arrow"
                      src={IconArrow}
                      alt="Button arrow"
                    />
                  </span>
                </a>
              </div>
            </div>

            <div>
              <img
                className="img-about-content"
                src={ImageAbout}
                alt="Image about"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
