import './App.css';
import React, { Component } from 'react';
import axios from 'axios';


class CityLocation extends Component {
  state = {
    cityName: '',
    latitude: null,
    longitude: null,
  };

  handleChange = (e) => {
    this.setState({ cityName: e.target.value });
  };

  getCityLocation = () => {
    const { cityName } = this.state;
    const apiKey = 'YOUR_MAPBOX_API_KEY';

    axios
      .get(`https://api.mapbox.com/geocoding/v5/mapbox.places/${cityName}.json?access_token=${apiKey}`)
      .then((response) => {
        if (response.data.features.length > 0) {
          const location = response.data.features[0].center;
          this.setState({ latitude: location[1], longitude: location[0] });
        } else {
          alert('City not found or there was an error.');
        }
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  };



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
            
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
