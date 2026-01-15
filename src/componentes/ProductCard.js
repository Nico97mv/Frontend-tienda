import React from "react";
import "../hojas-de-estilos/ProductCard.css";

export function ProductCard({ title, price, description, image, onAdd }) {
  return (
    <div className="product-card">
      {/* Imagen */}
      <div className="product-image">
        <img src={image} alt={title} />
      </div>

      {/* Contenido */}
      <div className="product-info">
        <h3 className="product-title">{title}</h3>
        <p className="product-description">{description}</p>
        <p className="product-price">${price}</p>

        {/* Botón */}
        <button className="product-button" onClick={onAdd}>
          AGREGAR
        </button>
      </div>
    </div>
  );
}


