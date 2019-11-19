import React from 'react';
import {  Container, Row, Col } from "reactstrap"
import NavComponent from './NavComponent';
import FooterComponent from './FooterComponent';
import JumboComponent from './JumboComponent';
import books from "../data/romance.json";
import BooksComponent from './BooksComponent';

class MainComponent extends React.Component {
    state = {  }
    render() { 
        return ( 
        <Container>
            <NavComponent />
            
            <JumboComponent />
            
                <Row>
                    <Col sm="6" md="3">
                        { books.map((book, index) => 
                            <BooksComponent stack={book} key={index} />)}
                    </Col>
                </Row>
            <Row>
            <FooterComponent />
            </Row>
        </Container>
         );
    }
}
 
export default MainComponent;