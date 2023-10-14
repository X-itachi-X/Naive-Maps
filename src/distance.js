import React, { useState, useEffect } from 'react';
import mapboxgl from 'mapbox-gl';

function Distance() {
  const [locations, setLocations] = useState([
    {
      name: 'Location 1',
      latitude: -74.0060, // Replace with the first location's longitude
      longitude: 40.7128, // Replace with the first location's latitude
    },
    {
      name: 'Location 2',
      latitude: -118.2437, // Replace with the second location's longitude
      longitude: 34.0522, // Replace with the second location's latitude
    },
  ]);

  const calculateDistance = () => {
    const { latitude: lat1, longitude: lon1 } = locations[0];
    const { latitude: lat2, longitude: lon2 } = locations[1];

    // Haversine formula to calculate distance
    const radius = 6371; // Earth radius in km
    const dLat = (lat2 - lat1) * (Math.PI / 180);
    const dLon = (lon2 - lon1) * (Math.PI / 180);
    const a =
      Math.sin(dLat / 2) * Math.sin(dLat / 2) +
      Math.cos(lat1 * (Math.PI / 180)) *
        Math.cos(lat2 * (Math.PI / 180)) *
        Math.sin(dLon / 2) *
        Math.sin(dLon / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    const distance = radius * c;

    return distance;
  };

  useEffect(() => {
    // Create the map and set it to a container
    mapboxgl.accessToken = 'pk.eyJ1IjoicmF2aXN1bWl0IiwiYSI6ImNsbmxxcWFsNjAyZ24yam4xanI1NDZ1NGoifQ.0meAZoM0gF_dSim2ZxrvJA';
    const map = new mapboxgl.Map({
      container: 'map',
      style: 'mapbox://styles/ravisumit/clnipt7wy03yf01qu2iljfl8g',
      center: [locations[0].longitude, locations[0].latitude], // Use the first location
      zoom: 2, // Adjust the zoom level as needed
    });

    // Create markers for locations
    locations.forEach((location, index) => {
      new mapboxgl.Marker()
        .setLngLat([location.longitude, location.latitude])
        .addTo(map);
    });
  }, [locations]);

  return (
    <div>
      <h1>Distance between {locations[0].name} and {locations[1].name}</h1>
      <p>Distance: {calculateDistance().toFixed(2)} km</p>
      <div id="map" style={{ width: '100%', height: '400px' }}></div>
    </div>
  );
}

export default Distance;
