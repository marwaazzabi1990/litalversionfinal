import React, { Component } from "react";
import { connect } from "react-redux";
import {
  getProductsFromApi,
  EditProductInApi,
} from "../../Action/ProductActions.js";
import Addproduct from "./../Modals/ModalAddProduct";
import { MDBBtn, MDBIcon } from "mdbreact";
import {
  addHistoryInApi,
  getAllHistoryFromApi,
} from "../../Action/historyActions";
import ModalEditProduct from "../Modals/ModalEditProduct";

var newArray = [];
var Types = [];
var Colors = [];

var Brands = [];
var product_status = [];
var Mesures = [];
var Location = [];
var Boxs = [];
var Quantity = [];
var d = new Date();

class Productcontainer extends Component {
  state = {
    element: [],
    id: "",
    name: "",
    picture: "",
    comment: "",
    reference: "",
    type: "",
    collection: "",
    product_status: "",
    brand: "",
    mesures: "",
    color: "",
    location: "",
    box: "",
    quantity: "",
  };

  componentDidMount() {
    this.props.getAllProducts();
    this.props.getallhistory();
    //console.log("tttttttt", this.props.products);
    this.setState({ products: this.props.products });
    // console.log("rrrr", this.state.products);
  }
  close = () => {
    this.setState({ open: !this.state.open });
  };
  distinctDoubleType = () => {
    let ArrayOfTypes = [];
    this.props.products.map((el) => ArrayOfTypes.push(el.type));
    newArray = new Set(ArrayOfTypes);
    Types = [...newArray];
  };
  distinctDoubleColor = () => {
    let ArrayofColors = [];
    this.props.products.map((el) => ArrayofColors.push(el.color));
    newArray = new Set(ArrayofColors);
    Colors = [...newArray];
  };
  distinctDoubleBrand = () => {
    let ArrayofBrand = [];
    this.props.products.map((el) => ArrayofBrand.push(el.brand));
    newArray = new Set(ArrayofBrand);
    Brands = [...newArray];
  };
  distinctDoubleProductStatus = () => {
    let Arrayofproduct_status = [];
    this.props.products.map((el) =>
      Arrayofproduct_status.push(el.product_status)
    );
    newArray = new Set(Arrayofproduct_status);
    product_status = [...newArray];
  };
  distinctDoubleMesures = () => {
    let Arrayofmesures = [];
    this.props.products.map((el) => Arrayofmesures.push(el.mesures));
    newArray = new Set(Arrayofmesures);
    Mesures = [...newArray];
  };
  distinctDoubleLocation = () => {
    let ArrayofLocation = [];
    this.props.products.map((el) => ArrayofLocation.push(el.location));
    newArray = new Set(ArrayofLocation);
    Location = [...newArray];
  };
  distinctDoubleBox = () => {
    let ArrayofBoxs = [];

    this.props.products.map((el) => ArrayofBoxs.push(el.box));
    newArray = new Set(ArrayofBoxs);
    Boxs = [...newArray];
  };
  distinctDoubleQuantity = () => {
    let Arrayofquantity = [];

    this.props.products.map((el) => Arrayofquantity.push(el.quantity));
    newArray = new Set(Arrayofquantity);
    Quantity = [...newArray];
  };

  toggleshow = (el) => {
    this.setState({
      Modalopenshow: !this.state.Modalopenshow,
      prodShow: el,
    });
    console.log(el);
  };
  filterByRef = (e) => {
    let input = e.target.value.toUpperCase();
    this.setState({ reference: input });
    console.log(this.state.reference);
  };
  render() {
    this.distinctDoubleType();
    this.distinctDoubleColor();
    this.distinctDoubleBrand();
    this.distinctDoubleProductStatus();
    this.distinctDoubleMesures();
    this.distinctDoubleLocation();
    this.distinctDoubleBox();
    this.distinctDoubleQuantity();

    return (
      <div>
        <div>
          <div className="filterMod">
            <select
              onChange={(e) => this.setState({ type: e.target.value })}
              name="pets"
              id="product-select"
            >
              <option value="">Type</option>
              {Types.map((el) => (
                <option value={el}>{el}</option>
              ))}
            </select>
            <select
              onChange={(e) => this.setState({ color: e.target.value })}
              name="pets"
              id="color-select"
            >
              <option value="">Couleur</option>
              {Colors.map((el) => (
                <option value={el}>{el}</option>
              ))}
            </select>
            <select
              onChange={(e) => this.setState({ brand: e.target.value })}
              name="pets"
              id="brand-select"
            >
              <option value="">Marque</option>
              {Brands.map((el) => (
                <option value={el}>{el}</option>
              ))}
            </select>
            <select
              onChange={(e) =>
                this.setState({ product_status: e.target.value })
              }
              name="pets"
              id="productStatus-select"
            >
              <option value="">Produit_Status</option>
              {product_status.map((el) => (
                <option value={el}>{el}</option>
              ))}
            </select>
            <select
              onChange={(e) => this.setState({ mesures: e.target.value })}
              name="pets"
              id="Mesure-select"
            >
              <option value="">Mesure</option>
              {Mesures.map((el) => (
                <option value={el}>{el}</option>
              ))}
            </select>
            <select
              onChange={(e) => this.setState({ location: e.target.value })}
              name="pets"
              id="Location-select"
            >
              <option value="">Localisation</option>
              {Location.map((el) => (
                <option value={el}>{el}</option>
              ))}
            </select>
            <select
              onChange={(e) => this.setState({ box: e.target.value })}
              name="pets"
              id="box-select"
            >
              <option value="">Embalage</option>
              {Boxs.map((el) => (
                <option value={el}>{el}</option>
              ))}
            </select>
            <select
              onChange={(e) => this.setState({ quantity: e.target.value })}
              name="pets"
              id="Quantity-select"
            >
              <option value="">Quantité</option>
              {Quantity.map((el) => (
                <option value={el}>{el}</option>
              ))}
            </select>
            <div>
              <Addproduct />
            </div>
          </div>
          <hr></hr>
        </div>
        <div className="flt d-flex">
          <i class="fas fa-search"></i>
          <input
            placeholder="Filtrer par reference ..."
            onChange={(e) => this.filterByRef(e)}
          />
        </div>
        <hr></hr>
        <div>
          {
            <table class="table">
              <thead className="headOfTableMod">
                <tr>
                  <th scope="col">Reference</th>
                  <th scope="col">Nom </th>
                  <th scope="col">Quantité</th>
                  <th scope="col">Couleur</th>
                  <th scope="col">Statut</th>
                  <th scope="col">Marque</th>
                  <th scope="col">Localisation</th>
                  <th scope="col">Mésure</th>
                  <th scope="col">Collections</th>
                  <th scope="col">Embalage</th>
                  <th scope="col">Commentaires</th>
                  <th scope="col">Action </th>
                </tr>
              </thead>
              <tbody>
                {this.props.products
                  .filter((eltype) =>
                    this.state.type === ""
                      ? eltype
                      : eltype.type === this.state.type
                  )
                  .filter((elcolor) =>
                    this.state.color === ""
                      ? elcolor
                      : elcolor.color === this.state.color
                  )
                  .filter((elbrand) =>
                    this.state.brand === ""
                      ? elbrand
                      : elbrand.brand === this.state.brand
                  )

                  .filter((elmesure) =>
                    this.state.mesures === ""
                      ? elmesure
                      : elmesure.mesures === this.state.mesures
                  )
                  .filter((elcollection) =>
                    this.state.collection === ""
                      ? elcollection
                      : elcollection.collection === this.state.collection
                  )
                  .filter((elbrand) =>
                    this.state.brand === ""
                      ? elbrand
                      : elbrand.brand === this.state.brand
                  )
                  .filter((elprductS) =>
                    this.state.product_status === ""
                      ? elprductS
                      : elprductS.product_status === this.state.product_status
                  )
                  .filter((elbox) =>
                    this.state.box === "" ? elbox : elbox.box === this.state.box
                  )
                  .filter((elocation) =>
                    this.state.location === ""
                      ? elocation
                      : elocation.location === this.state.location
                  )
                  .filter((elquantity) =>
                    this.state.quantity === ""
                      ? elquantity
                      : elquantity.quantity === this.state.quantity
                  )
                  .filter((elreference) =>
                    this.state.reference === ""
                      ? elreference
                      : elreference.reference.includes(this.state.reference)
                  )
                  .map((prod) => (
                    <tr>
                      <td>
                        <strong> {prod.reference}</strong>
                      </td>
                      <td>{prod.name}</td>
                      <td>{prod.quantity}</td>
                      <td>{prod.color}</td>
                      <td>{prod.product_status}</td>
                      <td>{prod.brand}</td>
                      <td>{prod.location}</td>
                      <td>{prod.mesures}</td>
                      <td>{prod.collection}</td>
                      <td>{prod.box}</td>
                      <td>{prod.comment}</td>
                      <td className="pos">
                        <div className="groupbtn">
                          <ModalEditProduct prod={prod} />
                          <MDBBtn
                            className="btnEditProduct"
                            onClick={() => {
                              this.props.Addhistory({
                                action: "delete",
                                date: [
                                  d.getFullYear(),
                                  d.getMonth() + 1,
                                  d.getDate(),
                                ].join("-"),
                                product_reference: prod.reference,
                                user_id: localStorage.getItem("UserID"),
                              });
                              this.props.EditProduct(
                                {
                                  reference: prod.reference,
                                  name: prod.name,
                                  type: prod.type,
                                  collection: prod.collection,
                                  color: prod.color,
                                  picture: prod.picture,
                                  quantity: 0,
                                  box: prod.box,
                                  location: prod.location,
                                  mesures: prod.mesures,
                                  product_status: prod.produit_status,
                                  brand: prod.brand,
                                },
                                prod.id
                              );
                            }}
                          >
                            <MDBIcon icon="trash-alt" />
                          </MDBBtn>
                        </div>
                      </td>
                    </tr>
                  ))}
              </tbody>
            </table>
          }
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  products: state.products,
  history: state.history,
});
const mapDispatchToProps = (dispatch) => ({
  getAllProducts: () => dispatch(getProductsFromApi()),
  getallhistory: () => dispatch(getAllHistoryFromApi()),
  EditProduct: (el, id) => dispatch(EditProductInApi(el, id)),
  Addhistory: (element) => dispatch(addHistoryInApi(element)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Productcontainer);
