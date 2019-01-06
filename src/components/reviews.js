import React, { Component } from 'react'

class Reviews extends Component {
  constructor(props) {
    super(props);
    this.state = {
      reviews: []
    }
  }

  componentDidMount() {
  fetch("https://maps.googleapis.com/maps/api/place/details/json?placeid=ChIJN1t_tDeuEmsRUsoyG83frY4&fields=name,rating,formatted_phone_number&key=AIzaSyAygD8KND_lfhKZOORCDsdSzJ4vtHaCzB4",{mode:'cors'})
  .then(response => response.json())
  .then(json => {
    console.log(json);
    this.setState({
      reviews: json
    })
  })
  }
  render() {
    return(
      <div>
        Reviews
      </div>
    )
  }
}

export default Reviews;