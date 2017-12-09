import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Auth from "./components/Auth/Auth";
// import PropTypes from "prop-types";

import Login from "./pages/Login";
import Register from "./pages/Register";
import User from "./pages/User";
import Admin from "./pages/Admin";
import "./App.css";

class App extends Component {
  //checking login for local storage
  // state = {
  //   uid: null,
  //   user: null
  // };

  // static childContextTypes = {
  //   uid: PropTypes.string

  render() {
    return (
      <div className="App">
        <Router>
          <Auth>
            <div className="wrapper">
              <Route exact path="/" component={Login} />
              <Route exact path="/register" component={Register} />
              <Route exact path="/user" component={User} />
              <Route exact path="/admin" component={Admin} />
            </div>
          </Auth>
        </Router>
      </div>
    );
  }
}

export default App;
