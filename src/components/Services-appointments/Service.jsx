import React from "react";
import "./Service.css";

// Importando os ícones
import IconCard01 from "../../assets/icons/service-icons/Icon-card01.svg";
import IconCard02 from "../../assets/icons/service-icons/Icon-card02.svg";
import IconCard03 from "../../assets/icons/service-icons/Icon-card03.svg";
import IconCard04 from "../../assets/icons/service-icons/Icon-card04.svg";
import IconCard05 from "../../assets/icons/service-icons/Icon-card05.svg";
import IconCard06 from "../../assets/icons/service-icons/Icon-card06.svg";
import IconButtonNote from "../../assets/icons/service-icons/Icon-note.svg";

// Array com os dados dos serviços para evitar repetição de código
const servicesData = [
  {
    icon: IconCard01,
    title: "Consultas personalizadas",
    description:
      "Plano alimentar exclusivo, adaptado às suas metas e estilo de vida.",
    alt: "Ícone de prancheta com um X, simbolizando personalização",
  },
  {
    icon: IconCard02,
    title: "Acompanhamento nutricional",
    description:
      "Monitoramento contínuo para garantir resultados reais e sustentáveis.",
    alt: "Ícone de duas setas em círculo, simbolizando acompanhamento",
  },
  {
    icon: IconCard03,
    title: "Atendimento Individualizado",
    description: "Cada consulta é pensada para atender às suas necessidades.",
    alt: "Ícone de um prontuário médico, simbolizando atendimento individual",
  },
  {
    icon: IconCard04,
    title: "Programa Nutricional para emagrecimento",
    description:
      "Estratégias inteligentes para perda de peso com equilíbrio e bem-estar.",
    alt: "Ícone de um documento, simbolizando um programa nutricional",
  },
  {
    icon: IconCard05,
    title: "Controle para Diabetes",
    description:
      "Controle nutricional especializado para promover qualidade de vida.",
    alt: "Ícone de uma gota de sangue, simbolizando controle de diabetes",
  },
  {
    icon: IconCard06,
    title: "Saúde da Mulher",
    description: "Cuidado nutricional voltado às necessidades femininas.",
    alt: "Ícone de um coração dentro de uma mão, simbolizando cuidado e saúde",
  },
];

const Service = () => {
  return (
    // A tag <main> seria mais semântica aqui, mas mantive <section>
    <section className="service_section" id="services">
      <div className="container">
        <div className="service_header">
          <h1>Agende já a sua consulta</h1>
          <h4 className="service_subtitle">
            Vou te ajudar a levar uma vida saudável.
          </h4>
        </div>

        {/* Usando o sistema de Grid do Bootstrap para criar o layout responsivo */}
        <div className="row g-4 row_div_card">
          {servicesData.map((service, index) => (
            <div
              className="service_cards col-12 col-md-6 col-lg-4 d-flex align-items-stretch"
              key={index}
            >
              <div className="service_card">
                <div className="card_header">
                  <h5 className="card_title">{service.title}</h5>
                  <figure className="card_icon_figure">
                    <img
                      src={service.icon}
                      className="card_icon"
                      alt={service.alt}
                    />
                  </figure>
                </div>
                <div className="card_body">
                  <p className="card_text">{service.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="service_div_button">
          <button className="service_button btn-base">
            Agendar Consulta
            {/* <img
              className="Image_button_icon"
              src={IconButtonNote}
              alt="Ícone de um calendário para agendamento"
            /> */}
          </button>
        </div>
      </div>
    </section>
  );
};

export default Service;
