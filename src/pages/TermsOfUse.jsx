// Arquivo: TermsOfUse.jsx

import React from "react";
import "../assets/Style/LegalPages.css"; // Importa o CSS compartilhado

const TermsOfUse = () => {
  // ============== SUBSTITUA ESTES DADOS ==============
  const SEU_SITE_NOME = "[Nome do Seu Site ou Seu Nome]";
  const SEU_SITE_URL = "[Endereço do seu site]";
  const SEU_EMAIL_CONTATO = "[Seu E-mail de Contato]";
  const DATA_ATUALIZACAO = "[Data de Hoje]";
  // =====================================================

  return (
    <section className="legal-page-wrapper">
      <div className="container">
        <div className="row">
          <div className="col-12 col-lg-10 offset-lg-1">
            <div className="legal-content">
              <h1>Termos de Uso</h1>
              <p>
                <strong>Última atualização:</strong> {DATA_ATUALIZACAO}
              </p>

              <p>
                Bem-vindo ao {SEU_SITE_NOME}! Ao acessar e usar este site (
                {SEU_SITE_URL}), você concorda em cumprir e aceitar os seguintes
                termos e condições de uso. Se você não concorda com estes
                termos, por favor, não utilize nosso site.
              </p>

              <h2>1. Uso do Site</h2>
              <p>
                Você concorda em usar este site apenas para fins legais e de
                maneira que não infrinja os direitos de, ou restrinja ou iniba o
                uso e gozo deste site por qualquer terceiro.
              </p>
              <ul>
                <li>
                  O conteúdo e os produtos vendidos neste site são destinados ao
                  seu uso pessoal e não comercial.
                </li>
                <li>
                  Você não tem permissão para distribuir, modificar, transmitir,
                  reutilizar ou republicar qualquer conteúdo deste site para
                  fins públicos ou comerciais sem nossa permissão expressa por
                  escrito.
                </li>
              </ul>

              <h2>2. Propriedade Intelectual</h2>
              <p>
                Todo o conteúdo presente neste site, incluindo, mas não se
                limitando a, textos, gráficos, logotipos, ícones, imagens e o
                próprio livro digital (e-book), é propriedade de {SEU_SITE_NOME}{" "}
                e está protegido pelas leis de direitos autorais.
              </p>
              <p>
                Ao adquirir nosso produto, você recebe uma licença limitada, não
                exclusiva e intransferível para uso pessoal. Você não pode
                copiar, compartilhar ou revender o produto.
              </p>

              <h2>3. Limitação de Responsabilidade</h2>
              <p>
                O conteúdo deste site é fornecido "como está". Embora nos
                esforcemos para fornecer informações precisas, não oferecemos
                garantias de qualquer tipo sobre a precisão, confiabilidade ou
                integridade do conteúdo.
              </p>
              <p>
                Em nenhuma circunstância {SEU_SITE_NOME} será responsável por
                quaisquer danos diretos, indiretos, incidentais ou
                consequenciais resultantes do uso ou da incapacidade de usar
                este site ou seus produtos.
              </p>

              <h2>4. Links para Sites de Terceiros</h2>
              <p>
                Nosso site pode conter links para sites de terceiros (como
                processadores de pagamento ou redes sociais). Esses links são
                fornecidos apenas para sua conveniência. Não temos controle
                sobre o conteúdo ou as práticas desses sites e não assumimos
                responsabilidade por eles.
              </p>

              <h2>5. Alterações nos Termos</h2>
              <p>
                Reservamo-nos o direito de modificar estes Termos de Uso a
                qualquer momento. Quaisquer alterações entrarão em vigor
                imediatamente após a publicação no site. Recomendamos que você
                revise esta página periodicamente.
              </p>

              <h2>6. Contato</h2>
              <p className="p-0 m-0">
                Se você tiver alguma dúvida sobre estes Termos de Uso, entre em
                contato conosco através do e-mail:{" "}
                <strong>{SEU_EMAIL_CONTATO}</strong>.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TermsOfUse;
