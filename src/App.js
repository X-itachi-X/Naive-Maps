import './App.css';
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';

function CityLocation(props) {
  const [latitude, setLatitude] = useState(null);
  const [longitude, setLongitude] = useState(null);

  const { cityName } = props;

  // You can make the API call to get the latitude and longitude using the cityName
  // Replace this with your actual API call logic
  // For the sake of this example, we'll just set some dummy values:
  setLatitude(40.7128);
  setLongitude(-74.0060);

  return (
    <div>
      <h2>City Location for {cityName}</h2>
      {latitude !== null && longitude !== null && (
        <div>
          <p>Latitude: {latitude}</p>
          <p>Longitude: {longitude}</p>
        </div>
      )}
    </div>
  );
}


function App() {
  const [cityName, setCityName] = useState('');

  const handleCityNameChange = (e) => {
    setCityName(e.target.value);
  }

  const handleGetLocation = () => {
    // You can call an API or any other logic to fetch location data here.
    // For this example, we'll set the cityName prop and receive location data directly.
  }

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
              <input className='textBox' type="text" placeholder='Starting Point'></input>
              <p>Latitude: {latitude}</p>
              <p>Longitude: {longitude}</p>
              <br></br>
              <input className='textBox' type="text" placeholder='Destination Point'></input>
              <p>Latitude: {latitude}</p>
              <p>Longitude: {longitude}</p>
              <br></br>
              <input type="submit" value="Submit" class="bn632-hover bn23"></input>
            </form>
            <input
          type="text"
          placeholder="Enter city name"
          value={cityName}
          onChange={(e) => setCityName(e.target.value)}
        />
            
            <Link to="/city-location">city</Link>
              <Routes>
                <Route path="/city-location" element={<CityLocation cityName={cityName}/>} />
              </Routes>
            
            
          </div>
        </div>
      </main>
      </Router>
    </div>
  );
}

export default App;
