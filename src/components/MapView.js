import React, { useEffect, useState } from "react";
import mapboxgl from "mapbox-gl";

import "../App.css";
import "mapbox-gl/dist/mapbox-gl.css";

function getRandomColor() {
  const letters = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

function Map({ lat1, long1, lat2, long2 }) {
  const mapboxToken =
    "pk.eyJ1IjoicmF2aXN1bWl0IiwiYSI6ImNsbmxxcWFsNjAyZ24yam4xanI1NDZ1NGoifQ.0meAZoM0gF_dSim2ZxrvJA"; // Replace with your actual token
  console.log(lat1, long1);
  const [locations, setLocations] = useState([
    {
      name: 'Location 1',
      latitude: lat1, // Replace with the first location's longitude
      longitude: long1, // Replace with the first location's latitude
    },
    {
      name: 'Location 2',
      latitude: lat2, // Replace with the second location's longitude
      longitude: long2, // Replace with the second location's latitude
    },
  ]);
console.log(locations);
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
    mapboxgl.accessToken = mapboxToken;

    const map = new mapboxgl.Map({
      container: "map", // The container ID where the map will be rendered
      style: "mapbox://styles/ravisumit/clnipt7wy03yf01qu2iljfl8g", // You can choose a different map style
      center: [lat1, long1], // Centered on New York City
      zoom: 10, // Zoom level
    });

    map.on("click", (e) => {
      const { lng, lat } = e.lngLat;
      const randomColor = getRandomColor();
      // Create a custom marker element

      // Set the marker's position
      new mapboxgl.Marker({ color: randomColor })
        .setLngLat([lng, lat])
        .addTo(map);
      console.log(`marker Set on ${lng},${lat}`);
    });
    const colour = ['red','blue'];
    //Create markers for locations
    locations.forEach((location, index) => {
      new mapboxgl.Marker({ color: colour[index] })
        .setLngLat([location.longitude, location.latitude])
        .addTo(map);
    });

    return () => {
      map.remove(); // Clean up when the component is unmounted
    };
  }, [lat1, long1, mapboxToken]);

  return (
    <div>
    <p>Distance: {calculateDistance().toFixed(2)} km</p>
    <div className="map" id="map" style={{ width: "90%", height: "50vh" }} />
    </div>
  );
}

export default Map;
