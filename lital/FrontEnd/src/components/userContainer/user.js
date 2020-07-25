import React, { Component } from "react";
import { connect } from "react-redux";
import { getUserFromApi, deleteUserToApi } from "../../Action/userActions";
import ModamodifUser from "./Modalmodifuser";
import ModalAjoutUser from "./ModalAjoutUser";
import { MDBBtn } from "mdbreact";
import "./user.css";
export class User extends Component {
  componentDidMount() {
    this.props.getAllUser();
  }

  render() {
    const { user } = this.props;
    return (
      <div>
        <th>
          <ModalAjoutUser />
        </th>
        {
          <table class="table">
            <thead className="headOfTableMod">
              <tr>
                <th scope="col">Nom</th>
                <th scope="col">Prénom </th>
                <th scope="col">Pseudo</th>
                <th scope="col">Mot de passe</th>
                <th scope="col">Adresse e-mail</th>
                <th scope="col">Poste</th>
                <th scope="COL">Action </th>
              </tr>
            </thead>
            <tbody>
              {user.map((el, i) => (
                <tr>
                  <td>
                    <i class=" fas fa-user" />

                    <strong> {el.first_name}</strong>
                  </td>
                  <td>{el.last_name}</td>
                  <td>{el.username}</td>
                  <td>{el.password}</td>
                  <td>{el.email}</td>
                  <td>{el.post}</td>
                  <td className="pos">
                    <ModamodifUser el={el} />
                    <MDBBtn
                      outline
                      color="elegant  "
                      size="sm"
                      onClick={() => this.props.deleteUser(el.id)}
                    >
                      <i class="fas fa-user-times"></i>
                    </MDBBtn>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        }
      </div>
    );
  }
}
const mapStateToProps = (state) => ({
  user: state.user,
});

const mapDispatchToProps = (dispatch) => ({
  getAllUser: () => dispatch(getUserFromApi()),
  deleteUser: (el) => dispatch(deleteUserToApi(el)),
});

export default connect(mapStateToProps, mapDispatchToProps)(User);
