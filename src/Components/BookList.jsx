import React from 'react';
import {} from 'reactstrap'

class BookList extends React.Component {
    state = {}
    render() { 

        

        return ( 
        <ul>
           
                <li>
                   {this.props.stack.title} 
                </li>
            )}
        </ul>
         );
    }
}
 
export default BookList;