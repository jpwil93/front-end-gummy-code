import React, { Component } from "react";

import { connect } from "react-redux";
import * as actions from "../../actions";

class Shop extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  componentDidMount() {
    const headerLinks = [
      {
        _id: 0,
        title: "Login",
        path: "/signin"
      }
    ];
    this.props.setHeaderLinks(headerLinks);
    this.props.fetchShopCategories();

    // fetch shop products action creator
    // set header links
    // set nav bar links
  }

  render() {
    return (
      <div className="shop">
        {/* shop search bar component */}
        {/* product component */}
        {/* cart button */}
      </div>
    );
  }
}
function mapStateToProps(state) {
  return { state };
}

Shop = connect(mapStateToProps, actions)(Shop);

export default Shop;
