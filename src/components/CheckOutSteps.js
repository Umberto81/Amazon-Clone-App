import React from 'react'
import { Col, Row } from 'react-bootstrap'

export default function CheckOutSteps(props) {
  return (
    <Row className='checkout-steps'>
        <Col className={props.step1 ? 'active' : ''}>Sign In</Col>
        <Col className={props.step2 ? 'active' : ''}>Shipping In</Col>
        <Col className={props.step3 ? 'active' : ''}>Payment In</Col>
        <Col className={props.step4 ? 'active' : ''}>Place Order In</Col>

    </Row>
  )
}
