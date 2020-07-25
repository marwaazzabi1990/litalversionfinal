import React from "react";
import logo from "./logo.png";
import "./MainHeader.css";
const username = localStorage.getItem("UserName");
class MainHeader extends React.Component {
  signout() {
    localStorage.clear();
    window.location.pathname = "/";
  }
  render() {
    return (
      <div className="MainHeaderDiv">
        <img src={logo} className="MainHeaderLogo" alt="logo" />
        <div className="signoutbtn">
          <button onClick={this.signout} className=" signoutbtn">
            <div className="signoutdiv">
              <p>Sign out</p>
              <i class="fas fa-sign-out-alt"></i>
            </div>
          </button>
          <div>
            <span>{username}</span>{" "}
          </div>
        </div>
      </div>
    );
  }
}
export default MainHeader;
