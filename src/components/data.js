import React, { Component, Fragment } from 'react';
import {connect} from "react-redux";

class Data extends Component {
  recommendedData() {
    return this.props.menu.map(item=> {
      return(
        <div key={1} className="menu-item-mobile">
          <img
            className="item-img"
            src={require("../resources/img/testfood.jpg")}
          />
          <div className="item-details">
            <div className="item-title title is-6">{item.name}</div>
            <div className="item-tag">{item.category}</div>
          </div>
        </div>
      );
    }),
    console.log(this.props.menu.name);
  }
  render() {
    
    return(
      <Fragment>
        {this.recommendedData()}
      </Fragment>
    )
  }
}

function mapStateToProps(state){
  return{
    menu: state.menu
  }
}

export default connect(mapStateToProps)(Data);