import React from 'react';
import {Link, Redirect} from 'react-router-dom';

import {auth} from '../../firebase';

import {FormBtn, Input} from "../Form"
export class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      redirectToReferrer: false,
      showErrors: false
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit = (event) => {
    event.preventDefault();
    const target = event.target;
    const value = target.value;
    const name = target.name;

    this.setState({
      [name]: value,
      showErrors: true
    });
    if (this.validateForm()) {
      auth.signInWithEmailAndPassword(this.state.email, this.state.password).then(() => {
        this.setState({redirectToReferrer: true});
      }).catch(err => {console.error(err)});
    }
  }

  validateForm = () => {
    return (
      this.state.email.length > 0 &&
      this.state.password.length > 0
    );
  }

  render() {
    const {from} = this.props.location.state || '/';
    const {redirectToReferrer, showErrors} = this.state;

    return (
      <main>
        {redirectToReferrer && (
          <Redirect to={from || '/report'}/>
        )}
        {from && (
          <p>You must log in to view the page at <code>{from.pathname}</code></p>
        )}
     
            <form onSubmit={this.handleSubmit}>
              <label>
                Email:
              <Input
                name="email"
                type="text"
                value={this.state.email}
                errorText="Email is required"
                showError={showErrors && this.state.email.length <= 0}
                onInputChange={e => this.setState({email: e.target.value})}
              />
              </label>
              <br />
              <label>
              <Input
                name="password"
                type="password"
                value={this.state.password}
                errorText="Password is required"
                showError={showErrors && this.state.password.length <= 0}
                onInputChange={e => this.setState({password: e.target.value})}
                
              />
              </label>
              <FormBtn type="submit">Sign In</FormBtn>
              or <Link to="/register">Create Account</Link>
            </form>
      </main>
    );
  }
}