import React from 'react';
import { Container, Row, Col } from "reactstrap"

class FooterComponent extends React.Component {
    state = {  }
    render() { 
        return ( 
    <Container>
      
      <Row>
        <Col className="bg-dark text-white" xs="6">Contact Us</Col>
        <Col className="bg-dark text-white" xs="6">Connect on Social Media</Col>
      </Row>
      
    </Container>
         );
    }
}
 
export default FooterComponent;