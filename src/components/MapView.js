import React, { useEffect } from 'react';
import mapboxgl from 'mapbox-gl';
import "../App.css"


function Map({lat=85.123525,long=25.609324}) {
  
  const mapboxToken = 'pk.eyJ1IjoicmF2aXN1bWl0IiwiYSI6ImNsbmxxcWFsNjAyZ24yam4xanI1NDZ1NGoifQ.0meAZoM0gF_dSim2ZxrvJA'; // Replace with your actual token
  console.log(lat,long);
  useEffect(() => {
    mapboxgl.accessToken = mapboxToken;

    const map = new mapboxgl.Map({
      container: 'map-container', // The container ID where the map will be rendered
      style: 'mapbox://styles/ravisumit/clnipt7wy03yf01qu2iljfl8g', // You can choose a different map style
      center: [lat, long], // Centered on New York City
      zoom: 10, // Zoom level
    });

    return () => {
      map.remove(); // Clean up when the component is unmounted
    };
  }, [lat, long, mapboxToken]);

  return (
    
      <div className='map' id="map-container" style={{ width: '90%', height: '50vh' }} />
    
  
  );
};

export default Map;
