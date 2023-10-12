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

  render() {
    return (
      <div>
        <h1>City Location Finder</h1>
        <input
          type="text"
          placeholder="Enter city name"
          value={this.state.cityName}
          onChange={this.handleChange}
        />
        <button onClick={this.getCityLocation}>Get Location</button>
        {this.state.latitude !== null && this.state.longitude !== null && (
          <div>
            <p>Latitude: {this.state.latitude}</p>
            <p>Longitude: {this.state.longitude}</p>
          </div>
        )}
      </div>
    );
  }
}

export default CityLocation;
