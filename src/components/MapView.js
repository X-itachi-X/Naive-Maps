import React from 'react';
import ReactMapGL from 'react-map-gl';

const Map = () => {
  const mapboxToken = 'YOUR_MAPBOX_ACCESS_TOKEN';
  const initialViewport = {
    latitude: 40.7128, // Latitude of New York City
    longitude: -74.0060, // Longitude of New York City
    zoom: 10, // Zoom level
  };

  return (
    <ReactMapGL
      {...initialViewport}
      width="100%"
      height="400px"
      mapboxApiAccessToken={mapboxToken}
    />
  );
};

export default Map;
