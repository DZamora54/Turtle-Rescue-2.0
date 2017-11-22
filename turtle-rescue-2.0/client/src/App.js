import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Auth from "./components/Auth/Auth";
// import PropTypes from "prop-types";

// import {isAuthenticated} from './firebase';

import Login from './pages/Login';
// import {Register} from './components/Register';
// import {Map} from "./components/Map";
// import {auth, storageKey} from './firebase';

import './App.css';

const App = () =>
  //checking login for local storage
  // state = {
  //   uid: null,
  //   user: null
  // };

  // static childContextTypes = {
  //   uid: PropTypes.string
  // }

  // getChildContext() {
  //   return {uid: this.state.uid};
  // }

  // componentDidMount() {
  //   this.unsubscribe = auth.onAuthStateChanged(user => {
  //     if (user) {
  //       window.localStorage.setItem(storageKey, user.uid);
  //       this.setState({uid: user.uid, user});
  //     } else {
  //       window.localStorage.removeItem(storageKey);
  //       this.setState({uid: null, user: null});
  //     }
  //   });
  // }

  // componentWillUnmount() {
  //   this.unsubscribe();
  // }

  // render() {
  //   return (
      // <div className="App">
      //   <header className="App-header">
      //     <h1 className="App-title">Sea Turtle Rescue</h1>
      //   </header>
      //  <Map />
      // </div>
      <Router>
        <Auth>
        <div className="wrapper">
          
          <Route exact path="/login" component={Login} />
          {/* <Route exact path="/register" component={Register} /> */}
          {/* <Route exact path="/map" component={Map} /> */}
          {/* <MatchWhenAuthorized path="/report" component={ReportForm} /> */}
        </div>
        </Auth>
      </Router>;
//     );
//   }
// }

export default App;

// const MatchWhenAuthorized = ({component: Component, ...rest}) => (
//   <Route {...rest} render={renderProps => (
//     isAuthenticated() ? (
//       <Component {...renderProps} />
//     ) : (
//       <Redirect to={{
//         pathname: '/login',
//         state: {from: renderProps.location}
//       }} />
//     )
//   )}/>
// )

// MatchWhenAuthorized.propTypes = {
//   component: PropTypes.any
// }