import React from 'react';
import {} from 'reactstrap'

class BookList extends React.Component {
    state = {  }
    render() { 

        

        return ( 
        <ul>
            {stackList.map((title, y) => 
                <li key={y}>
                    {stackList.title} | {(stackList.category).toSentenceCase}
                </li>
            )}
        </ul>
         );
    }
}
 
export default BookList;