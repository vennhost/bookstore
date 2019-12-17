import React from 'react';
import { Card, 
    CardImg, 
    CardText, 
    CardBody,
    CardTitle, 
    CardSubtitle, 
    Button
    
} from "reactstrap"

class BooksComponent extends React.Component {
    state = {  }
    render() { 
        return ( 
    <div>
        
            <Card onClick={()=> this.props.onTheBook(this.props.stack)}>
                <CardImg top width="100%" object src={ this.props.stack.img } alt="Book Image" />
                <CardBody>
                <CardTitle>{ this.props.stack.title }</CardTitle>
                <CardSubtitle>${ this.props.stack.price }</CardSubtitle>
                <CardText></CardText>
                <Button>Buy Now</Button>
                </CardBody>
            </Card>
        
    </div>
         );
    }
}
 
export default BooksComponent;