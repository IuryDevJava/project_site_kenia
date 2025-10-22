import React from "react";
import "../assets/Style/LegalPages.css";
// 1. Importar hooks
import { useTranslation, Trans } from "react-i18next";

const TermsOfUse = () => {
  // 2. Inicializar i18n
  const { t, i18n } = useTranslation();

  // 3. Manter constantes para injeção
  const SEU_SITE_NOME = "Drª Kenia Bispo";
  const SEU_SITE_URL = "https://www.keniabispo.com/";
  const SEU_EMAIL_CONTATO = "kenia.bispo@hotmail.com";

  // 4. Lógica da Data Dinâmica
  const dataOriginal = new Date('2025-10-21T12:00:00');
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
              <h1 className="legal-content__title--h1">{t("legal.terms.h1")}</h1>
              <p className="text_p_atualization">
                <strong className="legal-content__strong">
                  {t("legal.terms.lastUpdated")}
                </strong> {DATA_ATUALIZACAO}
              </p>

              <p className="legal-content__paragraph">
                <Trans
                  i18nKey="legal.terms.intro"
                  values={{ siteName: SEU_SITE_NOME, siteUrl: SEU_SITE_URL }}
                />
              </p>

              <h2 className="legal-content__title--h2">{t("legal.terms.title1")}</h2>
              <p className="legal-content__paragraph">
                {t("legal.terms.p1_1")}
              </p>
              <ul className="legal-content__list">
                <li className="legal-content__list-item">
                  {t("legal.terms.li1_1")}
                </li>
                <li className="legal-content__list-item legal-content__list-item--sm">
                  {t("legal.terms.li1_2")}
                </li>
              </ul>

              <h2 className="legal-content__title--h2">{t("legal.terms.title2")}</h2>
              <p className="legal-content__paragraph">
                <Trans
                  i18nKey="legal.terms.p2_1"
                  values={{ siteName: SEU_SITE_NOME }}
                />
              </p>
              <p className="legal-content__paragraph legal-content__list-item--sm">
                {t("legal.terms.p2_2")}
              </p>

              <h2 className="legal-content__title--h2">{t("legal.terms.title3")}</h2>
              <p className="legal-content__paragraph">
                {t("legal.terms.p3_1")}
              </p>
              <p className="legal-content__paragraph legal-content__list-item--sm">
                <Trans
                  i18nKey="legal.terms.p3_2"
                  values={{ siteName: SEU_SITE_NOME }}
                />
              </p>

              <h2 className="legal-content__title--h2">{t("legal.terms.title4")}</h2>
              <p className="legal-content__paragraph">
                {t("legal.terms.p4_1")}
              </p>

              <h2 className="legal-content__title--h2">{t("legal.terms.title5")}</h2>
              <p className="legal-content__paragraph">
                {t("legal.terms.p5_1")}
              </p>

              <h2 className="legal-content__title--h2">{t("legal.terms.title6")}</h2>
              <p className="legal-content__paragraph">
                <Trans
                  i18nKey="legal.terms.p6_1"
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

export default TermsOfUse;