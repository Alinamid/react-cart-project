import React from "react";
import ProductCard from "../components/ProductCard";
import { products } from "../mock";

const Home = ({ cart, addToCart, emptyCart }) => {
  return (
    <div className="container mt-4">
      <h1 className="text-center mb-4">Fashion Days - Product List</h1>
      <div className="row">
        {products && products.map((product) => (
          <div key={product.id} className="col-md-4">
            <ProductCard product={product} onAddToCart={addToCart} />
          </div>
        ))}
      </div>

      <h2 className="text-center mt-4">Shopping Cart</h2>
      <ul className="list-group">
        {cart && cart.map((item, index) => (
          <li
            key={`${item.id}-${index}`}
            className="list-group-item d-flex justify-content-between align-items-center"
          >
            {item.name}
            <span className="badge badge-primary badge-pill">
              ${item.price}
            </span>
          </li>
        ))}
      </ul>

      <div className="text-center mt-3">
        <button className="btn btn-danger" onClick={emptyCart}>
          Empty Cart
        </button>
      </div>
    </div>
  );
};

export default Home;
