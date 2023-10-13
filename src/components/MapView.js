import React, { useEffect } from 'react';
import mapboxgl from 'mapbox-gl';

const Map = () => {
  const mapboxToken = 'YOUR_MAPBOX_ACCESS_TOKEN'; // Replace with your actual token

  useEffect(() => {
    mapboxgl.accessToken = mapboxToken;

    const map = new mapboxgl.Map({
      container: 'map-container', // The container ID where the map will be rendered
      style: 'mapbox://styles/mapbox/streets-v11', // You can choose a different map style
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
