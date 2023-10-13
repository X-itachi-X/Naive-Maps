import React, { useState } from 'react';
import ReactMapGL from 'react-map-gl';

function Map() {
  const [viewport, setViewport] = useState({
    width: '100%',
    height: '100%',
    latitude: 37.7749, // Latitude of your desired location
    longitude: -122.4194, // Longitude of your desired location
    zoom: 10, // Zoom level (adjust as needed)
  });

  return (
    <ReactMapGL
      {...viewport}
      mapboxApiAccessToken="YOUR_MAPBOX_ACCESS_TOKEN"
      onViewportChange={(newViewport) => setViewport(newViewport)}
      mapStyle="mapbox://styles/mapbox/streets-v11" // You can choose a different map style
    />
  );
}

export default Map;
