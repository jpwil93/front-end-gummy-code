import React, { Component } from "react";

import { connect } from "react-redux";
import * as actions from "../../actions";
import { doesNotReject } from "assert";

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
    this.props.setNavbarLinks(this.props.categories, _id =>
      this.props.filterProductsWithCategoryId(_id)
    );

    this.props.fetchShopProducts();

    // set header links
  }

  shouldComponentUpdate(nextProps) {
    if (this.props != nextProps) {
      this.props.setNavbarLinks(nextProps.categories);
    }
    return true;
  }

  render() {
    this.props.setNavbarLinks(this.props.categories);
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
  const { categories } = state.shop;
  return {
    categories
  };
}

Shop = connect(mapStateToProps, actions)(Shop);

export default Shop;
