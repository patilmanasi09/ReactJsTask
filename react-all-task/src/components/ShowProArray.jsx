const products = [
  { id: 1, name: "Laptop", price: 500 },
  { id: 2, name: "Phone", price: 200 }
];

export default function ProductList() {

  const addToCart = (productName) => {
    console.log(`${productName} added to cart`);
  };

  return (
    <div className="container mt-4">
      {products.map((p) => (
        <div key={p.id} className="card p-3 mb-3">
          <h3>{p.name}</h3>

          <p>${p.price}</p>

          <button
            className="btn btn-primary"
            onClick={() => addToCart(p.name)}
          >
            Add to Cart
          </button>
        </div>
      ))}
    </div>
  );
}