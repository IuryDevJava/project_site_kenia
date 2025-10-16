import React, { useState, useRef, useEffect } from "react";
import "./CustomSelect.css"; // Vamos criar este CSS a seguir

export default function CustomSelect({ options, value, onChange, name }) {
  const [isOpen, setIsOpen] = useState(false);
  const wrapperRef = useRef(null);

  const selectedOption = options.find((option) => option.value === value);

  // Lógica para fechar o dropdown ao clicar fora dele
  useEffect(() => {
    function handleClickOutside(event) {
      if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [wrapperRef]);

  const handleOptionClick = (optionValue) => {
    // Simulamos o objeto 'event' que a sua função handleChange espera
    onChange({ target: { name, value: optionValue } });
    setIsOpen(false);
  };

  return (
    <div className="custom-select-wrapper" ref={wrapperRef}>
      <div className="custom-select-trigger" onClick={() => setIsOpen(!isOpen)}>
        {selectedOption ? selectedOption.label : "Selecione..."}
        <span className={`arrow ${isOpen ? "open" : ""}`}></span>
      </div>
      {isOpen && (
        <div className="custom-select-options">
          {options.map((option) => (
            <div
              key={option.value}
              className={`custom-select-option ${
                option.value === value ? "selected" : ""
              }`}
              onClick={() => handleOptionClick(option.value)}
            >
              {option.label}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}