import React, { useState, useEffect } from 'react';
import axios from 'axios';

function CityLocation({ cityName }) {
  const [latitude, setLatitude] = useState(null);
  const [longitude, setLongitude] = useState(null);

  useEffect(() => {
    const getCityLocation = async () => {
      const apiKey = 'YOUR_MAPBOX_API_KEY'; // Replace with your Mapbox API key
      try {
        const response = await axios.get(
          `https://api.mapbox.com/geocoding/v5/mapbox.places/${cityName}.json?access_token=${apiKey}`
        );
        if (response.data.features.length > 0) {
          const location = response.data.features[0].center;
          setLatitude(location[1]);
          setLongitude(location[0]);
        }
      } catch (error) {
        console.error('Error:', error);
      }
    };

    if (cityName) {
      getCityLocation();
    }
  }, [cityName]);

  return (
    <div>
      <h1>City Location Finder</h1>
      <p>City Name: {cityName}</p>
      {latitude !== null && longitude !== null && (
        <div>
          <p>Latitude: {latitude}</p>
          <p>Longitude: {longitude}</p>
        </div>
      )}
    </div>
  );
}

export default CityLocation;
