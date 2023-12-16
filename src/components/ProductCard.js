import React, { useState } from 'react';
import { Modal, Button } from 'react-bootstrap';

const ProductCard = ({ product, onAddToCart }) => {
  const [showModal, setShowModal] = useState(false);

  const handleShow = () => setShowModal(true);
  const handleClose = () => setShowModal(false);

  return (
    <div className="card mb-3">
      <img src={product.image} className="card-img-top" alt={product.name} />
      <div className="card-body">
        <h5 className="card-title">{product.name}</h5>
        <p className="card-text">{product.description}</p>
        <p className="card-text">${product.price}</p>
        <button className="btn btn-success" onClick={() => onAddToCart(product.id)}>
          Add to Cart
        </button>
        <Button variant="primary" onClick={handleShow}>
          View Details
        </Button>

        <Modal show={showModal} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>{product.name}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <img src={product.image} className="img-fluid" alt={product.name} />
            <p>{product.description}</p>
            <p>Price: ${product.price}</p>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="success" onClick={() => onAddToCart(product.id)}>
              Add to Cart
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    </div>
  );
};

export default ProductCard;
