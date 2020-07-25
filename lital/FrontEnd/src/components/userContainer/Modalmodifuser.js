import React, { Component } from "react";
import { connect } from "react-redux";
import { modifUserFromApi } from "../../Action/userActions";

import {
  MDBContainer,
  MDBBtn,
  MDBModal,
  MDBModalBody,
  MDBModalHeader,
  MDBModalFooter,
} from "mdbreact";

export class UserModalModif extends Component {
  state = {
    id: this.props.el.id,
    first_name: this.props.el.first_name,
    last_name: this.props.el.last_name,
    password: this.props.el.password,
    username: this.props.el.username,
    email: this.props.el.email,
    post: this.props.el.post,
    modal8: false,
    modal9: false,
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
        <MDBBtn outline size="sm" color="dark" onClick={this.toggle(8)}>
          <i class="fas fa-user-edit"></i>
        </MDBBtn>
        <MDBModal
          isOpen={this.state.modal8}
          toggle={this.toggle(8)}
          fullHeight
          position="right"
        >
          <MDBModalHeader className="titlemodaleditmod" toggle={this.toggle(8)}>
            Modifier User
          </MDBModalHeader>
          <MDBModalBody>
            <form className="form-edit-moderateur">
              <input
                className="firstinputmodaleditmod"
                type="text"
                name="title"
                defaultValue={this.props.el.first_name}
                onChange={(e) => this.setState({ first_name: e.target.value })}
              ></input>
              <input
                type="text"
                defaultValue={this.props.el.last_name}
                name="last_name"
                onChange={(e) => this.setState({ last_name: e.target.value })}
              ></input>

              <input
                type="text"
                defaultValue={this.props.el.username}
                name="user_name"
                onChange={(e) => this.setState({ username: e.target.value })}
              ></input>

              <input
                type="text"
                defaultValue={this.props.el.password}
                name="password"
                onChange={(e) => this.setState({ password: e.target.value })}
              ></input>
              <input
                type="text"
                defaultValue={this.props.el.email}
                name="email"
                onChange={(e) => this.setState({ email: e.target.value })}
              ></input>
              <input
                type="text"
                defaultValue={this.props.el.post}
                name="post"
                onChange={(e) => this.setState({ post: e.target.value })}
              ></input>
            </form>
          </MDBModalBody>
          <MDBModalFooter>
            <MDBBtn color="dark" onClick={this.toggle(8)}>
              Fermer
            </MDBBtn>
            <MDBBtn
              color="dark"
              onClick={() =>
                this.props.Modifieruser({
                  id: this.state.id,
                  first_name: this.state.first_name,
                  last_name: this.state.last_name,
                  username: this.state.username,
                  password: this.state.password,
                  email: this.state.email,
                  post: this.state.post,
                })
              }
            >
              Save
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
  Modifieruser: (el) => dispatch(modifUserFromApi(el)),
});

export default connect(mapStateToProps, mapDispatchToProps)(UserModalModif);
