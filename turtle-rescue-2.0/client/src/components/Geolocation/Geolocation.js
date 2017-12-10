import React from "react";
import Geolocation from "react-geolocation";



export default () => {
  return (

    <Geolocation
      onSuccess={console.log}
      render={({
        fetchingPosition,
        position: { coords: { latitude, longitude } = {} } = {},
        error,
        getCurrentPosition
      }) =>
        <div>
          <button onClick={getCurrentPosition}>Send Position</button>
          {error &&
            <div>
              {error.message}
            </div>}
        </div>}
    />
  );
};