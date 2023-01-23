import React, { Fragment, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button, Card, Col, Modal, Row } from "react-bootstrap";
import { ItemAdded } from "../cart/cartAction";

function Product() {
    const dispatch = useDispatch();
  const products = useSelector((products) => products.products);
  const cart = useSelector((cart) => cart.cart);
  console.log(cart);
  const [selectedProduct, setSelectedProduct] = useState([]);
  const [show, setShow] = useState(false);
  
  const handleClose = () => setShow(false);

  const handleShow = () => {
    setShow(true);
  };

  const handleAddToCart = () => {
    setShow(false);
    if (cart.some((item) => item.id === selectedProduct.id)) {
      alert("Item already added in cart!!!");
    } else {
        dispatch(ItemAdded(selectedProduct))
    }
  };

  return (
    <Fragment>
      <br />
      <h1>Mobile Phones</h1>
      <br />
      <Row xs={1} md={4} className="g-4">
        {products.map((product) => (
          <Col>
            <Card>
              <Card.Img
                variant="top"
                src={product.image}
                width="50"
                height="150"
              />
              <Card.Body>
                <Card.Title>{product.Name}</Card.Title>
                <Card.Text>Ram : {product.Ram}</Card.Text>
                <Card.Text>Rom : {product.Rom}</Card.Text>
                <Card.Title>Amount : {product.Amount}</Card.Title>
                <Button
                  variant="primary"
                  onClick={() => {
                    setSelectedProduct(product);
                    handleShow();
                  }}
                >
                  Buy
                </Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Are you sure?</Modal.Title>
        </Modal.Header>
        <Modal.Body>Product Name : {selectedProduct.Name}</Modal.Body>
        <Modal.Body>Amount : {selectedProduct.Amount}</Modal.Body>

        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button
            variant="primary"
            onClick={() => {
              handleAddToCart();
            }}
          >
            Add to Cart
          </Button>
        </Modal.Footer>
      </Modal>
    </Fragment>
  );
}

export default Product;
