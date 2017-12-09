import React from "react";
import "./TurtleCard.css";
import Map from "../Map/Map";
import Geolocation from "../Geolocation/Geolocation";


const TurtleCard = () => (
  <div className="tcard">
   <Geolocation/>
    <Map />
  </div>
);

export default TurtleCard;
