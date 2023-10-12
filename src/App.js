import './App.css';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import CityLocation from './components/CityLocation';

const axios = require('axios');

async function getCityLocation(cityName) {
  const apiKey = 'sk.eyJ1IjoicmF2aXN1bWl0IiwiYSI6ImNsbm14Ymk0eTAwZnMyaXAxNmNoZGZocGUifQ.fZcPqWqoZXQhYQ-WmvdU5Q'; // Replace with your Mapbox API key

  try {
    const response = await axios.get(
      `https://api.mapbox.com/geocoding/v5/mapbox.places/${cityName}.json?access_token=${apiKey}`
    );

    if (response.data.features.length > 0) {
      const location = response.data.features[0].center;
      const latitude = location[1];
      const longitude = location[0];
      return { latitude, longitude };
    } else {
      throw new Error('City not found or there was an error.');
    }
  } catch (error) {
    throw new Error('Error:', error);
  }
}

// Example usage:
const cityName = 'New York'; // Replace with the city name you want to look up
getCityLocation(cityName)
  .then((location) => {
    console.log('Latitude:', location.latitude);
    console.log('Longitude:', location.longitude);
  })
  .catch((error) => {
    console.error("error");
  });


function App() {
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
              <input className='textBox' type="text" placeholder='Starting Point'></input>
              <br></br>
              <input className='textBox' type="text" placeholder='Destination Point'></input>
              <br></br>
              <input type="submit" value="Submit" class="bn632-hover bn23"></input>
            </form>
            <Router>
            <Link to="/city-location">city</Link>
              <Routes>
                <Route path="/city-location" element={<CityLocation />} />
              </Routes>
            </Router>
            
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
