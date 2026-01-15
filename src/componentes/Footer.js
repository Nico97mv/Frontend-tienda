import React from "react";
import "../hojas-de-estilos/Footer.css";

export function Footer() {
  return (
    <footer className="footer">
     

      {/* Créditos */}
      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} Tienda. Todos los derechos reservados.</p>
      </div>
    </footer>
  );
}
