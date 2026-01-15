import React from "react";
import { Carrito } from "./Carrito";
import "../hojas-de-estilos/CartSidebar.css"; // estilos para el sidebar

const CartSidebar = ({ isOpen, onClose, cart, setCart }) => {
  return (
    <>
      {/* Overlay oscuro */}
      <div
        className={`sidebar-overlay ${isOpen ? "show" : ""}`}
        onClick={onClose}
      ></div>

      {/* Sidebar */}
      <div className={`sidebar ${isOpen ? "open" : ""}`}>
        <button className="sidebar-close" onClick={onClose}>
          ✕
        </button>

        {/* Pasamos el carrito y la función para actualizarlo */}
        <Carrito cart={cart} setCart={setCart} />
      </div>
    </>
  );
};

export default CartSidebar;
