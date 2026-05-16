import { useContext } from "react";
import { CartContext } from "./CartContext";

export default function Navbar() {
  const { cart } = useContext(CartContext);

  return (
    <h2>🛒 Cart Items: {cart.length}</h2>
  );
}