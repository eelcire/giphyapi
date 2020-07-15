import React, { Component } from "react";
import "./App.css";

import Header from "./components/Header";
import Homepage from "./views/Homepage";
import Favorites from "./views/Favorites";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

class App extends Component {
  state = {};

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

export default App;
