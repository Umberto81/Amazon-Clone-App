import React from "react";
import { Card, Col, Row } from "react-bootstrap";
import { Helmet } from "react-helmet-async";
import CheckOutSteps from "../components/CheckOutSteps";

export default function PlaceOrderSCreen() {
  return (
    <div>
      <CheckOutSteps step1 step2 step3 step4></CheckOutSteps>
      <Helmet>
        <title>Preview Order</title>
      </Helmet>
      <h1 className="my-3">Preview Order</h1>
      <Row>
          <Col> md={8}
          <Card className="mb-3">
<Card.Body>
    <Card.Title>Shipping</Card.Title>
    <Card.Text>
        <strong>Name:</strong>
    </Card.Text>
</Card.Body>
          </Card>
          </Col>
      </Row>
    </div>
  );
}
