import React from 'react';
import {  Container, Row, Col, Input } from "reactstrap"
import NavComponent from './NavComponent';
import FooterComponent from './FooterComponent';
import JumboComponent from './JumboComponent';
//import books from "../data/romance.json";
import BooksComponent from './BooksComponent';
import SingleBook from './SingleBook'

class MainComponent extends React.Component {
    state = { 
        theBook: undefined,
        filterWord: "", 
        books: []
        
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
        return ( 
        <Container>
            <NavComponent />
            
            <JumboComponent />

            <Input type="text" placeholder="Search for Books" onChange={this.filterBooks} value={this.state.filterWord} className="mb-5" />
            
                <Row className="books-wrap">

                    { this.state.books && this.state.books/* .filter(stack => stack.title.toLowerCase().includes(this.state.filterWord)) */
                            .map((book, index) => 
                            <Col md="4">
                            <BooksComponent stack={book} key={index} onTheBook={this.clickBook}/> 
                            </Col>
                    )}
                    
                </Row>
                
                { this.state.theBook && <SingleBook theBook={this.state.theBook}/> }
            <Row>
            <FooterComponent />
            </Row>
        </Container>
         );
    }

    componentDidMount = async () => {
        let res = await fetch("https://venn-bookstore.herokuapp.com/books")
        let books = await res.json() 

        this.setState({
            books: books
        })
    }

    

}
 
export default MainComponent;