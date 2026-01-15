import React, { useState } from "react";
import "../hojas-de-estilos/Navbar.css";
import { FaShoppingCart, FaSearch, FaUser } from "react-icons/fa";

export const Navbar = ({
  onOpenCart,
  searchTerm,
  setSearchTerm,
  products,
  selectedCategory,
  setSelectedCategory,
  cart
}) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const categories = ["Todo", ...new Set(products.map(p => p.category))];

  // 👇 contar productos en el carrito
  const cartCount = cart.reduce((acc, item) => acc + item.qty, 0);

  return (
    <nav className="navbar">
      <div className="navbar-container">
        {/* Logo */}
        <div className="logo">MI TIENDA</div>

        {/* Buscador */}
        <div className="search-bar">
          <input
            type="text"
            placeholder="Buscar productos..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <button className="search-button">
            <FaSearch />
          </button>
        </div>

        {/* Categorías */}
        <ul className={`nav-links ${menuOpen ? "open" : ""}`}>
          {categories.map(cat => (
            <li key={cat}>
              <button
                className={`categoria-button ${selectedCategory === cat ? "active" : ""}`}
                onClick={() => setSelectedCategory(cat)}
              >
                {cat}
              </button>
            </li>
          ))}
        </ul>

        {/* Iconos */}
        <div className="nav-icons">
          <button className="icon-button">
            <FaUser size={22} />
          </button>

          <button className="icon-button cart-icon" onClick={onOpenCart}>
            <FaShoppingCart size={22} />
            {cartCount > 0 && <span className="cart-badge">{cartCount}</span>}
          </button>
        </div>

        {/* Botón hamburguesa */}
        <div
          className={`menu-toggle ${menuOpen ? "open" : ""}`}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </div>
      </div>
    </nav>
  );
};
