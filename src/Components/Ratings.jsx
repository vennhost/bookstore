import React from 'react';
import StarRatings from 'react-star-ratings';
 
class Ratings extends React.Component {
  state = { 
    changeRating( newRating, name ) {
      this.setState({
        rating: newRating
      });
   }
  }
  render() { 

    return ( 
      <StarRatings
          rating={this.state.rating}
          starRatedColor="blue"
          changeRating={this.changeRating}
          numberOfStars={5}
          name='rating'
        />
     );
  }

}
 
export default Ratings;