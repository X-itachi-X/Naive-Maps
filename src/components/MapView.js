import React, { useEffect } from 'react';
import mapboxgl from 'mapbox-gl';
import "../App.css"
import 'mapbox-gl/dist/mapbox-gl.css';
import MapboxDirections from 'mapbox/mapbox-gl-directions';

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

    map.addControl(new mapboxgl.NavigationControl());
    const directions = new MapboxDirections({
      accessToken: mapboxgl.accessToken,
      unit: 'metric',
      profile: 'mapbox/driving-traffic', // You can change the profile to 'walking', 'cycling', etc.
    });


    map.addControl(directions, 'top-left');

    // Set origin and destination waypoints programmatically
    directions.setOrigin([-122.4194, 37.7749]); // Example coordinates for San Francisco
    directions.setDestination([-122.4058, 37.7829]);
    
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
