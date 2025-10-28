import React from "react";
import "../../assets/Style/Faq.css";

import { useTranslation, Trans } from "react-i18next";

const Faq = () => {
  const { t } = useTranslation();

  const faqData = [
    {
      id: "faq1",
      question: t("FAQ.faqQuestion1"),
      answer: <p className="p-0 m-0">{t("FAQ.faqAnswer1")}</p>,
    },
    {
      id: "faq2",
      question: t("FAQ.faqQuestion2"),
      answer: <p className="p-0 m-0">{t("FAQ.faqAnswer2")}</p>,
    },
    {
      id: "faq3",
      question: t("FAQ.faqQuestion3"),
      answer: (
        <>
          <p className="p-0 m-0">{t("FAQ.faqAnswer3_p1")}</p>
          <ul>
            <li>{t("FAQ.faqAnswer3_li1")}</li>
            <li>{t("FAQ.faqAnswer3_li2")}</li>
          </ul>
        </>
      ),
    },
    {
      id: "faq4",
      question: t("FAQ.faqQuestion4"),
      answer: <p className="p-0 m-0">{t("FAQ.faqAnswer4")}</p>,
    },
    {
      id: "faq5",
      question: t("FAQ.faqQuestion5"),
      answer: (
        <>
          <p className="p-0 m-0">{t("FAQ.faqAnswer5_p1")}</p>
          <ul>
            {/* ESTA É A FORMA CORRETA */}
            <li>
              <Trans i18nKey="FAQ.faqAnswer5_li1">
                <strong>PAC:</strong> mais econômico, mas demora um pouco mais.
              </Trans>
            </li>
            <li>
              <Trans i18nKey="FAQ.faqAnswer5_li2">
                <strong>Sedex:</strong> chega mais rápido.
              </Trans>
            </li>
          </ul>
          <p className="p-0 m-0">{t("FAQ.faqAnswer5_p2")}</p>
        </>
      ),
    },
    {
      id: "faq6",
      question: t("FAQ.faqQuestion6"),
      answer: <p className="p-0 m-0">{t("FAQ.faqAnswer6")}</p>,
    },
    {
      id: "faq7",
      question: t("FAQ.faqQuestion7"),
      answer: <p className="p-0 m-0">{t("FAQ.faqAnswer7")}</p>,
    },
    {
      id: "faq8",
      question: t("FAQ.faqQuestion8"),
      answer: (
        <>
          <ul className="px-4 p-0 m-0">
            <li>
              <Trans i18nKey="FAQ.faqAnswer8_li1">
                A versão <strong>física</strong> está disponível exclusivamente
                aqui no meu site.
              </Trans>
            </li>
            <li>
              <Trans i18nKey="FAQ.faqAnswer8_li2">
                A versão <strong>digital (eBook)</strong> está disponível na
                Amazon Kindle.
              </Trans>
            </li>
          </ul>
        </>
      ),
    },
    {
      id: "faq9",
      question: t("FAQ.faqQuestion9"),
      answer: (
        <div>
          <p className="">{t("FAQ.faqAnswer9_p1")}</p>
          <div className="faq-contact-info">
            <p className="">
              {t("FAQ.faqAnswer9_email")}
              <a
                className="mx-1"
                href="mailto:kenia.bispo@hotmail.com"
                aria-label={t(
                  "FAQ.emailAriaLabel",
                  "Enviar e-mail para kenia.bispo@hotmail.com"
                )}
              >
                kenia.bispo@hotmail.com
              </a>
            </p>
            <p className="p-0 m-0">
              {t("FAQ.faqAnswer9_whatsapp")}
              <a
                className="mx-1"
                href="https://wa.me/5521969526214"
                target="_blank"
                rel="noopener noreferrer"
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

  return (
    <section className="faq-section" id="faq">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-8">
            <h2 className="faq-title text-center">{t("FAQ.faqTitle")}</h2>

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
