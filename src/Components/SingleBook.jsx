import React from 'react';
import { Card, CardBody, CardTitle, CardImg, CardText } from 'reactstrap';
import PostComment from './PostComment'
/* import BookList from './BookList' */


class SingleBook extends React.Component {
    state = { 
        
        listedBook: this.props.stack
     }
    render() { 

            let stack = this.props.theBook

        return ( 
    <div>
        
            <Card>
                <CardImg top width="100%" object src={ stack.img } alt="Book Image" />
                <CardBody>
                <CardTitle>Title: { stack.title }</CardTitle>
                
                <CardText>{ (stack.category).toUpperCase() }</CardText>
                
                </CardBody>
            </Card>
            <PostComment />

        
        
    </div> 
    
    
    );
    
    }
}
 
export default SingleBook;
