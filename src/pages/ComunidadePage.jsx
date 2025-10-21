import React from "react";
import "../assets/Style/Comunidade.css";
import "../assets/Style/ButtonSecundary.css";
import AnimatedButton from "../components/Products/AnimatedButton";
import { useTranslation } from "react-i18next"; // 1. IMPORTAR

import ImagePatreonCommunity1 from "../assets/images/about-img/img_kenia_about_desk.png";
import ImagePatreonCommunity2 from "../assets/images/about-img/img_kenia_about_tablet.png";
import ImagePatreonCommunity3 from "../assets/images/about-img/img_kenia_about_mobile.png";

const CommunityPage = () => {
  const { t } = useTranslation(); // 2. INICIAR O HOOK
  const link = "https://www.patreon.com/KeniaBispo";

  return (
    <section className="section_community_patreon">
      <div className="container container_community_patreon">
        <div className="div_patreon_response_community">
          <div className="community_image_wrapper">
            <picture>
              {/* Correção: 'alt' removido das tags <source> */}
              <source
                media="(min-width: 992px)"
                srcSet={ImagePatreonCommunity1}
              />
              <source
                media="(min-width: 767px) and (max-width: 991px)"
                srcSet={ImagePatreonCommunity2}
              />
              {/* 3. 'alt' tag traduzida e aplicada no <img> */}
              <img
                src={ImagePatreonCommunity3}
                alt={t("communityPage.altText")}
                className="img_patreon_community"
              />
            </picture>
          </div>
          <div className="div_response_title_text">
            {/* 4. Textos traduzidos */}
            <h1 className="h1_title_patreon">{t("communityPage.title")}</h1>
            <p className="p_text_patreon">
              {t("communityPage.description")}
            </p>

            <AnimatedButton
              href={link}
              text={t("communityPage.buttonText")}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default CommunityPage;