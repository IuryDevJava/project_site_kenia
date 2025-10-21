import React from "react";
import "../../assets/Style/Faq.css";

import { useTranslation } from "react-i18next";

const Faq = () => {

  const { t } = useTranslation();

  const faqData = [
    {
      id: "faq1",
      question: t("FAQ.faqQuestion1"),
      answer: (
        <p className="p-0 m-0">
          {t("FAQ.faqAnswer1")}
        </p>
      ),
    },
    {
      id: "faq2",
      question: t("FAQ.faqQuestion2"),
      answer: (
        <p className="p-0 m-0">
          {t("FAQ.faqAnswer2")}
        </p>
      ),
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
      answer: (
        <p className="p-0 m-0">
          {t("FAQ.faqAnswer4")}
        </p>
      ),
    },
    {
      id: "faq5",
      question: t("FAQ.faqQuestion5"),
      answer: (
        <>
          <p className="p-0 m-0">{t("FAQ.faqAnswer5_p1")}</p>
          <ul>
            {/* Usamos 'dangerouslySetInnerHTML' porque o JSON tem tags <strong> */}
            <li dangerouslySetInnerHTML={{ __html: t("FAQ.faqAnswer5_li1") }} />
            <li dangerouslySetInnerHTML={{ __html: t("FAQ.faqAnswer5_li2") }} />
          </ul>
          <p className="p-0 m-0">{t("FAQ.faqAnswer5_p2")}</p>
        </>
      ),
    },
    {
      id: "faq6",
      question: t("FAQ.faqQuestion6"),
      answer: (
        <p className="p-0 m-0">
          {t("FAQ.faqAnswer6")}
        </p>
      ),
    },
    {
      id: "faq7",
      question: t("FAQ.faqQuestion7"),
      answer: (
        <p className="p-0 m-0">
          {t("FAQ.faqAnswer7")}
        </p>
      ),
    },
    {
      id: "faq8",
      question: t("FAQ.faqQuestion8"),
      answer: (
        <>
          <ul className="px-4 p-0 m-0">
            {/* Usamos 'dangerouslySetInnerHTML' porque o JSON tem tags <strong> */}
            <li dangerouslySetInnerHTML={{ __html: t("FAQ.faqAnswer8_li1") }} />
            <li dangerouslySetInnerHTML={{ __html: t("FAQ.faqAnswer8_li2") }} />
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
              <span className="mx-1">kenia.bispo@hotmail.com</span>
            </p>
            <p className="p-0 m-0">
              {t("FAQ.faqAnswer9_whatsapp")}
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

  return (
    <section className="faq-section" id="faq">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-8">
            {/* 3. Traduza o título também */}
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