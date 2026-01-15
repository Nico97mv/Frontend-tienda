// import './App.css';
// import { useState, useEffect } from "react";
// import productsData from "./data/products.json";
// import { ProductCard } from './componentes/ProductCard';
// import { Navbar } from './componentes/Navbar';
// import { Footer } from './componentes/Footer';
// import Banner from './componentes/Banner';
// import CartSidebar from './componentes/CartSidebar';
// import WhatsappButton from "./componentes/WhatsappButton";

// function App() {
//   const [products, setProducts] = useState([]);
//   const [cart, setCart] = useState([]);
//   const [isCartOpen, setIsCartOpen] = useState(false);
//   const [searchTerm, setSearchTerm] = useState("");
//   const [selectedCategory, setSelectedCategory] = useState("Todo");

//   useEffect(() => {
//     setProducts(productsData);
//   }, []);

//   const handleAdd = (product) => {
//     const existing = cart.find(item => item.id === product.id);
//     if (existing) {
//       setCart(cart.map(item =>
//         item.id === product.id ? { ...item, qty: item.qty + 1 } : item
//       ));
//     } else {
//       setCart([...cart, { ...product, qty: 1 }]);
//     }
//   };

//   const filteredProducts = products.filter((product) => {
//     const matchesSearch = product.title.toLowerCase().includes(searchTerm.toLowerCase());
//     const matchesCategory = selectedCategory === "Todo" || product.category === selectedCategory;
//     return matchesSearch && matchesCategory;
//   });

//   return (
//     <div className="App">
//       <Navbar 
//         onOpenCart={() => setIsCartOpen(true)} 
//         searchTerm={searchTerm} 
//         setSearchTerm={setSearchTerm} 
//         products={products} 
//         selectedCategory={selectedCategory}
//         setSelectedCategory={setSelectedCategory}
//         cart={cart}   
//       />

//       <Banner />

//       <div className="product-list">
//         {filteredProducts.map((product) => (
//           <ProductCard
//             key={product.id}
//             title={product.title}
//             description={product.description}
//             price={product.price}
//             image={product.image}
//             onAdd={() => handleAdd(product)}
//           />
//         ))}
//       </div>

//       <Footer />

//       <CartSidebar 
//         isOpen={isCartOpen} 
//         onClose={() => setIsCartOpen(false)} 
//         cart={cart} 
//         setCart={setCart}
//       />

//        <WhatsappButton />
//     </div>
//   );
// }

// export default App;

import './App.css';
import { useState, useEffect } from "react";
import productsData from "./data/products.json";
import { ProductCard } from './componentes/ProductCard';
import { Navbar } from './componentes/Navbar';
import { Footer } from './componentes/Footer';
import Banner from './componentes/Banner';
import CartSidebar from './componentes/CartSidebar';
import WhatsappButton from "./componentes/WhatsappButton";

function App() {
  const [products, setProducts] = useState([]);

  // ----------------------------------------
  // 🔥 CARGA AUTOMÁTICA DEL CARRITO DESDE LOCALSTORAGE
  // ----------------------------------------
  const [cart, setCart] = useState(() => {
    const saved = localStorage.getItem("cart");
    return saved ? JSON.parse(saved) : [];
  });

  // ----------------------------------------
  // 🔥 GUARDAR EL CARRITO EN LOCALSTORAGE CUANDO CAMBIA
  // ----------------------------------------
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  const [isCartOpen, setIsCartOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("Todo");

  useEffect(() => {
    setProducts(productsData);
  }, []);

  const handleAdd = (product) => {
    const existing = cart.find(item => item.id === product.id);
    if (existing) {
      setCart(cart.map(item =>
        item.id === product.id ? { ...item, qty: item.qty + 1 } : item
      ));
    } else {
      setCart([...cart, { ...product, qty: 1 }]);
    }
  };

  const filteredProducts = products.filter((product) => {
    const matchesSearch = product.title.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === "Todo" || product.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="App">
      <Navbar 
        onOpenCart={() => setIsCartOpen(true)} 
        searchTerm={searchTerm} 
        setSearchTerm={setSearchTerm} 
        products={products} 
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
        cart={cart}
      />

      <Banner />

      <div className="product-list">
        {filteredProducts.map((product) => (
          <ProductCard
            key={product.id}
            title={product.title}
            description={product.description}
            price={product.price}
            image={product.image}
            onAdd={() => handleAdd(product)}
          />
        ))}
      </div>

      <Footer />

      <CartSidebar 
        isOpen={isCartOpen} 
        onClose={() => setIsCartOpen(false)} 
        cart={cart} 
        setCart={setCart}
      />

       <WhatsappButton />
    </div>
  );
}

export default App;

