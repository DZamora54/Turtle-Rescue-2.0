import React, { Component } from "react";

let map;
const google = window.google;

const Cape = {
  lat: 41.710675,
  lng: -70.274516
};

const Lighthouse = {
  lat: 41.515359,
  lng: -70.655529
};

  class Map extends Component {
    constructor() {
      super();
      this.panToCape = this.panToCape.bind(this);
    }

    componentDidMount() {
      this.map = new google.maps.Map(this.refs.map, {
        center: Lighthouse,
        zoom: 16
      });
    }

    panToCape() {
      this.map.panTo(Cape);
    }

    render() {
      const mapStyle = {
        width: 500,
        height:300,
        border: "1px solid black"
      };
    
    
    return(
      <div>
        <button onClick={this.panToCape}>Go to Cape</button>
        <div ref="map" style={mapStyle}>I should be a map!</div>
      </div>
    )
  }
}

  export default Map;