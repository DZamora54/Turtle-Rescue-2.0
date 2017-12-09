import React from 'react';
import { Link }from 'react-router-dom';

import {FormBtn, Input} from "../../components/Form"
import withAuth from "../../components/Auth/withAuth";
import NavbarUser from "../../components/NavbarUser/NavbarUser";


export class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      redirectToReferrer: false,
      showErrors: false
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  };

  handleChange = (event) => {
    const target = event.target;
    const value = target.value;
    const name = target.name;

    this.setState({
      [name]: value,
      showErrors: true
    });
    if (this.validateForm()) {
      this.props.signInWithEmailAndPassword(this.state.email, this.state.password).then(() => {
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

   handleSubmit = e => {
     e.preventDefault();
     this.props.signInWithEmailAndPassword(this.state.email, this.state.password).then(() => {
      this.setState({redirectToReferrer: true});
    }).catch(err => {console.error(err)});
   };

  render() {
    console.log(this.props);

    return (
      <div>
        <NavbarUser/>

        <form>
          <label>
            Email:
          <Input
            name="email"
            type="text"
            value={this.state.value}
            errorText="Email is required"
            // showError={showErrors && this.state.email.length <= 0}
            onChange={e => this.setState({email: e.target.value})}
          />
          </label>
          <br />
          <label>
            Password:
          <Input
            name="password"
            type="password"
            value={this.state.value}
            errorText="Password is required"
            // showError={showErrors && this.state.password.length <= 0}
            onChange={e => this.setState({password: e.target.value})}
            
          />
          </label>
          <FormBtn onClick={this.handleSubmit} type="submit">Sign In</FormBtn>
          or <Link to="/register">Create Account</Link>
        </form>
      </div>
   
    );
  }
}

export default withAuth(Login);