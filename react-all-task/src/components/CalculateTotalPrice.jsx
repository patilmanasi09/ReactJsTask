import React, { useReducer } from "react";

const reducer = (state, action) => {
  switch (action.type) {
    case "ADD":
      return [...state, action.payload];

    default:
      return state;
  }
};

export default function CartReducer() {
  const [cart, dispatch] = useReducer(reducer, []);

  // Calculate total price
  const total = cart.reduce((sum, item) => sum + item.price, 0);

  return (
    <div className="container mt-4">

      <button
        className="btn btn-primary me-2"
        onClick={() =>
          dispatch({
            type: "ADD",
            payload: { name: "Phone", price: 200 }
          })
        }
      >
        Add Phone
      </button>

      <button
        className="btn btn-success me-2"
        onClick={() =>
          dispatch({
            type: "ADD",
            payload: { name: "Laptop", price: 500 }
          })
        }
      >
        Add Laptop
      </button>

      <button
        className="btn btn-danger"
        onClick={() => alert(`Total Price: $${total}`)}
      >
        Show Total
      </button>

      <ul className="mt-3">
        {cart.map((item, i) => (
          <li key={i}>
            {item.name} - ${item.price}
          </li>
        ))}
      </ul>
    </div>
  );
}