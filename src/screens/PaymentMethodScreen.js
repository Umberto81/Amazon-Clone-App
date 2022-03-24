import React, { useContext, useEffect, useState } from "react";
import { Button, Form } from "react-bootstrap";
import { Helmet } from "react-helmet-async";
import { Navigate, useNavigate } from "react-router-dom";
import CheckOutSteps from "../components/CheckOutSteps";
import { Store } from "../Store";

export default function PaymentMethodScreen() {
    const {state, dispatch: ctxDispatch } = useContext(Store);
    const navigate = useNavigate();

    const {
        cart: {shippingAddress, paymentMethod},
    } = state;

    const [paymentMethodName, setPaymentMethod] = useState( paymentMethod || 'PayPal');
    
  const submitHandler = (e) => {
    e.preventDefault();
    ctxDispatch({type: 'SAVE_PAYMENT_METHOD', payload: paymentMethodName});
    localStorage.setItem('paymentMethod', paymentMethodName);
    navigate('/placeorder');
  };

  useEffect(() =>{
      if(!shippingAddress.address){
          navigate('/shipping')
      }
  }, [shippingAddress, navigate]);

  return (
    <div>
      <CheckOutSteps step1 step2 step3></CheckOutSteps>
      <div className="container small-container">
        <Helmet>
          <title>Payment Method</title>
        </Helmet>
        <h1 className="mb-3">Payment Method</h1>
        <Form onSubmit={submitHandler}>
          <div className="mb-3">
            <Form.Check
              type="radio"
              id="Paypal"
              label="Paypal"
              value="Paypal"
              checked={paymentMethodName === "Paypal"}
              onChange={(e) => setPaymentMethod(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <Form.Check
              type="radio"
              id="Stripe"
              label="Stripe"
              value="Stripe"
              checked={paymentMethodName === "Stripe"}
              onChange={(e) => setPaymentMethod(e.target.value)}
            />
          </div>
         <div className="mb-3">
             <Button type="submit">Continue</Button>
         </div>
        </Form>
      </div>
    </div>
  );
}
