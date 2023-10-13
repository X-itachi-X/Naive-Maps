import React, { useEffect } from 'react';
import mapboxgl from 'mapbox-gl';

const Map = () => {
  const mapboxToken = 'sk.eyJ1IjoicmF2aXN1bWl0IiwiYSI6ImNsbm80YXVxcTBkaGsyam9kMThhZnp6eGMifQ.o_6GwvacW6sgzSlW9PLx8w'; // Replace with your actual token

  useEffect(() => {
    mapboxgl.accessToken = mapboxToken;

    const map = new mapboxgl.Map({
      container: 'map-container', // The container ID where the map will be rendered
      style: 'mapbox://styles/ravisumit/clnipt7wy03yf01qu2iljfl8g', // You can choose a different map style
      center: [-74.006, 40.7128], // Centered on New York City
      zoom: 10, // Zoom level
    });

    return () => {
      map.remove(); // Clean up when the component is unmounted
    };
  }, [mapboxToken]);

  return <div id="map-container" style={{ width: '100%', height: '400px' }} />;
};

export default Map;
