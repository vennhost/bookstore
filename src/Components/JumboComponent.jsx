import React from 'react';
import { Jumbotron, Button} from "reactstrap"

class JumboComponent extends React.Component {
    state = {  }
    render() { 
        return ( 
    <div>
      <Jumbotron>
        <h1 className="display-3">Let's Read!</h1>
        <p className="lead">The best place to get all the books you wanted. We have what you think doesn't exist.</p>
        <hr className="my-2" />
        <p>It is electronic, so it is easy to search for books, to read books, and to share book with friends.</p>
        <p className="lead">
          <Button color="primary">Browse Books</Button>
        </p>
      </Jumbotron>
    </div>
         );
    }
}
 
export default JumboComponent;