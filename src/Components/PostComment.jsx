import React from 'react';
import { Button, Form, FormGroup, Label, Input, FormText, Container } from "reactstrap";
import Ratings from './Ratings'


class PostComment extends React.Component {
    state = { 
        comment: {
            rate: undefined,
            comment: "",
            asin: ""
        }
     }
    render() { 
        return ( 
        <Container>
            
            <FormGroup>
                <Label for="rate">Rate Book</Label>
                <Input type="select" name="select" id="rate">
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
                </Input>
            </FormGroup>
            
            <FormGroup>
              <Label for="comment">Text Area</Label>
              <Input type="textarea" name="commentBox" id="comment" />
            </FormGroup>
            <FormGroup>
              <Label for="asin">Book ID</Label>
              <Input type="text" name="file" id="asin" />
              
            </FormGroup>
            
            <Button>Post</Button>

        </Container>
         
         );
    }
}
 
export default PostComment;