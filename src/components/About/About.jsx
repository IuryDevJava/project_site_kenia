import React from "react";
import "./About.css";
import IconArrow from "../../assets/icons/about-icons/Icon-arrow.svg";
import ImageAbout from "../../assets/images/about-img/Image-about.png";

const About = () => {
  return (
    <section className="about_section" id="about">
      <div className="container">
        <div className="row row-div-section">
          <div className="col-12 div_section_cont">
            <div className="about_section_text">
              <p className="p-1-text">
                Sou nutricionista no Rio de Janeiro e apaixonada por conectar
                ciência, comida e memórias. Em meu livro de receitas de viagens,
                reúno histórias, sabores do mundo e um olhar leve sobre a
                alimentação.
              </p>
              <p className="p-2-text">
                Minha missão é mostrar que o emagrecimento saudável não se
                constrói com dietas restritivas, mas com escolhas inteligentes,
                que cuidam tanto da microbiota intestinal quanto da relação com
                a comida. Entre consultas, escrita e aquarelas, criei um espaço
                dedicado a quem busca mais saúde, equilíbrio e prazer à mesa.
              </p>
              <div className="div-button-about">
                <a
                href="https://www.patreon.com/KeniaBispo"
                target="_blank"
                rel="noopener noreferrer"
                className="button-section btn-base">
                  Saiba mais
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
