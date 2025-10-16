import React, { useState } from "react";
import "./Modal.css";
import CustomSelect from "./CustomSelect";

export default function Modal({ onClose }) {
  const [formData, setFormData] = useState({
    nome: "",
    telefone: "",
    email: "",
    tipo: "presencial",
  });

  const [isRedirecting, setIsRedirecting] = useState(false);

  const tipoConsultaOptions = [
    { value: "presencial", label: "Presencial" },
    { value: "online", label: "Online / Teleconsulta" },
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // ALTERADO: A função handleSubmit agora exibe uma mensagem antes de redirecionar
  const handleSubmit = (e) => {
    e.preventDefault();

    // 1. Ativa o estado para mostrar a mensagem na tela
    setIsRedirecting(true);

    // 2. Define um atraso de 2 segundos (2000 ms) antes de redirecionar
    setTimeout(() => {
      const seuNumeroWhatsapp = "5521980892914";

      const mensagem = `
Olá! Gostaria de agendar uma consulta.

*Dados do Cliente:*
*Nome:* ${formData.nome}
*Telefone:* ${formData.telefone}
*E-mail:* ${formData.email}
*Tipo de Consulta:* ${
        formData.tipo === "presencial" ? "Presencial" : "Online / Teleconsulta"
      }

Aguardo confirmação.
      `;

      const mensagemCodificada = encodeURIComponent(mensagem);
      const urlWhatsapp = `https://wa.me/${seuNumeroWhatsapp}?text=${mensagemCodificada}`;

      // 3. Abre o link em uma nova aba e fecha a modal
      window.open(urlWhatsapp, "_blank");
      onClose();
    }, 2000); // Tempo do atraso em milissegundos
  };

  return (
    <div className="custom-modal-backdrop">
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content custom-modal-content">
            
          <button className="custom-close-btn" onClick={onClose}>
            &times;
          </button>

          {/* NOVO: Renderização condicional */}
          {isRedirecting ? (
            // Se estiver redirecionando, mostra esta mensagem
            <div className="redirect-container">
              <div className="spinner"></div>{" "}
              {/* <-- SPINNER ADICIONADO AQUI */}
              <h2 className="custom-modal-title">
                Aguarde um momento...
              </h2>
              <p>
                Estamos te redirecionando para o WhatsApp.
              </p>
            </div>
          ) : (
            // Caso contrário, mostra o formulário
            <>
            
              <h2 className="custom-modal-title text-center mb-4">
                Preencha os dados abaixo
              </h2>
              <form className="form_camp_client" onSubmit={handleSubmit}>
                <div className="div_name">
                  <label htmlFor="nome" className="form-label">
                    Nome
                  </label>
                  <input
                    type="text"
                    id="nome"
                    name="nome"
                    placeholder="Nome completo"
                    className="d-flex w-100 custom-input"
                    value={formData.nome}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="div_tel">
                  <label htmlFor="telefone" className="form-label">
                    Telefone
                  </label>
                  <input
                    type="tel"
                    id="telefone"
                    name="telefone"
                    className="d-flex w-100 custom-input"
                    placeholder="(21) 99999-9999"
                    value={formData.telefone}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="div_email">
                  <label htmlFor="email" className="form-label">
                    E-mail
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="nome@e-mail.com"
                    className="d-flex w-100 custom-input"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="div_option_consult">
                  <label htmlFor="tipo" className="form-label">
                    Tipo de Consulta
                  </label>
                  <CustomSelect
                    name="tipo"
                    options={tipoConsultaOptions}
                    value={formData.tipo}
                    onChange={handleChange}
                  />
                </div>

                <button type="submit" className="custom-submit-btn">
                  Agendar
                </button>
              </form>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
