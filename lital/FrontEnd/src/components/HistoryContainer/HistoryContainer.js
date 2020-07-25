import React, { Component } from "react";
import { connect } from "react-redux";
import { getAllHistoryFromApi } from "../../Action/historyActions";
import { getProductsFromApi } from "../../Action/ProductActions";

import { getUserFromApi } from "../../Action/userActions";
var newArray = [];
var UsersIDS = [];
var date = "";
class HistoryContainer extends Component {
  componentDidMount() {
    this.props.getAllHistory();
    this.props.getallproducts();
    this.props.getAllUsers();
    this.distinctDoubleUserNames();
  }
  state = {
    action: "",
    userjd: "",
    date: "",
  };
  distinctDoubleUserNames = () => {
    let ArrayOfUsernames = [];
    this.props.user.map((el) => ArrayOfUsernames.push(el.id));
    newArray = new Set(ArrayOfUsernames);
    UsersIDS = [...newArray];
    console.log(UsersIDS);
  };
  filterdate = (e) => {
    this.setState({ date: e.toString() });
    console.log(this.state.date);
  };
  render() {
    return (
      <div>
        <select
          className="mt-3 mb-3 ml-3"
          name="pets"
          id="action-select"
          onChange={(e) => this.setState({ action: e.target.value })}
        >
          <option value="">Action</option>
          <option value="Add">Ajout</option>
          <option value="Delete">Suppression</option>
          <option value="Edit">Modification</option>
        </select>
        <select
          name="pets"
          id="UserName-select"
          onChange={(e) => this.setState({ userjd: e.target.value })}
        >
          <option value="">Utilisateur</option>

          {UsersIDS.map((el) =>
            this.props.user
              .filter((f) => f.id === el)
              .map((n) => <option value={el}> {n.first_name}</option>)
          )}
        </select>
        <input type="date" onChange={(e) => this.filterdate(e.target.value)} />
        <table class="table">
          <thead className="headOfTableMod">
            <tr>
              <th scope="col">Nom utilisateur</th>
              <th scope="col">Réference de product</th>
              <th scope="COL">Action </th>
              <th scope="COL">Date </th>
            </tr>
          </thead>
          <tbody>
            {this.props.history
              .filter((action) =>
                this.state.action === ""
                  ? action
                  : action.action === this.state.action
              )
              .filter((userid) =>
                this.state.userjd === ""
                  ? userid
                  : userid.user_id === Number(this.state.userjd)
              )
              .filter((d) =>
                this.state.date === "" ? d : d.date === this.state.date
              )
              .map((el, i) => (
                <tr>
                  <td>
                    <i class=" fas fa-user" />
                    {this.props.user
                      .filter((elm) => elm.id === el.user_id)
                      .map((mp) => mp.username)}
                  </td>
                  <td>{el.product_reference}</td>
                  <td>
                    {el.action === "Add"
                      ? "Ajout"
                      : el.action === "Delete"
                      ? "Suppression"
                      : "Modification"}
                  </td>
                  <td>{el.date}</td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  history: state.history,
  products: state.products,
  user: state.user,
});

const mapDispatchToProps = (dispatch) => ({
  getAllHistory: () => dispatch(getAllHistoryFromApi()),
  getallproducts: () => dispatch(getProductsFromApi()),
  getAllUsers: () => dispatch(getUserFromApi()),
});

export default connect(mapStateToProps, mapDispatchToProps)(HistoryContainer);
