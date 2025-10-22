import React from 'react';
import '../assets/Style/LegalPages.css';
// 1. Importar hooks
import { useTranslation, Trans } from "react-i18next";

const PrivacyPolicy = () => {
  // 2. Inicializar i18n
  const { t, i18n } = useTranslation();

  // 3. Manter constantes para injeção
  const SEU_SITE_NOME = "Drª Kenia Bispo";
  const SEU_SITE_URL = "https://www.keniabispo.com/";
  const SEU_EMAIL_CONTATO = "kenia.bispo@hotmail.com";
  const NOME_DO_PRODUTO = "Caderno de Receitas: do mundo para sua casa";
  const PROCESSADOR_PAGAMENTO = "[Ex: Stripe, Hotmart, PagSeguro]";

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
              <h1 className="legal-content__title--h1">{t("legal.privacy.h1")}</h1>

              <p className="text_p_atualization">
                <strong className="legal-content__strong">
                  {t("legal.privacy.lastUpdated")}
                </strong> {DATA_ATUALIZACAO}
              </p>

              <p className="legal-content__paragraph">
                <Trans
                  i18nKey="legal.privacy.intro1"
                  values={{
                    siteName: SEU_SITE_NOME,
                    siteUrl: SEU_SITE_URL,
                    productName: NOME_DO_PRODUTO
                  }}
                  components={[
                    <strong className="legal-content__strong" />, // <1>
                    <strong className="legal-content__strong" />, // <2>
                    <strong className="legal-content__strong" />  // <3>
                  ]}
                />
              </p>
              <p className="legal-content__paragraph">
                {t("legal.privacy.intro2")}
              </p>

              <h2 className="legal-content__title--h2">{t("legal.privacy.title1")}</h2>
              <p className="legal-content__paragraph">
                {t("legal.privacy.p1_1")}
              </p>

              <h3 className="legal-content__title--h3">{t("legal.privacy.title1a")}</h3>
              <ul className="legal-content__list">
                <li className="legal-content__list-item">
                  <Trans
                    i18nKey="legal.privacy.li1a_1"
                    components={[<strong className="legal-content__strong" />]}
                  />
                </li>
                <li className="legal-content__list-item legal-content__list-item--sm">
                  <Trans
                    i18nKey="legal.privacy.li1a_2"
                    components={[<strong className="legal-content__strong" />]}
                  />
                </li>
              </ul>

              <h3 className="legal-content__title--h3">{t("legal.privacy.title1b")}</h3>
              <ul className="legal-content__list">
                <li className="legal-content__list-item">
                  <Trans
                    i18nKey="legal.privacy.li1b_1"
                    components={[<strong className="legal-content__strong" />]}
                  />
                </li>
              </ul>

              <h2 className="legal-content__title--h2">{t("legal.privacy.title2")}</h2>
              <p className="legal-content__paragraph">
                {t("legal.privacy.p2_1")}
              </p>
              <ul className="legal-content__list">
                <li className="legal-content__list-item legal-content__list-item--sm">
                  <Trans
                    i18nKey="legal.privacy.li2_1"
                    components={[<strong className="legal-content__strong" />]}
                  />
                </li>
                <li className="legal-content__list-item legal-content__list-item--sm">
                  <Trans
                    i18nKey="legal.privacy.li2_2"
                    components={[<strong className="legal-content__strong" />]}
                  />
                </li>
                <li className="legal-content__list-item legal-content__list-item--sm">
                  <Trans
                    i18nKey="legal.privacy.li2_3"
                    components={[<strong className="legal-content__strong" />]}
                  />
                </li>
                <li className="legal-content__list-item legal-content__list-item--sm">
                  <Trans
                    i18nKey="legal.privacy.li2_4"
                    components={[<strong className="legal-content__strong" />]}
                  />
                </li>
              </ul>

              <h2 className="legal-content__title--h2">{t("legal.privacy.title3")}</h2>
              <p className="legal-content__paragraph">
                {t("legal.privacy.p3_1")}
              </p>
              <ul className="legal-content__list">
                <li className="legal-content__list-item legal-content__list-item--sm">
                  <Trans
                    i18nKey="legal.privacy.li3_1"
                    values={{ paymentProcessor: PROCESSADOR_PAGAMENTO }}
                    components={[<strong className="legal-content__strong" />]}
                  />
                </li>
              </ul>
              <p className="legal-content__paragraph legal-content__list-item--sm">
                {t("legal.privacy.p3_2")}
              </p>

              <h2 className="legal-content__title--h2">{t("legal.privacy.title4")}</h2>
              <p className="legal-content__paragraph">
                {t("legal.privacy.p4_1")}
              </p>

              <h2 className="legal-content__title--h2">{t("legal.privacy.title5")}</h2>
              <p className="legal-content__paragraph">
                {t("legal.privacy.p5_1")}
              </p>

              <h2 className="legal-content__title--h2">{t("legal.privacy.title6")}</h2>
              <p className="legal-content__paragraph">
                {t("legal.privacy.p6_1")}
              </p>

              <h2 className="legal-content__title--h2">{t("legal.privacy.title7")}</h2>
              <p className="legal-content__paragraph">
                {t("legal.privacy.p7_1")}
              </p>

              <h2 className="legal-content__title--h2">{t("legal.privacy.title8")}</h2>
              <p className="legal-content__paragraph">
                <Trans
                  i18nKey="legal.privacy.p8_1"
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
}

export default PrivacyPolicy;