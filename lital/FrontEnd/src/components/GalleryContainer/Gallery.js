import React, { Component } from "react";
import { connect } from "react-redux";
import { getProductsFromApi } from "../../Action/ProductActions.js";
import { Link } from "react-router-dom";

class Gallery extends Component {
  componentDidMount() {
    this.props.getAllProducts();
  }
  render() {
    return (
      <div>
        <div></div>
        <div className="fl">
          {this.props.products.map((prod) => (
            <div className="cardproduct">
              <img
                className="mb-6"
                src={"http://localhost:2000/" + prod.picture}
                width="150px"
                height="150px"
              />

              <span>
                <small>Réference-</small>
                <strong>{prod.reference}</strong>
              </span>
              <span>{prod.name}</span>
              <span>{prod.quantity}-Piéces</span>
              <span>
                <Link to={`/details/${prod.id}`}> more details</Link>
              </span>
            </div>
          ))}
        </div>
      </div>
    );
  }
}
const mapStateToProps = (state) => ({
  products: state.products,
});

const mapDispatchToProps = (dispatch) => ({
  getAllProducts: () => dispatch(getProductsFromApi()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Gallery);
