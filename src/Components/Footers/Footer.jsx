import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Footer() {
  return (
    <Container fluid className='bg-dark text-white text-center py-3'>
      <Row>
        <Col md={4}>
          <h5>Contact Us</h5>
          <p>Email: test@test.com</p>
          <p>Phone: +91 456 7890</p>
        </Col>
        <Col md={4}>
          <h5>Address</h5>
          <p>123 Street, trichy</p>
          <p>Tamilnadu, India</p>
        </Col>
        <Col md={4}>
          <h5>Venue</h5>
          <p>Trichirapalli</p>
          <p>TamilNadu</p>
        </Col>
      </Row>
      <Row>
        <Col>
          <p className='mb-0'>Copyright © 2024. All rights reserved.</p>
        </Col>
      </Row>
    </Container>
  );
}

export default Footer;
