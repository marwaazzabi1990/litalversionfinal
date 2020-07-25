import React from "react";
import { connect } from "react-redux";
import Productcontainer from "./ProductContainer/productContainer";
import Gallery from "./GalleryContainer/Gallery";
import Mainheader from "./MainHeader/MainHeader";
import UserContainer from "./userContainer/user";
import { Nav, NavItem, NavLink, Spinner } from "reactstrap";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import HistoryContainer from "./../components/HistoryContainer/HistoryContainer";
import { getProductsFromApi } from "../Action/ProductActions";
import { getUserFromApi } from "../Action/userActions";
import { getAllHistoryFromApi } from "../Action/historyActions";
const post = localStorage.getItem("Post");
class Index extends React.Component {
  state = {
    loading: true,
  };
  componentDidMount() {
    setTimeout(() => {
      this.setState({ loading: false });
    }, 1000);
    this.props.getAllUsers();
    this.props.getAllhistory();
  }

  post() {
    console.log("ici post", post);
  }
  render() {
    const tab = this.props.products;

    return (
      <Router>
        <div>
          <div className="g1">
            <Mainheader />
          </div>
        </div>
        <div className="mainrow">
          <div className="sidebar">
            <Nav vertical>
              <NavItem>
                <Link>
                  <Link to="/product">
                    <NavLink className="navlinksidebar">Produits</NavLink>
                  </Link>
                </Link>
              </NavItem>
              <NavItem>
                <Link>
                  <Link to="/gallery">
                    <NavLink className="navlinksidebar">Gallerie</NavLink>
                  </Link>
                </Link>
              </NavItem>
              <NavItem className={post === "admin" ? null : "disabled"}>
                <Link to="/users">
                  <NavLink className="navlinksidebar">Modérateurs</NavLink>
                </Link>
              </NavItem>
              <NavItem className={post === "admin" ? null : "disabled"}>
                <Link to="/history">
                  <NavLink className="navlinksidebar ">Historique</NavLink>
                </Link>
              </NavItem>
            </Nav>
          </div>
          <div className="switch">
            <Switch>
              <Route exact path="/product">
                {this.state.loading ? (
                  <Spinner className="spinner" color="dark" />
                ) : (
                  <Productcontainer tab={tab} />
                )}
              </Route>
              <Route path="/gallery">
                {this.state.loading ? (
                  <Spinner className="spinner" color="dark" />
                ) : (
                  <Gallery tab={tab} />
                )}
              </Route>
              <Route path="/users">
                {this.state.loading ? (
                  <Spinner className="spinner" color="dark" />
                ) : (
                  <UserContainer />
                )}
              </Route>
              <Route path="/history">
                {this.state.loading ? (
                  <Spinner className="spinner" color="dark" />
                ) : (
                  <HistoryContainer />
                )}
              </Route>
            </Switch>
          </div>
        </div>

        <div className="footer detailsFooter">
          <p>
            Copyright &copy; Simplon Tunis, Made with{" "}
            <i class="fas fa-heart"></i>
          </p>
        </div>
      </Router>
    );
  }
}

const mapStateToProps = (state) => ({
  products: state.products,
  history: state.history,
  user: state.user,
});

const mapDispatchToProps = (dispatch) => ({
  getAllProducts: () => dispatch(getProductsFromApi()),
  getAllUsers: () => dispatch(getUserFromApi()),
  getAllhistory: () => dispatch(getAllHistoryFromApi()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Index);
