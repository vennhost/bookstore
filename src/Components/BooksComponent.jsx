import React from 'react';
import { Card, 
    CardImg, 
    CardText, 
    CardBody,
    CardTitle, 
    CardSubtitle, 
    Button
    
} from "reactstrap"
import MyBadge from './MyBadge';

class BooksComponent extends React.Component {
    state = {  }
    render() { 
        return ( 
    <div>
        
            <Card onClick={()=> this.props.onTheBook(this.props.stack)}>
                <CardImg top width="100%" object src={ this.props.stack.img } alt="Book Image" />
                <CardBody>
                <CardTitle>{ this.props.stack.title } </CardTitle>
                <CardSubtitle><MyBadge title={ this.props.stack.price }  text="HOT!!!"></MyBadge></CardSubtitle>
                <CardText>{ (this.props.stack.category).toUpperCase() }</CardText>
                <Button>Buy Now</Button>
                </CardBody>
            </Card>
        
    </div>
         );
    }
}
 
export default BooksComponent;