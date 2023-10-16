import React, { useEffect } from 'react';
import mapboxgl from 'mapbox-gl';

import "../App.css"
import 'mapbox-gl/dist/mapbox-gl.css';


function getRandomColor() {
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}


function Map({lat,long}) {
  
  const mapboxToken = 'pk.eyJ1IjoicmF2aXN1bWl0IiwiYSI6ImNsbmxxcWFsNjAyZ24yam4xanI1NDZ1NGoifQ.0meAZoM0gF_dSim2ZxrvJA'; // Replace with your actual token
  console.log(lat,long);
  
  useEffect(() => {
    mapboxgl.accessToken = mapboxToken;

    const map = new mapboxgl.Map({
      container: 'map', // The container ID where the map will be rendered
      style: 'mapbox://styles/ravisumit/clnipt7wy03yf01qu2iljfl8g', // You can choose a different map style
      center: [lat, long], // Centered on New York City
      zoom: 10, // Zoom level
    });

    


   

    map.on('click', (e) => {
      const { lng, lat } = e.lngLat;
      const randomColor = getRandomColor();
      // Create a custom marker element
    
      // Set the marker's position
      new mapboxgl.Marker({color: randomColor})
        .setLngLat([lng, lat])
        .addTo(map);
        console.log(`marker Set on ${lng},${lat}`);
    });
   
    
      
  
  

    return () => {
      map.remove(); // Clean up when the component is unmounted
    };
  }, [lat, long, mapboxToken]);

  return (
    
      <div className='map' id="map" style={{ width: '90%', height: '50vh' }} />
    
  
  );
};

export default Map;
