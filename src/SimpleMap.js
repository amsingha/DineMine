
import React, { useState } from 'react';
import GoogleMapReact from 'google-map-react';
import Marker from './Marker';

const GOOGLE_MAP_API_KEY = 'AIzaSyCzeqra04D0wYBWiutQu3_XIwdCWWDwS8Q';


const SimpleMap = () => {
    const [center, setCenter] = useState({lat: 47.606209, lng: -122.332069 });
    const [zoom, setZoom] = useState(10);

    const getMapOptions = () => {
        return {
          disableDefaultUI: true,
          mapTypeControl: true,
          streetViewControl: true,
          styles: [{ featureType: 'poi', elementType: 'labels', stylers: [{ visibility: 'on' }] }],
        };
      };



    return (
        <div style={{ height: '100vh', width: '100%' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: GOOGLE_MAP_API_KEY }}
          defaultCenter={center}
          defaultZoom={zoom}
          options={getMapOptions} // shows Satellite view options
        >
          <Marker
            lat={47.530102}
            lng={-122.032616}
            name="My Marker"
            color="blue"
          />
          <Marker
            lat={47.606209}
            lng={-122.332069}
            name="My Marker 2"
            color="blue"
          />
        </GoogleMapReact>
      </div>
    );
}

export default SimpleMap;