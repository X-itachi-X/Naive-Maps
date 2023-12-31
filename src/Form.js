// HomePage.js
import axios from 'axios';
import React,{ useState } from 'react';
import './App.css';
import MapView from './components/MapView';
import { Link } from 'react-router-dom';

function HomePage() {
  const [cityName1, setCityName1] = useState('');
  const [long1, setlong1] = useState(25.5941);
  const [lat1, setlat1] = useState(85.1376);
  const [cityName2, setCityName2] = useState('');
  const [long2, setlong2] = useState('');
  const [lat2, setlat2] = useState('');
  const [latitude, setLatitude] = useState(null);
  const [longitude, setLongitude] = useState(null);
  const handleCityNameChange1 = (e) => {
    setCityName1(e.target.value);
    setlong1(longitude);
    setlat1(latitude);
  }
  const handleCityNameChange2 = (e) => {
    setCityName2(e.target.value);
  }
  

// Replace 'YOUR_MAPBOX_API_KEY' with your actual Mapbox API key.
const MAPBOX_API_KEY = 'sk.eyJ1IjoicmF2aXN1bWl0IiwiYSI6ImNsbm14Ymk0eTAwZnMyaXAxNmNoZGZocGUifQ.fZcPqWqoZXQhYQ-WmvdU5Q';

 async function getCityLocation(cityName) {
  try {
    const response =  await axios.get(
      `https://api.mapbox.com/geocoding/v5/mapbox.places/${cityName}.json?access_token=${MAPBOX_API_KEY}`
    );

    if (response.data.features.length > 0) {
      const location = response.data.features[0].center;
      setLatitude(location[1]);
      setLongitude(location[0]);
      let Latitude = location[1];
      let Longitude = location[0];
      let arr = [Longitude,Latitude];

      return arr;
    } else {
      throw new Error('City not found or there was an error.');
    }
  } catch (error) {
    throw error;
  }
}

// Example usage:

getCityLocation(cityName1)
  .then((location) => {
    console.log('Start Location:', location);
    setlat1(location[1]);
    setlong1(location[0]);
  })
  .catch((error) => {
    console.error('Error:', error);
  });

  getCityLocation(cityName2)
  .then((location) => {
    console.log('Destination Location:', location);
    setlat2(location[1]);
    setlong2(location[0]);
  })
  .catch((error) => {
    console.error('Error:', error);
  });
  return (
    <div>
      {window.location.pathname === '/Naive-Maps/form' ? (
        <form>
        <input  className='textBox' 
                type="text"
                placeholder="Enter city name"
                value={cityName1}
                onChange={handleCityNameChange1}>
                
        </input>
        <p>{lat1},{long1}</p>
        <input className='textBox' 
               ype="text"
               placeholder="Enter city name"
               value={cityName2}
               onChange={handleCityNameChange2}>

        </input>
        <p>{lat2},{long2}</p>
        <Link to="/Naive-Maps/map"><input type="submit" value="Submit" className="bn632-hover bn23" ></input></Link>
      </form>
      ) : (
        <h2><MapView lat={lat1} long={long1}/></h2>
      )}
    </div>
  );
}

export default HomePage;
