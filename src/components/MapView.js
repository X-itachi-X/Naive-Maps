import React from 'react';
import ReactMapboxGl from 'react-map-gl';
import 'map-gl/dist/map-gl.css';

const Map = ReactMapboxGl({
  accessToken: 'YOUR_MAPBOX_ACCESS_TOKEN',
});

const MapboxMap = () => {
  const mapContainerStyle = {
    height: '400px',
    width: '100%',
  };

  return (
    <div>
      <h1>Mapbox Map</h1>
      <Map
        style="mapbox://styles/mapbox/streets-v11"
        containerStyle={mapContainerStyle} // Use the mapContainerStyle object here
      >
        <div>Custom Map Content</div>
      </Map>
    </div>
  );
};

export default MapboxMap;
