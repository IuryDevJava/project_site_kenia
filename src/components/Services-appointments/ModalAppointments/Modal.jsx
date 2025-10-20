import React, { useState } from "react";
// --- NOVO: Importações da biblioteca ---
import PhoneInput, { isValidPhoneNumber } from 'react-phone-number-input';
import 'react-phone-number-input/style.css'; // Estilos base da biblioteca

import "../../../assets/Style/Modal.css"; // O seu CSS vem depois para poder sobrescrever
import "../../../assets/Style/ButtonPrimary.css";
import CustomSelect from "./CustomSelect";
import { useTranslation } from "react-i18next";

export default function Modal({ onClose }) {
  const { t } = useTranslation();

  const [formData, setFormData] = useState({
    nome: "",
    // O campo de telefone sai daqui, terá o seu próprio estado
    email: "",
    tipo: "presencial",
  });
  
  const [phoneValue, setPhoneValue] = useState("");

  const [errors, setErrors] = useState({});
  const [isRedirecting, setIsRedirecting] = useState(false);

  const tipoConsultaOptions = [
    { value: "presencial", label: t("services.modalAppointmentsSelectOption1") },
    { value: "online", label: t("services.modalAppointmentsSelectOption2") },
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: null }));
    }
  };

  const handlePhoneChange = (value) => {
      setPhoneValue(value);
      if (errors.telefone) {
          setErrors((prev) => ({ ...prev, telefone: null}));
      }
  }

  const validateForm = () => {
    const newErrors = {};

    if (!formData.nome.trim()) {
      newErrors.nome = t("formErrors.requiredField", { field: t("services.modalAppointmentsLabel1") });
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) {
      newErrors.email = t("formErrors.requiredField", { field: t("services.modalAppointmentsLabel3") });
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = t("formErrors.invalidEmail");
    }

    if (!phoneValue) {
      newErrors.telefone = t("formErrors.requiredField", { field: t("services.modalAppointmentsLabel2") });
    } else if (!isValidPhoneNumber(phoneValue)) {
      newErrors.telefone = t("formErrors.invalidPhone");
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const isValid = validateForm();

    if (isValid) {
      setIsRedirecting(true);
      setTimeout(() => {
        const numberWhatsapp = "5521980892914";
        const tipoConsultaLabel =
          formData.tipo === "presencial"
            ? t("services.modalAppointmentsSelectOption1")
            : t("services.modalAppointmentsSelectOption2");

        const mensagem = `
${t("services.whatsappGreeting")}

*${t("services.whatsappClientData")}*
*${t("services.modalAppointmentsLabel1")}:* ${formData.nome}
*${t("services.modalAppointmentsLabel2")}:* ${phoneValue}
*${t("services.modalAppointmentsLabel3")}:* ${formData.email}
*${t("services.modalAppointmentsSelect")}:* ${tipoConsultaLabel}

${t("services.whatsappFooter")}
        `;
        const mensagemCodificada = encodeURIComponent(mensagem);
        const urlWhatsapp = `https://wa.me/${numberWhatsapp}?text=${mensagemCodificada}`;

        window.open(urlWhatsapp, "_blank");
        onClose();
      }, 2000);
    }
  };

  return (
    <div className="custom-modal-backdrop">
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content custom-modal-content">
          <button className="custom-close-btn" onClick={onClose} aria-label="Close">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M18 6L6 18" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/><path d="M6 6L18 18" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
          </button>

          {isRedirecting ? (
            <div className="redirect-container">
              <div className="spinner"></div>
              <h2 className="custom-modal-title">{t("services.modalRedirectTitle")}</h2>
              <p>{t("services.modalRedirectText")}</p>
            </div>
          ) : (
            <>
              <h2 className="custom-modal-title text-center">{t("services.modalAppointmentsTitle")}</h2>
              <form className="form_camp_client" onSubmit={handleSubmit} noValidate>
                {/* Campo Nome (sem alteração) */}
                
                <div className="div_form_group">
                <div className="form-group">
                  <label htmlFor="nome" className="form-label">{t("services.modalAppointmentsLabel1")}</label>
                  <input type="text" id="nome" name="nome" placeholder={t("services.modalAppointmentsInput1Placeholder")} className={`d-flex w-100 custom-input ${errors.nome ? "error-input" : ""}`} value={formData.nome} onChange={handleChange}/>
                  {errors.nome && <p className="error-message">{errors.nome}</p>}
                </div>
                
                {/* --- CAMPO DE TELEFONE SUBSTITUÍDO --- */}
                
                  <div className="form-group">
                    <label htmlFor="telefone" className="form-label">{t("services.modalAppointmentsLabel2")}</label>
                    <PhoneInput
                      id="telefone"
                      international
                      defaultCountry="BR" // País padrão para uma melhor UX
                      placeholder={t("services.modalAppointmentsInput2Placeholder")}
                      value={phoneValue}
                      onChange={handlePhoneChange}
                      className={`custom-phone-input ${errors.telefone ? 'error-input' : ''}`}
                    />
                    {errors.telefone && <p className="error-message">{errors.telefone}</p>}
                  </div>
                  {/* Campo Email (sem alteração) */}
                  <div className="form-group">
                    <label htmlFor="email" className="form-label">{t("services.modalAppointmentsLabel3")}</label>
                    <input type="email" id="email" name="email" placeholder={t("services.modalAppointmentsInput3Placeholder")} className={`d-flex w-100 custom-input ${errors.email ? "error-input" : ""}`} value={formData.email} onChange={handleChange}/>
                    {errors.email && <p className="error-message">{errors.email}</p>}
                  </div>
                  {/* Campo Tipo de Consulta (sem alteração) */}
                  <div className="form-group">
                    <label htmlFor="tipo" className="form-label">{t("services.modalAppointmentsSelect")}</label>
                    <CustomSelect name="tipo" options={tipoConsultaOptions} value={formData.tipo} onChange={handleChange}/>
                  </div>
                </div>

                <div className="service_div_button">
                  <button type="submit" className="modal_button btn-base">{t("services.modalAppointmentsButton")}</button>
                </div>
              </form>
            </>
          )}
        </div>
      </div>
    </div>
  );
}