import React from "react";
import "../hojas-de-estilos/Banner.css";

function Banner() {
  return (
    <section className="banner">
      <div className="banner-content">
        <h1 className="banner-title">NUEVA TEMPORADA</h1>
        <p className="banner-subtitle">Descubrí lo último en moda y accesorios</p>
        <button className="banner-button">COMPRAR AHORA</button>
      </div>
    </section>
  );
}

export default Banner;
