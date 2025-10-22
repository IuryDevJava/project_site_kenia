import React from "react";
import "../assets/Style/LegalPages.css";
// 1. Importe o useTranslation
import { useTranslation, Trans } from "react-i18next";

const CancellationPolicy = () => {
  // 2. Pegue o 't' e também o 'i18n' (para sabermos o idioma)
  const { t, i18n } = useTranslation();

  const SEU_EMAIL_CONTATO = "kenia.bispo@hotmail.com";
  const NOME_DO_PRODUTO = "Caderno de Receitas: do mundo para sua casa";

  // 3. Crie a data em formato universal (ISO 8601)
  // (Adicionei T12:00:00 para evitar problemas de fuso horário que virem o dia)
  const dataOriginal = new Date('2025-10-21T12:00:00');

  // 4. Formate a data dinamicamente!
  // Isso vai usar o idioma ATIVO (pt, en, es) para criar a string.
  // Ex: 'pt' -> 21/10/2025
  // Ex: 'en' -> 10/21/2025
  // Ex: 'es' -> 21/10/2025
  const DATA_ATUALIZACAO = new Intl.DateTimeFormat(i18n.language, {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric',
  }).format(dataOriginal);

  return (
    <section className="legal-page-wrapper">
      <div className="container">
        <div className="row">
          <div className="col-12 col-lg-10 offset-lg-1">
            <div className="legal-content">
              {/* O resto do seu código já estava pronto para i18n */}
              
              <h1 className="legal-content__title--h1">
                {t("legal.cancellation.h1")}
              </h1>

              <p className="text_p_atualization">
                <strong className="legal-content__strong">
                  {/* O t() pega a label (Ex: "Última atualização:") */}
                  {t("legal.cancellation.lastUpdated")}
                </strong> 
                {/* E aqui entra a data JÁ FORMATADA para o idioma certo */}
                {DATA_ATUALIZACAO}
              </p>

              <p className="legal-content__paragraph">
                <Trans
                  i18nKey="legal.cancellation.intro"
                  values={{ productName: NOME_DO_PRODUTO }}
                  components={[<strong className="legal-content__strong" />]}
                />
              </p>

              <h2 className="legal-content__title--h2">
                {t("legal.cancellation.title1")}
              </h2>
              <p className="legal-content__paragraph">
                <Trans
                  i18nKey="legal.cancellation.p1_1"
                  components={[<strong className="legal-content__strong" />]}
                />
              </p>
              <p className="legal-content__paragraph legal-content__list-item--sm">
                {t("legal.cancellation.p1_2")}
              </p>

              <h2 className="legal-content__title--h2">
                {t("legal.cancellation.title2")}
              </h2>
              <p className="legal-content__paragraph">
                {t("legal.cancellation.p2_1")}
              </p>
              <ul className="legal-content__list">
                <li className="legal-content__list-item">
                  <Trans
                    i18nKey="legal.cancellation.li2_1"
                    values={{ email: SEU_EMAIL_CONTATO }}
                    components={[<strong className="legal-content__strong" />]}
                  />
                </li>
                <li className="legal-content__list-item">
                  {t("legal.cancellation.li2_2")}
                </li>
              </ul>

              <h2 className="legal-content__title--h2">
                {t("legal.cancellation.title3")}
              </h2>
              <p className="legal-content__paragraph">
                {t("legal.cancellation.p3_1")}
              </p>
              <ul className="legal-content__list">
                <li className="legal-content__list-item">
                  {t("legal.cancellation.li3_1")}
                </li>
                <li className="legal-content__list-item legal-content__list-item--sm">
                  {t("legal.cancellation.li3_2")}
                </li>
              </ul>

              <h2 className="legal-content__title--h2">
                {t("legal.cancellation.title4")}
              </h2>
              <p className="legal-content__paragraph">
                {t("legal.cancellation.p4_1")}
              </p>

              <h2 className="legal-content__title--h2">
                {t("legal.cancellation.title5")}
              </h2>
              <p className="legal-content__paragraph">
                <Trans
                  i18nKey="legal.cancellation.p5_1"
                  values={{ email: SEU_EMAIL_CONTATO }}
                  components={[<strong className="legal-content__strong" />]}
                />
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CancellationPolicy;