import React, { Component } from "react";
import {
  MDBBtn,
  MDBModal,
  MDBModalBody,
  MDBModalHeader,
  MDBModalFooter,
} from "mdbreact";
import axios from "axios";
import { MDBRow, MDBCol, MDBInput } from "mdbreact";
import { connect } from "react-redux";
import { AddProductInApi } from "../../Action/ProductActions";
import { addHistoryInApi } from "../../Action/historyActions";
var d = new Date();
class ModalAddProduct extends Component {
  state = {
    Modalopen: false,
    selectedFile: null,
  };

  toggle = () => {
    this.setState({
      Modalopen: !this.state.Modalopen,
    });
  };

  fileSelectedHandler = (event) => {
    this.setState({ selectedFile: event.target.files[0] });
  };
  uploadHandler = () => {
    const fd = new FormData();
    fd.append("file", this.state.selectedFile);

    axios
      .post(" http://localhost:2000/image", fd)
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => console.log(err));
  };
  render() {
    return (
      <div>
        <MDBBtn outline color="black" onClick={() => this.toggle()}>
          Ajouter article
        </MDBBtn>

        <MDBModal
          isOpen={this.state.Modalopen}
          toggle={() => this.toggle()}
          fullHeight
          position="top"
        >
          <MDBModalHeader onClick={() => this.toggle()}>
            Ajouter nouveaux Article
          </MDBModalHeader>
          <MDBModalBody>
            <div>
              <div>
                <MDBRow>
                  <MDBCol md="2">
                    <MDBInput
                      name="fname"
                      type="reference"
                      id="materialFormRegisterNameEx"
                      label="Produit réference"
                      onChange={(e) =>
                        this.setState({ reference: e.target.value })
                      }
                      outline
                      required
                    ></MDBInput>
                  </MDBCol>
                  <MDBCol md="2">
                    <MDBInput
                      name="fname"
                      type="reference"
                      id="materialFormRegisterNameEx"
                      label="Nom"
                      onChange={(e) => this.setState({ name: e.target.value })}
                      outline
                      required
                    ></MDBInput>
                  </MDBCol>
                  <MDBCol md="2">
                    <MDBInput
                      name="fname"
                      type="reference"
                      id="materialFormRegisterNameEx"
                      label="Type"
                      onChange={(e) => this.setState({ type: e.target.value })}
                      outline
                      required
                    ></MDBInput>
                  </MDBCol>
                  <MDBCol md="2">
                    <MDBInput
                      name="lname"
                      type="text"
                      id="materialFormRegisterEmailEx2"
                      onChange={(e) =>
                        this.setState({ collection: e.target.value })
                      }
                      label="collection"
                      outline
                      required
                    ></MDBInput>
                  </MDBCol>
                  <MDBCol md="2">
                    <MDBInput
                      type="email"
                      id="materialFormRegisterConfirmEx3"
                      name="email"
                      onChange={(e) => this.setState({ brand: e.target.value })}
                      label="Marque"
                      outline
                    ></MDBInput>
                  </MDBCol>
                  <MDBCol md="2">
                    <MDBInput
                      type="search"
                      id="materialFormRegisterPasswordEx4"
                      name="password"
                      label="Coleur"
                      onChange={(e) => this.setState({ color: e.target.value })}
                      outline
                      required
                    ></MDBInput>
                  </MDBCol>{" "}
                </MDBRow>
                <MDBRow>
                  <MDBCol md="2">
                    <MDBInput
                      type="text"
                      id="materialFormRegisterPasswordEx4"
                      name="user_name"
                      label="Produit status"
                      onChange={(e) =>
                        this.setState({ product_status: e.target.value })
                      }
                      outline
                      required
                    ></MDBInput>
                  </MDBCol>
                  <MDBCol md="2">
                    <MDBInput
                      type="text"
                      id="materialFormRegisterPasswordEx4"
                      name="password"
                      onChange={(e) =>
                        this.setState({ mesures: e.target.value })
                      }
                      label="Mésures"
                      outline
                      required
                    ></MDBInput>
                  </MDBCol>{" "}
                  <MDBCol md="2">
                    <MDBInput
                      type="text"
                      id="materialFormRegisterPasswordEx4"
                      name="password"
                      label="Localisation"
                      onChange={(e) =>
                        this.setState({ location: e.target.value })
                      }
                      outline
                      required
                    ></MDBInput>
                  </MDBCol>{" "}
                  <MDBCol md="2">
                    <MDBInput
                      type="text"
                      id="materialFormRegisterPasswordEx4"
                      name="password"
                      onChange={(e) => this.setState({ box: e.target.value })}
                      label="Carton"
                      outline
                      required
                    ></MDBInput>
                  </MDBCol>
                  <MDBCol md="2">
                    <MDBInput
                      type="number"
                      id="materialFormRegisterPasswordEx4"
                      name="password"
                      onChange={(e) =>
                        this.setState({ quantity: e.target.value })
                      }
                      label="Quantité"
                      outline
                      required
                    ></MDBInput>
                  </MDBCol>
                </MDBRow>
                <div className="upload_img">
                  {" "}
                  <MDBRow>
                    <MDBCol md="2">
                      <MDBInput
                        className="incss"
                        type="file"
                        id="materialFormRegisterPasswordEx4"
                        onChange={this.fileSelectedHandler}
                        outline
                        required
                      ></MDBInput>
                    </MDBCol>
                    <MDBCol>
                      <MDBBtn
                        className="btncss"
                        color="dark"
                        onClick={this.uploadHandler}
                      >
                        Télécharger image
                      </MDBBtn>
                    </MDBCol>
                  </MDBRow>
                </div>

                <MDBRow>
                  <MDBCol md="">
                    <MDBInput
                      type="search"
                      id="materialFormRegisterPasswordEx4"
                      label="Commentaire"
                      onChange={(e) =>
                        this.setState({ comment: e.target.value })
                      }
                      outline
                      required
                    ></MDBInput>
                  </MDBCol>
                </MDBRow>
              </div>
            </div>
          </MDBModalBody>
          <MDBModalFooter>
            <MDBBtn color="dark" onClick={() => this.toggle()}>
              Close
            </MDBBtn>
            <MDBBtn
              color="dark"
              onClick={() => {
                this.props.Addhistory({
                  action: "Add",
                  date: [d.getFullYear(), d.getMonth() + 1, d.getDate()].join(
                    "-"
                  ),
                  product_reference: this.state.reference,
                  user_id: localStorage.getItem("user_id"),
                });
                this.props.Addproduct({
                  name: this.state.name,
                  reference: this.state.reference,
                  type: this.state.type,
                  collection: this.state.collection,
                  brand: this.state.brand,
                  product_status: this.state.product_status,
                  mesures: this.state.mesures,
                  color: this.state.color,
                  picture: this.state.selectedFile.name,
                  location: this.state.location,
                  box: this.state.box,
                  quantity: this.state.quantity,
                  comment: this.state.comment,
                });
              }}
            >
              Ajouter Article
            </MDBBtn>
          </MDBModalFooter>
        </MDBModal>
      </div>
    );
  }
}
const mapStateToProps = (state) => ({
  user: state.user,
});

const mapDispatchToProps = (dispatch) => ({
  Addproduct: (el) => dispatch(AddProductInApi(el)),
  Addhistory: (element) => dispatch(addHistoryInApi(element)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ModalAddProduct);
