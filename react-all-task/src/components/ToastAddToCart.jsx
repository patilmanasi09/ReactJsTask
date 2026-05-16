import React from 'react'
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const AddToCartConsole = () => {

  const products = [
    { id: 1, name: 'Laptop', price: 10 },
    { id: 2, name: 'Phone', price: 20 },
  ];

  const addToCart = (product) => {
    console.log(`Added ${product.name} $${product.price} to cart`);

    toast.success(`${product.name} added to cart!`);
  };

  return (
    <div className="container mt-4">

      {products.map(product => (
        <div key={product.id} className="card p-3 mb-3">

          <h3>{product.name}</h3>

          <p>Price: ${product.price}</p>

          <button
            className="btn btn-primary"
            onClick={() => addToCart(product)}
          >
            Add to Cart
          </button>

        </div>
      ))}

      <ToastContainer />

    </div>
  )
}

export default AddToCartConsole