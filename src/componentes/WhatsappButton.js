// src/componentes/WhatsappButton.jsx
import React from "react";
import { FaWhatsapp } from "react-icons/fa";
import "../hojas-de-estilos/WhatsappButton.css";

const WhatsappButton = () => {
  return (
    <a
      href="https://wa.me/5491138690346?text=Hola!%20Estoy%20interesado%20en%20sus%20productos."
      className="whatsapp-button"
      target="_blank"
      rel="noopener noreferrer"
    >
      <FaWhatsapp size={30} />
    </a>
  );
};

export default WhatsappButton;

