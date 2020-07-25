import React from "react";
import { connect } from "react-redux";
import { Button, Modal, ModalBody, CardImg } from "reactstrap";
import { getUserFromApi } from "./../../Action/userActions";
import { Athentificate } from "./../../Action/athentification";
import Equipe from "./equipe.png";

class ModalSignin extends React.Component {
  state = {
    modal: false,
  };
  toggle = () => {
    this.setState({ modal: !this.state.modal });
  };
  componentDidMount() {
    this.props.getAllUsers();
  }

  render() {
    return (
      <div>
        <Button
          color="danger"
          className="connecterModalBtn"
          onClick={this.toggle}
        >
          Connecter
        </Button>
        <Modal
          isOpen={this.state.modal}
          toggle={this.toggle}
          contentClassName="custom-modal-style"
        >
          <ModalBody>
            <div className="img-inputs">
              <div className="img-modal">
                <CardImg
                  src={Equipe}
                  alt="image de l'équipe Lital"
                  className="image-equipe"
                />
              </div>
              <div className="input-modal">
                <p className="p-modal">Entrez votre informations</p>
                <input
                  placeholder="entrez votre Nom"
                  className="input-modal-nom"
                  onChange={(e) => this.setState({ username: e.target.value })}
                />
                <input
                  placeholder="Entrez votre Mot de passe"
                  className="input-modal-MDP"
                  type="password"
                  onChange={(e) => this.setState({ password: e.target.value })}
                />
                <Button
                  onClick={() =>
                    this.props.signin({
                      username: this.state.username,
                      password: this.state.password,
                    })
                  }
                  className="btn-inside-modal"
                >
                  Connecter
                </Button>
              </div>
            </div>
          </ModalBody>
        </Modal>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  users: state.user,
});

const mapDispatchToProps = (dispatch) => ({
  getAllUsers: () => dispatch(getUserFromApi()),
  signin: (userInfo) => dispatch(Athentificate(userInfo)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ModalSignin);
