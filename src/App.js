import React, { Component } from "react";
import "./App.css";

import Header from "./components/Header";
import Homepage from "./views/Homepage";
import Favorites from "./views/Favorites";

import { setFavorites } from "./actions";
import { connect } from "react-redux";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

class App extends Component {
  state = {};

  componentDidMount() {
    if (JSON.parse(localStorage.getItem("favoriteGiphysArray"))) {
      this.props.setFavorites(
        JSON.parse(localStorage.getItem("favoriteGiphysArray"))
      );
      console.log(this.props.favoriteGiphys);
    } else {
      localStorage.setItem("favoriteGiphysArray", JSON.stringify([]));
    }
  }

  render() {
    return (
      <div id="body">
        <Router>
          <Header />
          <Switch>
            <Route exact path="/">
              <Homepage />
            </Route>
            <Route path="/favorites">
              <Favorites />
            </Route>
          </Switch>
        </Router>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  favoriteGiphys: state.favorite,
});

export default connect(mapStateToProps, { setFavorites })(App);
