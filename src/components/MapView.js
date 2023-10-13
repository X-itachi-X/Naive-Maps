import React from 'react';
import ReactMapGL from 'react-map-gl';

const Map = () => {
  const mapboxToken = 'sk.eyJ1IjoicmF2aXN1bWl0IiwiYSI6ImNsbm14Ymk0eTAwZnMyaXAxNmNoZGZocGUifQ.fZcPqWqoZXQhYQ-WmvdU5Q';
  const initialViewport = {
    latitude: 40.7128, // Latitude of New York City
    longitude: -74.0060, // Longitude of New York City
    zoom: 10, // Zoom level
  };

  return (
    <ReactMapGL
      {...initialViewport}
      mapboxApiAccessToken='sk.eyJ1IjoicmF2aXN1bWl0IiwiYSI6ImNsbm14Ymk0eTAwZnMyaXAxNmNoZGZocGUifQ.fZcPqWqoZXQhYQ-WmvdU5Q'
      width="100%"
      height="400px"
      
    />
  );
};

export default Map;
