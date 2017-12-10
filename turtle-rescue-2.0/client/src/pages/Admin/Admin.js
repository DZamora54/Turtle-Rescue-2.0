import React from "react";


import TurtleCard from "../../components/TurtleCard/TurtleCard";
import FormModal from "../../components/FormModal/FormModal";
import NavbarAdmin from "../../components/NavbarAdmin/NavbarAdmin";
import Geolocation from "../../components/Geolocation/Geolocation";

export class Admin extends React.Component {
  render() {
    return (
      <div>
        <NavbarAdmin />
        <TurtleCard />
        <Geolocation/>
        <FormModal />
      </div>
    );
  }
}

export default Admin;
