import React from 'react';
import { Link }from 'react-router-dom';

import {FormBtn, Input} from "../../components/Form"
import withAuth from "../../components/Auth/withAuth";



export class Register extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      phoneNumber: '',
      userName: '',
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
      this.props.createAndSetUserWithEmailAndPassword(this.state.email, this.state.password).then(() => {
        this.setState({redirestTorRefferer: true});
      }).catch(err=> {console.error(err)});
}
  }
  
  

  validateForm = () => {
    return (
      this.state.email.length > 0 &&
      this.state.password.length > 0 &&
      this.state.phoneNumber.length > 0 &&
      this.state.userName.length > 0
    );
   }

   handleSubmit = e => {
     e.preventDefault();
     this.props.createAndSetUserWithEmailAndPassword(this.state.email, this.state.password).then(() => {
      this.setState({redirectToReferrer: true});
    }).catch(err => {console.error(err)});
   };

  render() {
    console.log(this.props);

    return (
      <div>
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
              <label>
                Phone Number:
              <Input
                name="phoneNumber"
                type="number"
                value={this.state.value}
                errorText="Phone Number is required"
                // showError={showErrors && this.state.password.length <= 0}
                onChange={e => this.setState({phoneNumber: e.target.value})}
              />
              </label>
              <label>
                Name:
              <Input
                name="userName"
                type="text"
                value={this.state.value}
                errorText="Name is required"
                // showError={showErrors && this.state.password.length <= 0}
                onChange={e => this.setState({userName: e.target.value})}
              />
              </label>
              <Link to="/Map"><FormBtn onClick={this.handleSubmit} type="submit">Register</FormBtn></Link>
              or <Link to="/">Back to Login</Link>
            </form>
          </div>
   
    );
  }
}

export default withAuth(Register);