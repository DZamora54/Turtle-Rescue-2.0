import React from "react";
import { Link } from "react-router-dom";

import TurtleCard from "../../components/TurtleCard/TurtleCard";
import FormModal from "../../components/FormModal/FormModal";

export class User extends React.Component {
  render() {
    return (
      <div>
        <TurtleCard />
        <FormModal />
      </div>
    );
  }
}

export default User;
