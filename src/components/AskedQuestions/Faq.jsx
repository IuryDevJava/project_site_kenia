import React from "react";
import "../../assets/Style/Faq.css";

const faqData = [
  {
    id: "faq1",
    question: "Posso devolver o livro se eu me arrepender?",
    answer: (
      <p className="p-0 m-0">
        Sim. Você tem até 7 dias corridos depois de receber o livro para desistir da compra. Nesse caso, eu devolvo todo o valor pago.
      </p>
    ),
  },
  {
    id: "faq2",
    question: "E se o livro chegar com algum problema?",
    answer: (
      <p className="p-0 m-0">
        Se o livro vier com defeito ou danificado no transporte, você pode escolher: receber um novo exemplar ou ter o dinheiro de volta. Basta me avisar e eu cuido de tudo para você não ter dor de cabeça.
      </p>
    ),
  },
  {
    id: "faq3",
    question: "Quais são as formas de pagamento?",
    answer: (
      <>
        <p className="p-0 m-0">Você pode pagar com cartão de crédito ou Pix.</p>
        <ul>
          <li>No cartão, dá para parcelar em até 5 vezes sem juros.</li>
          <li>No Pix, o pagamento é à vista e a confirmação cai rápido.</li>
        </ul>
      </>
    ),
  },
  {
    id: "faq4",
    question: "Em quanto tempo vocês enviam o livro?",
    answer: (
      <p className="p-0 m-0">
        Depois que o pagamento é confirmado, eu preparo tudo com cuidado e posto nos Correios em até 2 dias úteis.
      </p>
    ),
  },
  {
    id: "faq5",
    question: "Quanto tempo leva para chegar?",
    answer: (
      <>
        <p className="p-0 m-0">O prazo varia de acordo com o CEP e o tipo de envio que você escolher:</p>
        <ul>
          <li><strong>PAC:</strong> mais econômico, mas demora um pouco mais.</li>
          <li><strong>Sedex:</strong> chega mais rápido.</li>
        </ul>
        <p className="p-0 m-0">Para ter uma ideia: quem está no Rio de Janeiro recebe em cerca de 5 dias úteis.</p>
      </>
    ),
  },
  {
    id: "faq6",
    question: "Como acompanho meu pedido?",
    answer: (
      <p className="p-0 m-0">
        Assim que o livro for postado, você recebe por e-mail o código de rastreio dos Correios. Assim pode acompanhar cada etapa da entrega.
      </p>
    ),
  },
  {
    id: "faq7",
    question: "Posso comprar para presente?",
    answer: (
      <p className="p-0 m-0">
        Sim. É só colocar o endereço da pessoa presenteada na hora da compra. Se quiser, posso até incluir um recadinho especial dentro do pacote.
      </p>
    ),
  },
  {
    id: "faq8",
    question: "Onde mais posso comprar esse livro?",
    answer: (
      <>
        <ul className="px-4 p-0 m-0">
          <li>A versão <strong>física</strong> está disponível exclusivamente aqui no meu site.</li>
          <li>A versão <strong>digital (eBook)</strong> está disponível na Amazon Kindle.</li>
        </ul>
      </>
    ),
  },
  {
    id: "faq9",
    question: "E se eu tiver outra dúvida?",
    answer: (
      <div>
        <p className="">É só me chamar. Estou disponível pelos canais abaixo e sou eu mesma que respondo.
        </p>
        <div className="faq-contact-info">
          <p className="">
            E-mail:
            <span className="mx-1">kenia.bispo@hotmail.com</span>
          </p>
          <p className="p-0 m-0">
            WhatsApp:
            <a
              className="mx-1"
              href="https://wa.me/5521969526214"
              target="_blank"
              rel="noopener noreferrer"
              title="Link para Whatsapp"
            >
              {" "}
              +55 (21) 96952-6214
            </a>
          </p>
        </div>
      </div>
    ),
  },
];

const Faq = () => {
  return (
    <section className="faq-section" id="faq">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-8">
            <h2 className="faq-title text-center">Perguntas frequentes</h2>

            <div className="accordion" id="faqAccordion">
              {faqData.map((item) => (
                <div className="accordion-item " key={item.id}>
                  <h2 className="accordion-header" id={`heading-${item.id}`}>
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target={`#collapse-${item.id}`}
                      aria-expanded="false"
                      aria-controls={`collapse-${item.id}`}
                    >
                      {item.question}
                      {/* <span className="material-symbols-outlined icon-open">add</span>
                      <span className="material-symbols-outlined icon-close">remove</span> */}
                    </button>
                  </h2>
                  <div
                    id={`collapse-${item.id}`}
                    className="accordion-collapse collapse"
                    aria-labelledby={`heading-${item.id}`}
                    data-bs-parent="#faqAccordion"
                  >
                    <div className="accordion-body">{item.answer}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Faq;
