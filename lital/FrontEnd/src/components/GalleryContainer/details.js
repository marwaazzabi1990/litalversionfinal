import React, { Component } from "react";
import { MDBBtn } from "mdbreact";
import { getProductsFromApi } from "../../Action/ProductActions.js";
import { connect } from "react-redux";
import logo from "../MainHeader/logo.png";
let product = "";

class ShowProduct extends Component {
  state = {
    prodact: this.props.el,
  };
  componentDidMount() {
    this.props.getAllProducts();
  }

  render() {
    return (
      <div>
        <div>
          <div>
            <img src={logo} className="MainHeaderLogo" alt="logo" />
          </div>
          <div className="allDetails">
            <h1 className="titlemodalmoreinfo">Détail article</h1>

            <div className="detailsStyle">
              <div>
                <img
                  className="mb-5"
                  width="350px"
                  disabled
                  src={"http://localhost:2000/" + this.props.el.picture}
                />
              </div>
              <div>
                <div>
                  <span className="info">Nom d'article : </span>
                  <span>{this.props.el.name}</span>
                </div>
                <div>
                  <span className="info">Type : </span>
                  <span>{this.props.el.type}</span>
                </div>
                <div>
                  <span className="info">Marque :</span>{" "}
                  <span>{this.props.el.brand}</span>
                </div>
                <div>
                  <span className="info">Collection :</span>{" "}
                  <span>{this.props.el.collection}</span>
                </div>
                <div>
                  <span className="info">Mésure :</span>{" "}
                  <span>{this.props.el.mesures}</span>
                </div>
                <div>
                  <span className="info">Couleur :</span>{" "}
                  <span>{this.props.el.color}</span>
                </div>
                <div>
                  <span className="info">Emplacement :</span>
                  <span>{this.props.el.location}</span>
                </div>
              </div>
              <MDBBtn className="btnEditProduct" onClick={() => window.print()}>
                <i class="fa fa-print" aria-hidden="true"></i>
              </MDBBtn>
            </div>
          </div>
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

export default connect(mapStateToProps, mapDispatchToProps)(ShowProduct);
