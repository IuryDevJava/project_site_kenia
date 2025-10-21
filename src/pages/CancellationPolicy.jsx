import React from "react";
import "../assets/Style/LegalPages.css";

const CancellationPolicy = () => {
  const SEU_EMAIL_CONTATO = "[Seu E-mail de Contato]";
  const DATA_ATUALIZACAO = "[Data de Hoje]";
  const NOME_DO_PRODUTO = "[Nome do Produto, ex: 'Livro X']";

  return (
    <section className="legal-page-wrapper">
      <div className="container">
        <div className="row">
          <div className="col-12 col-lg-10 offset-lg-1">
            <div className="legal-content">
              <h1>Política de Cancelamento e Reembolso</h1>
              <p>
                <strong>Última atualização:</strong> {DATA_ATUALIZACAO}
              </p>

              <p>
                Esta política descreve como lidamos com cancelamentos e
                reembolsos para o <strong>{NOME_DO_PRODUTO}</strong>.
              </p>

              <h2>1. Cancelamento da Compra (Direito de Arrependimento)</h2>
              <p>
                Conforme o Artigo 49 do Código de Defesa do Consumidor do
                Brasil, o cliente tem o direito de se arrepender da compra de
                produtos adquiridos fora do estabelecimento comercial (como pela
                internet) no prazo de **7 (sete) dias corridos**, a contar da
                data do recebimento do produto ou da assinatura do contrato.
              </p>
              <p>
                Para produtos digitais (como nosso e-book), o prazo de 7 dias
                começa a contar a partir da data da confirmação do pagamento e
                liberação do acesso ao material.
              </p>

              <h2>2. Como Solicitar o Cancelamento</h2>
              <p>
                Para exercer seu direito de arrependimento, você deve nos
                notificar dentro do prazo de 7 dias através do nosso canal de
                atendimento oficial.
              </p>
              <ul>
                <li>
                  Envie um e-mail para: <strong>{SEU_EMAIL_CONTATO}</strong>
                </li>
                <li>
                  No e-mail, informe seu nome completo, e-mail utilizado na
                  compra e o motivo "Solicitação de Cancelamento".
                </li>
              </ul>

              <h2>3. Processamento do Reembolso</h2>
              <p>
                Após a confirmação da sua solicitação (dentro do prazo de 7
                dias), procederemos com o reembolso total do valor pago.
              </p>
              <ul>
                <li>
                  O reembolso será processado através do mesmo método de
                  pagamento utilizado na compra (ex: estorno no cartão de
                  crédito ou reembolso via PIX/transferência).
                </li>
                <li>
                  O prazo para o estorno no cartão de crédito pode variar
                  dependendo da operadora do cartão.
                </li>
              </ul>

              <h2>4. Após o Prazo de 7 Dias</h2>
              <p>
                Não serão aceitas solicitações de cancelamento ou reembolso após
                o término do prazo legal de 7 dias (direito de arrependimento).
                Por se tratar de um produto digital de consumo imediato, após
                esse período, a compra é considerada final.
              </p>

              <h2>5. Contato</h2>
              <p className="p-0 m-0">
                Para dúvidas ou mais informações sobre nossa política de
                cancelamento, entre em contato pelo e-mail:
                <strong> {SEU_EMAIL_CONTATO}</strong>.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CancellationPolicy;
