import axios from "axios";
import "./App.css";
import React, { useState } from "react";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import MapView from "./components/MapView"; // Import your MapView component here
import DistanceView from "./distance"


function App() {
  const [cityName1, setCityName1] = useState("");
  const [long1, setlong1] = useState(85.1376);
  const [lat1, setlat1] = useState(25.5941);
  const [cityName2, setCityName2] = useState("");
  const [long2, setlong2] = useState(85.1376);
  const [lat2, setlat2] = useState(24.5941);
  const [latitude, setLatitude] = useState(null);
  const [longitude, setLongitude] = useState(null);
  const handleCityNameChange1 = (e) => {
    setCityName1(e.target.value);
    setlong1(longitude);
    setlat1(latitude);
  };
  const handleCityNameChange2 = (e) => {
    setCityName2(e.target.value);
  };

  // Replace 'YOUR_MAPBOX_API_KEY' with your actual Mapbox API key.
  const MAPBOX_API_KEY =
    "pk.eyJ1IjoicmF2aXN1bWl0IiwiYSI6ImNsbmxxcWFsNjAyZ24yam4xanI1NDZ1NGoifQ.0meAZoM0gF_dSim2ZxrvJA";

  async function getCityLocation(cityName) {
    try {
      const response = await axios.get(
        `https://api.mapbox.com/geocoding/v5/mapbox.places/${cityName}.json?access_token=${MAPBOX_API_KEY}`
      );

      if (response.data.features.length > 0) {
        const location = response.data.features[0].center;
        setLatitude(location[1]);
        setLongitude(location[0]);
        let Latitude = location[1];
        let Longitude = location[0];
        let arr = [Longitude, Latitude];

        return arr;
      } else {
        throw new Error("City not found or there was an error.");
      }
    } catch (error) {
      throw error;
    }
  }

  // Example usage:

  getCityLocation(cityName1)
    .then((location) => {
      console.log("Start Location:", location);
      setlat1(location[1]);
      setlong1(location[0]);
    })
    .catch((error) => {
      console.error("Error:", error);
    });

  getCityLocation(cityName2)
    .then((location) => {
      console.log("Destination Location:", location);
      setlat2(location[1]);
      setlong2(location[0]);
    })
    .catch((error) => {
      console.error("Error:", error);
    });

  return (
    <div className="App">
      <Router>
        <header className="header-parent">
          <div className="header-background"></div>
          <div className="header-content">
            <Link to="/Naive-Maps">
              <p>Home</p>
            </Link>
            <Link to="/Naive-Maps/map">
              <p>View Map</p>
            </Link>
            <Link to="/Naive-Maps/distance">
              <p>See Distance</p>
            </Link>

            
          </div>
        </header>
        <main className="body-parent">
          <div className="body-background"></div>

          <div className="body-content">
            <div className="box">
              <div>
              <form>
                    <input
                      className="textBox"
                      type="text"
                      placeholder="Patna"
                      value={cityName1}
                      onChange={handleCityNameChange1}
                    ></input>
                    
                    <input
                      className="textBox"
                      ype="text"
                      placeholder="Jehanabad"
                      value={cityName2}
                      onChange={handleCityNameChange2}
                    ></input>
                
                    <Link to="/Naive-Maps/map">
                      <input
                        type="submit"
                        value="Submit"
                        className="bn632-hover bn23"
                      ></input>
                    </Link>
                  </form>
                 
                
                  <p>{MapView.distance}</p>
                
                <Routes>
                    <Route
                      path="/Naive-Maps/map"
                      element={<MapView lat1={lat1} long1={long1} lat2={lat2} long2={long2} />}
                    />
                    <Route
                      path="/Naive-Maps/distance"
                      element={<DistanceView lat1={lat1} long1={long1} lat2={lat2} long2={long2}/>}
                    />
                  </Routes>
              </div>
            </div>
          </div>
        </main>
      </Router>
    </div>
  );
}

export default App;
