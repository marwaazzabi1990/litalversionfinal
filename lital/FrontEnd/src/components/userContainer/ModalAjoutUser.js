import React, { Component } from "react";
import {
  MDBContainer,
  MDBBtn,
  MDBModal,
  MDBModalBody,
  MDBModalHeader,
  MDBModalFooter,
} from "mdbreact";
import { MDBRow, MDBCol, MDBInput } from "mdbreact";
import { connect } from "react-redux";
import { addUserFromApi } from "../../Action/userActions";

class ModalAjoutUser extends Component {
  state = {
    modal8: false,
    modal9: false,
    first_name: "",
    last_name: "",
    password: "",
    username: "",
    email: "",
    post: "moderateur",
  };
  first_name = (e) => {
    this.setState({ first_name: e.target.value });
  };
  last_name = (e) => {
    this.setState({ last_name: e.target.value });
  };
  email_name = (e) => {
    this.setState({ email: e.target.value });
  };
  password = (e) => {
    this.setState({ password: e.target.value });
  };
  user_name = (e) => {
    this.setState({ username: e.target.value });
  };
  post = (e) => {
    this.setState({ post: e.target.value });
  };

  toggle = (nr) => () => {
    let modalNumber = "modal" + nr;
    this.setState({
      [modalNumber]: !this.state[modalNumber],
    });
  };

  render() {
    return (
      <MDBContainer>
        <div className="btnaddUser mt-3 mb-3">
          <a color="white" onClick={this.toggle(9)}>
            <i class=" fas fa-user-plus" />
            <span> Ajouter modérateur</span>
          </a>
        </div>
        <MDBModal
          isOpen={this.state.modal9}
          toggle={this.toggle(9)}
          fullHeight
          position="top"
        >
          <MDBModalHeader
            className="titlemodalajoutmod"
            toggle={this.toggle(9)}
          >
            Ajouter nouveaux utlisateur
          </MDBModalHeader>
          <MDBModalBody>
            {/*formulaire*/}
            <div>
              <form
                className="needs-validation"
                onSubmit={this.submitHandler}
                noValidate
              >
                <MDBRow>
                  <MDBCol md="4">
                    <MDBInput
                      icon="user"
                      name="fname"
                      onChange={this.first_name}
                      type="text"
                      id="materialFormRegisterNameEx"
                      label="Prenon"
                      outline
                      required
                    >
                      <div className="valid-feedback ml-3 pl-3">
                        Looks good!
                      </div>
                    </MDBInput>
                  </MDBCol>
                  <MDBCol md="4">
                    <MDBInput
                      icon="address-card"
                      name="lname"
                      onChange={this.last_name}
                      type="text"
                      id="materialFormRegisterEmailEx2"
                      label="Nom"
                      outline
                      required
                    >
                      <div className="valid-feedback ml-3 pl-3">
                        Looks good!
                      </div>
                    </MDBInput>
                  </MDBCol>
                  <MDBCol md="4">
                    <MDBInput
                      icon="envelope-open"
                      onChange={this.email_name}
                      type="email"
                      id="materialFormRegisterConfirmEx3"
                      name="email"
                      label="Votre email"
                      outline
                    ></MDBInput>
                  </MDBCol>
                </MDBRow>
                <MDBRow>
                  <MDBCol md="4">
                    <MDBInput
                      icon="user-circle"
                      onChange={this.user_name}
                      type="text"
                      id="materialFormRegisterPasswordEx4"
                      name="user_name"
                      label="Nom utlisateur"
                      outline
                      required
                    >
                      <div className="invalid-feedback ml-3 pl-3">
                        Please provide a valid city.
                      </div>
                      <div className="valid-feedback ml-3 pl-3">
                        Looks good!
                      </div>
                    </MDBInput>
                  </MDBCol>
                  <MDBCol md="4">
                    <MDBInput
                      icon="user-circle"
                      onChange={this.password}
                      type="text"
                      id="materialFormRegisterPasswordEx4"
                      name="password"
                      label="password"
                      outline
                      required
                    >
                      <div className="invalid-feedback ml-3 pl-3">
                        Please provide a valid state.
                      </div>
                      <div className="valid-feedback ml-3 pl-3">
                        Looks good!
                      </div>
                    </MDBInput>
                  </MDBCol>
                </MDBRow>
                <MDBRow>
                  <MDBCol md="4" className="mb-3">
                    <div className="custom-control custom-checkbox pl-3">
                      <input
                        className="custom-control-input"
                        type="checkbox"
                        value="moderateur"
                        id="invalidCheck"
                        required
                      />
                      <label
                        className="custom-control-label"
                        htmlFor="invalidCheck"
                      >
                        Moderateur
                      </label>
                      <div className="invalid-feedback">
                        You must agree before submitting.
                      </div>
                    </div>
                  </MDBCol>
                </MDBRow>
              </form>
            </div>
          </MDBModalBody>
          <MDBModalFooter>
            <MDBBtn color="dark" onClick={this.toggle(9)}>
              Fermer
            </MDBBtn>
            <MDBBtn
              color="dark"
              onClick={() =>
                this.props.addUser({
                  first_name: this.state.first_name,
                  last_name: this.state.last_name,
                  username: this.state.username,
                  email: this.state.email,
                  password: this.state.password,
                  post: this.state.post,
                })
              }
            >
              Ajouter utlisateur
            </MDBBtn>
          </MDBModalFooter>
        </MDBModal>
      </MDBContainer>
    );
  }
}
const mapStateToProps = (state) => ({
  user: state.user,
});

const mapDispatchToProps = (dispatch) => ({
  addUser: (el) => dispatch(addUserFromApi(el)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ModalAjoutUser);
