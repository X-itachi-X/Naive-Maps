import axios from 'axios';
import './App.css';
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import CityLocation from './components/CityLocation';

function App() {
  const [cityName1, setCityName1] = useState('');
  const [getcityName1, setgetCityName1] = useState('');
  const [cityName2, setCityName2] = useState('');
  const [getcityName2, setgetCityName2] = useState('');
  const [latitude, setLatitude] = useState(null);
  const [longitude, setLongitude] = useState(null);
  const handleCityNameChange1 = (e) => {
    setgetCityName1(longitude);
  }
  const handleCityNameChange2 = (e) => {
    setCityName2(e.target.value);
  }


// Replace 'YOUR_MAPBOX_API_KEY' with your actual Mapbox API key.
const MAPBOX_API_KEY = 'sk.eyJ1IjoicmF2aXN1bWl0IiwiYSI6ImNsbm14Ymk0eTAwZnMyaXAxNmNoZGZocGUifQ.fZcPqWqoZXQhYQ-WmvdU5Q';

async function getCityLocation(cityName) {
  try {
    const response = await axios.get(
      `https://api.mapbox.com/geocoding/v5/mapbox.places/${cityName}.json?access_token=${MAPBOX_API_KEY}`
    );

    if (response.data.features.length > 0) {
      const location = response.data.features[0].center;
      setLatitude(location[1]);
      setLongitude(location[0]);
      
      return { latitude, longitude };
    } else {
      throw new Error('City not found or there was an error.');
    }
  } catch (error) {
    throw error;
  }
}

// Example usage:
const cityName = 'New York'; // Replace with the city name you want to look up.
getCityLocation(cityName)
  .then((location) => {
    console.log('Location:', location);
  })
  .catch((error) => {
    console.error('Error:', error);
  });



  return (
    
    <div className="App">

      <Router>
      <header className="header-parent">
        <div className="header-background">

        </div>
        <div className="header-content">
          <p>Home</p>
        
          <p>content 3</p>
          <p>content 4</p>
        </div>
        
      </header>
      <main className='body-parent'>
        <div className='body-background'></div>

        <div className='body-content'>
          <div className='box'>
            <div className='emptyDiv'></div>
            <form autocomplete="on">
              <input  className='textBox' 
                      type="text"
                      placeholder="Enter city name"
                      value={cityName1}
                      onChange={handleCityNameChange1}>
                      
              </input>
              <p>{getcityName1}</p>
              <br></br>
              <input className='textBox' 
                     ype="text"
                     placeholder="Enter city name"
                     value={cityName2}
                     onChange={handleCityNameChange2}>

              </input>
              <p>{cityName2}</p>
              <br></br>
              <input type="submit" value="Submit" class="bn632-hover bn23"></input>
            </form>
            
            <Link to="/city-location">city</Link>
              <Routes>
                <Route path="/city-location" element={<CityLocation />} />
              </Routes>
            
            
          </div>
        </div>
      </main>
    </Router>
    </div>
  );
}

export default App;
