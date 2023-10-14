import React, { useEffect } from 'react';
import mapboxgl from 'mapbox-gl';
import "../App.css"
import App from '../App';

function Map() {

  const mapboxToken = 'pk.eyJ1IjoicmF2aXN1bWl0IiwiYSI6ImNsbmxxcWFsNjAyZ24yam4xanI1NDZ1NGoifQ.0meAZoM0gF_dSim2ZxrvJA'; // Replace with your actual token

  useEffect(() => {
    mapboxgl.accessToken = mapboxToken;

    const map = new mapboxgl.Map({
      container: 'map-container', // The container ID where the map will be rendered
      style: 'mapbox://styles/ravisumit/clnipt7wy03yf01qu2iljfl8g', // You can choose a different map style
      center: [App.lat1, App.long1], // Centered on New York City
      zoom: 10, // Zoom level
    });

    return () => {
      map.remove(); // Clean up when the component is unmounted
    };
  }, [mapboxToken]);

  return (
    
      <div className='map' id="map-container" style={{ width: '90%', height: '50vh' }} />
    
  
  );
};

export default Map;
