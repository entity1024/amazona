import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useNavigate, Link } from 'react-router-dom';

export default function CheckoutSteps(props) {
  const navigate = useNavigate();

  const redireccionar = (direccion) => {
    navigate('/' + direccion);
  };

  return (
    <Row className="checkout-steps">
      <Col className={props.step1 ? 'active' : ''}>
        <Link to="/signin" className="enlace" style={{ color: '#333' }}>
          Sign In
        </Link>
      </Col>
      <Col className={props.step2 ? 'active' : ''}>
        <Link to="/shipping" className="enlace" style={{ color: '#333' }}>
          Shipping
        </Link>
      </Col>
      <Col className={props.step3 ? 'active' : ''}>
        <Link to="/payment" className="enlace" style={{ color: '#333' }}>
          Payment
        </Link>
      </Col>
      <Col className={props.step4 ? 'active' : ''}>Place Order</Col>
    </Row>
  );
}
