import React from 'react';
import '../assets/Style/LegalPages.css';

const PrivacyPolicy = () => {

  const SEU_SITE_NOME = "Drª Kenia Bispo";
  const SEU_SITE_URL = "https://www.keniabispo.com/";
  const SEU_EMAIL_CONTATO = "[Seu E-mail de Contato]";
  const NOME_DO_PRODUTO = "Caderno de Receitas: do mundo para sua casa";
  const DATA_ATUALIZACAO = "21/10/2025";
  const PROCESSADOR_PAGAMENTO = "[Ex: Stripe, Hotmart, PagSeguro]";
  const PLATAFORMA_EMAIL = "[Ex: Mailchimp, RD Station]";
  
  // 2. REMOVEMOS os estilos inline daqui

  return (
    // 3. Adiciona a classe principal da seção
    <section className="legal-page-wrapper">
      <div className="container">
        <div className="row">
          {/* O layout (grid) que fizemos já é responsivo */}
          <div className="col-12 col-lg-10 offset-lg-1">

            {/* 4. Adiciona a classe para o conteúdo */}
            <div className="legal-content">

              {/* Título Principal */}
              <h1 className="m-0">Política de Privacidade</h1>

              {/* --- Início do Texto da Política --- */}

              <p className="m-0"><strong>Última atualização:</strong> {DATA_ATUALIZACAO}</p>

              <p className="m-0">
                A sua privacidade é de extrema importância para nós. Esta Política de Privacidade
                descreve como <strong>{SEU_SITE_NOME}</strong> coleta, utiliza, armazena e protege
                as informações pessoais dos usuários que visitam e interagem com o nosso site
                <strong> {SEU_SITE_URL}</strong>, especialmente em relação à aquisição
                do <strong>{NOME_DO_PRODUTO}</strong>.
              </p>
              <p className="m-0">
                Ao utilizar nosso site, você concorda com a coleta e uso de informações
                de acordo com esta política.
              </p>

              {/* Agora usamos h2/h3/p normais, e o CSS cuida do estilo */}
              <h2 className="m-0">1. Informações que Coletamos</h2>
              <p className="m-0">
                Coletamos diferentes tipos de informações para várias finalidades,
                visando fornecer e melhorar nosso serviço.
              </p>

              <h3 className="m-0">a) Informações Fornecidas Diretamente por Você:</h3>
              <ul className="m-0">
                <li>
                  <strong>Dados de Compra:</strong> Ao adquirir nosso produto, solicitamos
                  informações pessoais como nome completo, endereço de e-mail, endereço
                  de entrega (se aplicável) e informações de pagamento.
                </li>
                <li>
                  <strong>Dados de Contato:</strong> Se você se inscrever em nossa newsletter
                  ou nos contatar, podemos coletar seu nome e endereço de e-mail.
                </li>
              </ul>

              <h3 className="m-0">b) Informações Coletadas Automaticamente:</h3>
              <ul className="m-0">
                <li className="m-0">
                  <strong>Cookies e Dados de Uso:</strong> Como a maioria dos sites, usamos
                  cookies para melhorar sua experiência. Podemos coletar informações sobre
                  como o site é acessado e usado (ex: seu endereço IP, tipo de navegador,
                  páginas visitadas e horários de acesso).
                </li>
              </ul>

              <h2 className="m-0">2. Como Usamos Suas Informações</h2>
              <p className="m-0">
                As informações coletadas são usadas para os seguintes fins:
              </p>
              <ul className="m-0">
                <li>
                  <strong>Para Processar seu Pedido:</strong> Usamos seus dados pessoais
                  para processar pagamentos, gerenciar seu pedido e entregar o produto.
                </li>
                <li>
                  <strong>Para Comunicação:</strong> Para enviar confirmações de pedido, recibos,
                  atualizações e responder às suas perguntas ou solicitações de suporte.
                </li>
                <li>
                  <strong>Para Marketing (com seu consentimento):</strong> Se você optar por
                  receber nossa newsletter, usaremos seu e-mail para enviar notícias, ofertas
                  especiais e informações sobre outros produtos ou serviços. Você pode optar
                  por não receber estas comunicações a qualquer momento.
                </li>
                <li>
                  <strong>Para Melhorar nosso Site:</strong> Usamos dados de uso e cookies
                  para entender como os visitantes interagem com nosso site e otimizar a
                  experiência do usuário.
                </li>
              </ul>

              <h2 className="m-0">3. Compartilhamento de Informações</h2>
              <p className="m-0">
                Nós não vendemos, trocamos ou alugamos suas informações pessoais para terceiros.
                Podemos compartilhar suas informações apenas com prestadores de serviços
                terceirizados que nos auxiliam na operação do nosso negócio, como:
              </p>
              <ul className="m-0">
                <li>
                  <strong>Processadores de Pagamento:</strong> (Ex: {PROCESSADOR_PAGAMENTO})
                  para processar sua compra com segurança.
                </li>
                <li>
                  <strong>Plataformas de E-mail Marketing:</strong> (Ex: {PLATAFORMA_EMAIL})
                  para gerenciar nossa newsletter (apenas se você se inscreveu).
                </li>
              </ul>
              <p className="m-0">
                Exigimos que esses terceiros mantenham suas informações seguras e confidenciais
                e não as utilizem para outros fins.
              </p>

              <h2 className="m-0">4. Segurança dos Dados</h2>
              <p className="m-0"> 
                Implementamos medidas de segurança razoáveis para proteger suas informações
                pessoais contra acesso, alteração ou destruição não autorizados. Nosso site
                utiliza criptografia SSL (HTTPS). No entanto, nenhum método de transmissão
                pela Internet ou armazenamento eletrônico é 100% seguro.
              </p>

              <h2 className="m-0">5. Cookies</h2>
              <p className="m-0">
                Cookies são pequenos arquivos armazenados em seu dispositivo. Usamos cookies
                para funcionalidades essenciais (como o carrinho de compras) e para análise
                (como o Google Analytics). Você pode instruir seu navegador a recusar todos
                os cookies.
              </p>

              <h2 className="m-0">6. Seus Diretos (Conforme a LGPD)</h2>
              <p className="m-0">
                Você tem o direito de acessar, corrigir, atualizar ou solicitar a exclusão
                de suas informações pessoais. Se desejar exercer algum desses direitos,
                entre em contato conosco.
              </p>

              <h2 className="m-0">7. Alterações nesta Política de Privacidade</h2>
              <p className="m-0">
                Podemos atualizar nossa Política de Privacidade periodicamente. Notificaremos
                sobre quaisquer alterações publicando a nova política nesta página e
                atualizando a data da "Última atualização".
              </p>

              <h2 className="m-0">8. Contato</h2>
              <p className="p-0 m-0">
                Se você tiver alguma dúvida sobre esta Política de Privacidade, entre em
                contato conosco através do e-mail: <strong>{SEU_EMAIL_CONTATO}</strong>
              </p>

              {/* --- Fim do Texto da Política --- */}

            </div> {/* Fim de .privacy-content */}
          </div>
        </div>
      </div>
    </section>
  );
}

export default PrivacyPolicy;