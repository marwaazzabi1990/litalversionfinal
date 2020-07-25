import React from "react";
import Index from "./components/index";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import LandingPage from "./components/LandingPage/LandingPage";
import ShowProduct from "./components/GalleryContainer/details";
import { getProductsFromApi } from "./Action/ProductActions";
import { connect } from "react-redux";

class App extends React.Component {
  componentDidMount() {
    this.props.getAllProducts();
  }
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/">
            <LandingPage />
          </Route>
          <Route path="/product">
            <Index />
          </Route>
          <Route path="/users">
            <Index />
          </Route>
          <Route path="/gallery">
            <Index />
          </Route>
          {this.props.products.map((el) => (
            <Route exact path={"/details/" + el.id}>
              <ShowProduct el={el} />
            </Route>
          ))}
          <Route path="/history">
            <Index />
          </Route>
        </Switch>
      </Router>
    );
  }
}
const mapStateToProps = (state) => ({
  products: state.products,
});
const mapDispatchToProps = (dispatch) => ({
  getAllProducts: () => dispatch(getProductsFromApi()),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
