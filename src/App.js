import axios from 'axios';
import './App.css';
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import MapView from './components/MapView'; // Import your MapView component here
import Home from './App'; // Import your Home component here if you have one


function App() {
  const [cityName1, setCityName1] = useState('');
  const [long1, setlong1] = useState('');
  const [lat1, setlat1] = useState('');
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
    
    <div className="App">

      
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
              <p>{lat1},{long1}</p>
              <br></br>
              <input className='textBox' 
                     ype="text"
                     placeholder="Enter city name"
                     value={cityName2}
                     onChange={handleCityNameChange2}>

              </input>
              <p>{lat2},{long2}</p>
              <br></br>
              <input type="submit" value="Submit" class="bn632-hover bn23"></input>
            </form>
            <Link to="/map">View Map</Link>
            <Router>
              
                <Routes>
                    <Route path="/" exact component={<Home />} />
                    <Route path="/map" exact component={<MapView />} />
                </Routes>
              </Router>
            
            
            
          </div>
        </div>
      </main>
    
    </div>
  );
}

export default App;
