import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { products } from './mock.js';

function App() {
  const [cart, setCart] = useState([]);

  const addToCart = (productId) => {
    const selectedProduct = products.find((product) => product.id === productId);
    if (selectedProduct) {
      setCart([...cart, selectedProduct]);
    }
  };

  return (
    <div className="container mt-4">
      <h1 className="text-center mb-4">Fashion Days - Product List</h1>
      <div className="row">
        <div className="col-md-8">
          <ul className="list-group">
            {products.map((product) => (
              <li key={product.id} className="list-group-item d-flex justify-content-between align-items-center">
                {product.name}
                <span className="badge badge-primary badge-pill">${product.price}</span>
                <button className="btn btn-success ml-2" onClick={() => addToCart(product.id)}>
                  Add to Cart
                </button>
              </li>
            ))}
          </ul>
        </div>
        <div className="col-md-4">
          <h2 className="text-center mb-4">Shopping Cart</h2>
          <ul className="list-group">
            {cart.map((item) => (
              <li key={item.id} className="list-group-item d-flex justify-content-between align-items-center">
                {item.name}
                <span className="badge badge-primary badge-pill">${item.price}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default App;
