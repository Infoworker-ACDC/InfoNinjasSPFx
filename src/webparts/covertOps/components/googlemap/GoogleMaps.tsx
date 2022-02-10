import * as React from "react";
import GoogleMapReact from 'google-map-react';

// const GoogleMapReact = require('google-map-react');
const AnyReactComponent = ({ lat, lng, text }) => <div>{text + lat + lng}</div>;

export const GoogleMap = (): any => {
    let dkdkd = { lat: 59.95, lng: 30.33 }
    return (
        <div style={{ height: '100vh', width: '100%' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: ''}}
          defaultCenter={dkdkd}
          defaultZoom={11}
        >
          <AnyReactComponent
            lat={59.955413}
            lng={30.337844}
            text="My Marker"
          />
        </GoogleMapReact>
      </div>
    );
}