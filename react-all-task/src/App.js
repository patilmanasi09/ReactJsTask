import { useState } from "react";
import { CartContext } from "./CartContext";
import Navbar from "./Navbar";
import ProductList from "./ProductList";

export default function App() {
  const [cart, setCart] = useState([]);

  return (
    <CartContext.Provider value={{ cart, setCart }}>
      <Navbar />
      <ProductList />
    </CartContext.Provider>
  );
}