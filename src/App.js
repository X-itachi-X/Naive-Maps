import './App.css';
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import CityLocation from './components/CityLocation';

function App() {
  const [cityName1, setCityName1,cityName2, setCityName2] = useState('');

  const handleCityNameChange1 = (e) => {
    setCityName1(e.target.value);
  }
  const handleCityNameChange2 = (e) => {
    setCityName2(e.target.value);
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
              <input  className='textBox' 
                      type="text"
                      placeholder="Enter city name"
                      value={cityName1}
                      onChange={handleCityNameChange1}>
                      
              </input>
              <p>{cityName1}</p>
              <br></br>
              <input className='textBox' 
                     ype="text"
                     placeholder="Enter city name"
                     value={cityName1}
                     onChange={handleCityNameChange1}>

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
