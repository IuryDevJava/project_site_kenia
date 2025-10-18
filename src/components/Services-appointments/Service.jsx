import React, { useState } from "react";
import "../../assets/Style/Service.css";
import { useTranslation } from "react-i18next";

// Importando os ícones
import IconCard01 from "../../assets/icons/service-icons/Icon-card01.svg";
import IconCard02 from "../../assets/icons/service-icons/Icon-card02.svg";
import IconCard03 from "../../assets/icons/service-icons/Icon-card03.svg";
import IconCard04 from "../../assets/icons/service-icons/Icon-card04.svg";
import IconCard05 from "../../assets/icons/service-icons/Icon-card05.svg";
import IconCard06 from "../../assets/icons/service-icons/Icon-card06.svg";
import Modal from './ModalAppointments/Modal';

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

const Service = () => {
  const { t } = useTranslation();
  const [showModal, setShowModal] = useState(false);

  return (
    <section className="service_section" id="services">
      <div className="container">
        <div className="service_header">
          <h1>{t('services.serviceTitle')}</h1>
          <h5 className="service_subtitle">
            {t('services.serviceSubTitle')}
          </h5>
        </div>
        <div className="row g-4 row_div_card">
          {servicesData.map((service, index) => (
            <div
              className="service_cards col-12 col-md-6 col-lg-4 d-flex align-items-stretch"
              key={index}
            >
              <div className="service_card">
                <div className="card_header">
                  {/* --- ALTERAÇÃO 2: Usando t() para traduzir o título --- */}
                  <h5 className="card_title">{t(service.titleKey)}</h5>
                  <figure className="card_icon_figure">
                    <img
                      src={service.icon}
                      className="card_icon"
                      alt={service.alt}
                    />
                  </figure>
                </div>
                <div className="card_body">
                  {/* --- ALTERAÇÃO 3: Usando t() para traduzir a descrição --- */}
                  <p className="card_text">{t(service.descriptionKey)}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="service_div_button">
           {/* --- ALTERAÇÃO 4: Usando t() para traduzir o botão --- */}
          <button onClick={() => setShowModal(true)} className="service_button btn-base">
            {t('services.serviceCardButton')}
          </button>
        </div>
        {showModal && <Modal onClose={() => setShowModal(false)} />}
      </div>
    </section>
  );
};

export default Service;