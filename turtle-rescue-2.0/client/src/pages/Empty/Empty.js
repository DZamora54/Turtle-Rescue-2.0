import React from "react";



export class Empty extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userName: 'Bill',
      redirectToReferrer: false,
      showErrors: false
    };

  };



render() {
  console.log(this.userName);

  return (
  <div>
    <h1>This is a empty page {this.state.userName}!</h1>
  </div>
  )
}
};

export default Empty;