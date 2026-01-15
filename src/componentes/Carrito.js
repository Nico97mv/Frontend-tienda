// import React from "react";
// import "../hojas-de-estilos/Carrito.css";

// export const Carrito = ({ cart, setCart }) => {

//   const handleRemove = (id) => setCart(cart.filter((item) => item.id !== id));
//   const handleClear = () => setCart([]);
//   const handleIncrease = (id) =>
//     setCart(cart.map(item => item.id === id ? { ...item, qty: item.qty + 1 } : item));
//   const handleDecrease = (id) =>
//     setCart(cart.map(item => item.id === id && item.qty > 1 ? { ...item, qty: item.qty - 1 } : item));

//   const total = cart.reduce((acc, item) => acc + item.price * item.qty, 0);

//   return (
//     <div className="cart-container">
//       <h2 className="cart-title">🛒 Tu Carrito</h2>

//       {cart.length === 0 ? (
//         <p className="cart-empty">Tu carrito está vacío</p>
//       ) : (
//         <>
//           <ul className="cart-list">
//             {cart.map((item) => (
//               <li key={item.id} className="cart-item">
//                 <img src={item.image} alt={item.title} className="cart-img" />

//                 <div className="cart-info">
//                   <h3 className="cart-product-title">{item.title}</h3>
//                   <p className="cart-product-description">{item.description}</p>
//                   <p className="cart-product-price">${item.price}</p>

//                   <div className="cart-qty">
//                     <button onClick={() => handleDecrease(item.id)}>-</button>
//                     <span>{item.qty}</span>
//                     <button onClick={() => handleIncrease(item.id)}>+</button>
//                   </div>
//                 </div>

//                 <button className="cart-remove" onClick={() => handleRemove(item.id)}>✕</button>
//               </li>
//             ))}
//           </ul>

//           <div className="cart-footer">
//             <h3>Total: ${total}</h3>
//             <div className="cart-actions">
//               <button className="btn-clear" onClick={handleClear}>Vaciar</button>
//               <button className="btn-pay">Pagar</button>
//             </div>
//           </div>
//         </>
//       )}
//     </div>
//   );
// };



import React from "react";
import "../hojas-de-estilos/Carrito.css";

export const Carrito = ({ cart, setCart }) => {

  const handleRemove = (id) => setCart(cart.filter((item) => item.id !== id));
  const handleClear = () => setCart([]);
  const handleIncrease = (id) =>
    setCart(cart.map(item => item.id === id ? { ...item, qty: item.qty + 1 } : item));
  const handleDecrease = (id) =>
    setCart(cart.map(item => item.id === id && item.qty > 1 ? { ...item, qty: item.qty - 1 } : item));

  const total = cart.reduce((acc, item) => acc + item.price * item.qty, 0);

  // -----------------------------
  //    NUEVA FUNCIÓN PARA PAGAR
  // -----------------------------
  const handlePay = () => {
    if (cart.length === 0) return;

    const itemsText = cart
      .map(
        item =>
          `🛍️ *${item.title}*\nCantidad: ${item.qty}\nSubtotal: $${item.price * item.qty}`
      )
      .join("%0A%0A");

    const totalText = `💰 *Total:* $${total}`;

    const message =
      `¡Hola! Quiero hacer esta compra:%0A%0A${itemsText}%0A%0A${totalText}%0A%0AGracias! 🙌`;

    // Cambiá este número por el tuyo
    const phone = "5491136620316";

    const whatsappURL = `https://wa.me/${phone}?text=${message}`;

    window.open(whatsappURL, "_blank");
  };

  return (
    <div className="cart-container">
      <h2 className="cart-title">🛒 Tu Carrito</h2>

      {cart.length === 0 ? (
        <p className="cart-empty">Tu carrito está vacío</p>
      ) : (
        <>
          <ul className="cart-list">
            {cart.map((item) => (
              <li key={item.id} className="cart-item">
                <img src={item.image} alt={item.title} className="cart-img" />

                <div className="cart-info">
                  <h3 className="cart-product-title">{item.title}</h3>
                  <p className="cart-product-description">{item.description}</p>
                  <p className="cart-product-price">${item.price}</p>

                  <div className="cart-qty">
                    <button onClick={() => handleDecrease(item.id)}>-</button>
                    <span>{item.qty}</span>
                    <button onClick={() => handleIncrease(item.id)}>+</button>
                  </div>
                </div>

                <button className="cart-remove" onClick={() => handleRemove(item.id)}>✕</button>
              </li>
            ))}
          </ul>

          <div className="cart-footer">
            <h3>Total: ${total}</h3>
            <div className="cart-actions">
              <button className="btn-clear" onClick={handleClear}>Vaciar</button>

              {/* Botón Pagar con WhatsApp */}
              <button className="btn-pay" onClick={handlePay}>Pagar</button>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

