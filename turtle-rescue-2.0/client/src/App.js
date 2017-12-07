import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Auth from "./components/Auth/Auth";
// import PropTypes from "prop-types";

import Login from "./pages/Login";
import Register from "./pages/Register";
import Map from "./components/Map/Map";
import Navbar from "./components/Navbar/Navbar";
import Directions from "./components/Directions/Directions";
import './App.css';
import FormModal from "./components/FormModal/FormModal";
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
        <Navbar />

          <Route exact path="/" component={Login} />
          <Route exact path="/register" component={Register} />
          <Route exact path="/map" component={Map} />
          <Route exact path="/directions" component={Directions} />
           {/* <MatchWhenAuthorized path="/report" component={ReportForm} />  */}
              <FormModal>{<p> Hello </p>}</FormModal>
            </div>
          </Auth>
        </Router>
      </div>
    );
  }
}

export default App;
