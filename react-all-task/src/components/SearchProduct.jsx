import React, { useState } from "react";

export default function ProductSearch() {
  const [search, setSearch] = useState("");

  const products = [
    { id: 1, name: "Laptop" },
    { id: 2, name: "Phone" },
    { id: 3, name: "Tablet" }
  ];

  // Filter products
  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="container mt-4">

      <input
        type="text"
        placeholder="Search..."
        className="form-control mb-3"
        onChange={(e) => setSearch(e.target.value)}
      />

      {filteredProducts.map((product) => (
        <div key={product.id} className="card p-3 mb-2">
          <h4>{product.name}</h4>
        </div>
      ))}

    </div>
  );
}