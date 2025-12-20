import React from "react";
import "../assets/Style/Comunidade.css";
import "../assets/Style/ButtonSecundary.css";
import AnimatedButton from "../components/Products/AnimatedButton";
import { useTranslation } from "react-i18next";

import ImagePatreonCommunity1 from "../assets/images/patreon-img/img-kenia-patron-desk.jpg"
import ImagePatreonCommunity2 from "../assets/images/patreon-img/img-kenia-patron-tablet.jpg";
import ImagePatreonCommunity3 from "../assets/images/patreon-img/img-kenia-patron-mobile.jpg";

const CommunityPage = () => {
  const { t } = useTranslation();
  const link = "https://www.patreon.com/KeniaBispo";

  return (
    <section className="section_community_patreon">
      <div className="container container_community_patreon">
        <div className="div_patreon_response_community">
          <div className="community_image_wrapper">
            <picture>
              <source
                media="(min-width: 992px)"
                srcSet={ImagePatreonCommunity1}
              />
              <source
                media="(min-width: 767px) and (max-width: 991px)"
                srcSet={ImagePatreonCommunity2}
              />
              <img
                src={ImagePatreonCommunity3}
                alt={t("communityPage.altText")}
                className="img_patreon_community"
              />
            </picture>
          </div>
          <div className="div_response_title_text">
            <h2 className="h1_title_patreon">{t("communityPage.title")}</h2>
            <p className="p_text_patreon">{t("communityPage.description")}</p>

            <AnimatedButton link= {link} text={t("communityPage.buttonText")} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default CommunityPage;
