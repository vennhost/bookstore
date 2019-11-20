import React from 'react';
import {  Container, Row, Col, Input } from "reactstrap"
import NavComponent from './NavComponent';
import FooterComponent from './FooterComponent';
import JumboComponent from './JumboComponent';
import books from "../data/romance.json";
import BooksComponent from './BooksComponent';
import SingleBook from './SingleBook';


class MainComponent extends React.Component {
    state = { 
        theBook: undefined,
        filterWord: ""
        
     }

        clickBook = (stack) => {
            this.setState({
                theBook: stack
            })
        }

        filterBooks = (e) => {
            this.setState({
                filterWord: e.target.value.toLowerCase()
            })
        }

    render() { 
        let {filterWord, theBook } = this.state
        return ( 
        <Container>
            <NavComponent />
            
            <JumboComponent />

            <Input type="text" placeholder="Search for Books" onChange={this.filterBooks} value={filterWord} className="mb-5" />
            
                <Row className="books-wrap">
                    
                    { books.filter(stack => stack.title.toLowerCase().includes(filterWord))
                           .map((book, index) => 
                            <Col md="4" key={index} >
                           <BooksComponent stack={book} onTheBook={this.clickBook}/>
                           
                            </Col>
                    )}
                    
                </Row>
                
                { this.state.theBook && <SingleBook theBook={theBook}/> }
            <Row>
            <FooterComponent />
            </Row>
        </Container>
         );
    }
}
 
export default MainComponent;