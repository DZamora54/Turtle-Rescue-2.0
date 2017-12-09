import React from "react";

import NavbarAdmin from "../../components/NavbarAdmin/NavbarAdmin";
import Directions from "../../components/Directions/Directions";
import Directions2 from "../../components/Directions/Directions2";

export class Admin extends React.Component {
  render() {
    return (
      <div>
        <NavbarAdmin />
        <Directions />
        <Directions2 />
      </div>
    );
  }
}

export default Admin;
