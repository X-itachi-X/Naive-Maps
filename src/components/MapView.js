import React, { useState } from 'react';
import ReactMapGL from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';

function Map() {
  const [viewport, setViewport] = useState({
    width: '100px',
    height: '100px',
    latitude: 37.7749, // Latitude of your desired location
    longitude: -122.4194, // Longitude of your desired location
    zoom: 10, // Zoom level (adjust as needed)
  });

  return (
    <ReactMapGL
      {...viewport}
      mapboxApiAccessToken="sk.eyJ1IjoicmF2aXN1bWl0IiwiYSI6ImNsbm80YXVxcTBkaGsyam9kMThhZnp6eGMifQ.o_6GwvacW6sgzSlW9PLx8w" // Replace with your actual token
      onViewportChange={(newViewport) => setViewport(newViewport)}
      mapStyle="mapbox://styles/ravisumit/clniqg1y600cc01o0fdf77fqt"
       // You can choose a different map style
    />
  );
}

export default Map;
