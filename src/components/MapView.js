import React from 'react';
import ReactMapboxGl from '@react-mapbox/gl';
import 'mapbox-gl/dist/mapbox-gl.css';

const Map = ReactMapboxGl({
  accessToken: 'YOUR_MAPBOX_ACCESS_TOKEN',
});

const MapboxMap = () => {
  return (
    <div>
      <h1>Mapbox Map</h1>
      <Map
        style="mapbox://styles/mapbox/streets-v11"
        containerStyle={mapContainerStyle}
        }
      >
        <div>Custom Map Content</div>
      </Map>
    </div>
  );
};

export default MapboxMap;
