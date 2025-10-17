import React from "react";
import "../assets/Style/Comunidade.css";
import "../assets/Style/Button.css";

import ImagePatreonCommunity1 from "../assets/images/about-img/img_kenia_about_desk.png";
import ImagePatreonCommunity2 from "../assets/images/about-img/img_kenia_about_tablet.png";
import ImagePatreonCommunity3 from "../assets/images/about-img/img_kenia_about_mobile.png";

const CommunityPage = () => {
  const link = "https://www.patreon.com/KeniaBispo";
  return (
    <section className="section_community_patreon">
      <div className="container container_community_patreon">
        {/* Mantive a div_patreon_response_community, mas a ordem dos filhos mudou */}
        <div className="div_patreon_response_community">
          {/* DIV DA IMAGEM - AGORA É O PRIMEIRO FILHO PARA O LAYOUT DESEJADO */}
          <div className="community_image_wrapper"> {/* Nova div para agrupar a imagem */}
            <picture>
              <source
                media="(min-width: 992px)"
                alt="Livro Aberto"
                srcSet={ImagePatreonCommunity1}
              />
              <source
                media="(min-width: 767px) and (max-width: 991px)"
                alt="Livro Aberto"
                srcSet={ImagePatreonCommunity2}
              />
              <img
                src={ImagePatreonCommunity3}
                alt="Livro Aberto"
                className="img_patreon_community" // Mudei a classe para ser mais específica
              />
            </picture>
          </div>

          {/* DIV DO TEXTO E BOTÃO - AGORA É O SEGUNDO FILHO */}
          <div className="div_response_title_text">
            <h1 className="h1_title_patreon">Comunidade Patreon</h1>
            <p className="p_text_patreon">
              No meu espaço no Patreon, você tem acesso a conteúdos que não
              estão nas redes sociais: reflexões sobre alimentação, hábitos de
              vida, receitas com história, guias práticos e materiais
              exclusivos. É também um lugar para nos aproximarmos, trocarmos
              ideias e caminharmos em direção a uma vida mais leve e saudável.
            </p>

            <a
              className="button_purchase"
              href={link}
              target="_blank"
              rel="noopener noreferrer"
            >
              Faça parte
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CommunityPage;