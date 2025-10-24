import React, { useState, useEffect } from "react"; // Importar useState e useEffect
import "../../assets/Style/Service.css";
import "../../assets/Style/ButtonPrimary.css";
import { useTranslation } from "react-i18next";

// --- Importações do Swiper ---
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
// --- Fim das importações do Swiper ---

import IconCard01 from "../../assets/icons/service-icons/Icon-card01.svg";
import IconCard02 from "../../assets/icons/service-icons/Icon-card02.svg";
import IconCard03 from "../../assets/icons/service-icons/Icon-card03.svg";
import IconCard04 from "../../assets/icons/service-icons/Icon-card04.svg";
import IconCard05 from "../../assets/icons/service-icons/Icon-card05.svg";
import IconCard06 from "../../assets/icons/service-icons/Icon-card06.svg";

// (Seus dados `servicesData` continuam aqui, sem alterações...)
const servicesData = [
  {
    icon: IconCard01,
    titleKey: "services.serviceCardTitle1",
    descriptionKey: "services.serviceCardText1",
    alt: "Ícone de prancheta com um X, simbolizando personalização",
  },
  {
    icon: IconCard02,
    titleKey: "services.serviceCardTitle2",
    descriptionKey: "services.serviceCardText2",
    alt: "Ícone de duas setas em círculo, simbolizando acompanhamento",
  },
  {
    icon: IconCard03,
    titleKey: "services.serviceCardTitle3",
    descriptionKey: "services.serviceCardText3",
    alt: "Ícone de um prontuário médico, simbolizando atendimento individual",
  },
  {
    icon: IconCard04,
    titleKey: "services.serviceCardTitle4",
    descriptionKey: "services.serviceCardText4",
    alt: "Ícone de um documento, simbolizando um programa nutricional",
  },
  {
    icon: IconCard05,
    titleKey: "services.serviceCardTitle5",
    descriptionKey: "services.serviceCardText5",
    alt: "Ícone de uma gota de sangue, simbolizando controle de diabetes",
  },
  {
    icon: IconCard06,
    titleKey: "services.serviceCardTitle6",
    descriptionKey: "services.serviceCardText6",
    alt: "Ícone de um coração dentro de uma mão, simbolizando cuidado e saúde",
  },
];

// --- Hook para detectar o tamanho da tela ---
const useWindowSize = () => {
  const [windowSize, setWindowSize] = useState({
    width: undefined,
  });

  useEffect(() => {
    function handleResize() {
      setWindowSize({
        width: window.innerWidth,
      });
    }

    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return windowSize;
};

const Service = () => {
  const { t, i18n } = useTranslation();
  const { width } = useWindowSize();

  if (width === undefined) {
    return (
      <section className="service_section" id="services">
        <div className="container">
          <div className="service_header">
            <h1>{t("services.serviceSubTitle")}</h1>
          </div>
          {/* Retorna o container vazio para evitar "flash" */}
          <div className="row_div_card"></div>
          <div className="service_div_button">
            {/* ... (renderize o botão se quiser) ... */}
          </div>
        </div>
      </section>
    );
  }
  // --- FIM DA MUDANÇA ---

  // Agora, 'isMobile' só será calculado quando 'width' tiver um valor
  const isMobile = width <= 767;

  const isEnglish = i18n.language.startsWith("en");
  const buttonClasses = [
    "service_button",
    "btn-base",
    isEnglish ? "lang-en" : "",
  ].join(" ");

  const appointmentsWhatsapp =
    "https://api.whatsapp.com/send/?phone=5521969526214&text=Ol%C3%A1%2E+Gostaria+de+agendar+uma+consulta%2E&type=phone_number&app_absent=0";

  // ... (função renderServiceCard) ...
  const renderServiceCard = (service) => (
    <div className="service_card">
      <div className="card_header">
        <h5 className="card_title">{t(service.titleKey)}</h5>
        <figure className="card_icon_figure">
          <img src={service.icon} className="card_icon" alt={service.alt} />
        </figure>
      </div>
      <div className="line-card">
        <hr />
      </div>
      <div className="card_body">
        <p className="card_text">{t(service.descriptionKey)}</p>
      </div>
    </div>
  );

  return (
    <section className="service_section" id="services">
      <div className="container">
        <div className="service_header">
          <h1>{t("services.serviceSubTitle")}</h1>
        </div>

        <div className="row_div_card">
          {isMobile ? (
            <Swiper
              modules={[Pagination]}
              loopedSlides={2}
              grabCursor={true}
              loop={true}
              pagination={{ clickable: true }}
              slidesPerView={"auto"}
              spaceBetween={18}
              className="service-swiper"
            >
              {servicesData.map((service, index) => (
                <SwiperSlide key={index} style={{ width: "auto"
                 }}>
                  <div className="service_cards">
                    {renderServiceCard(service)}
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          ) : (
            // Versão Desktop (Grid)
            servicesData.map((service, index) => (
              <div className="service_cards" key={index}>
                {renderServiceCard(service)}
              </div>
            ))
          )}
        </div>

        <div className="service_div_button">
          <a
            className={buttonClasses}
            href={appointmentsWhatsapp}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="WhatsApp"
            aria-pressed="true"
          >
            {t("services.serviceCardButton")}
          </a>
        </div>
      </div>
    </section>
  );
};

export default Service;
