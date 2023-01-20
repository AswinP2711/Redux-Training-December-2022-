import { Fragment } from "react";
import { Button, Card, Col, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { DecrementQuantity, IncrementQuantity, RemoveItem } from "./cartAction";

function Cart() {
    const dispatch = useDispatch();
    const cart = useSelector((cart)=>cart.cart)
  return (
    <Fragment>
      <h1>Cart</h1>
      <br />
      <Row xs={1} md={4} className="g-4">
        {cart.map((item) => (
          <Col>
            <Card>
              <Card.Img
                variant="top"
                src={item.image}
                width="50"
                height="150"
              />
              <Card.Body>
                <Card.Title>{item.Name}</Card.Title>
                <Card.Text>Ram : {item.Ram}</Card.Text>
                <Card.Text>Rom : {item.Rom}</Card.Text>
                <Card.Text>Quantity : {item.Quantity}</Card.Text>
                <Card.Text>Amount : {item.Amount}</Card.Text>
                <Card.Title>
                  Total Amount : {item.Amount * item.Quantity}
                </Card.Title>
                <Button
                  variant="danger"
                  onClick={() => {
                    dispatch(RemoveItem(item.id))
                  }}
                >
                  Remove
                </Button>
                <span> </span>
                <Button
                  variant="warning"
                  onClick={() => {
                      dispatch(IncrementQuantity(item.id))
                  }}
                >
                  +
                </Button>
                <span> </span>
                <Button
                  variant="warning"
                  onClick={() => {
                    dispatch(DecrementQuantity(item.id))
                  }}
                >
                  -
                </Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Fragment>
  );
}

export default Cart;
