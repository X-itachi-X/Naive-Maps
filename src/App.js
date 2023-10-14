import axios from 'axios';
import './App.css';
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import MapView from './components/MapView'; // Import your MapView component here
import FormView from './Form'



function App() {
  

  return (
    
    <div className="App">
 
      <Router>
      <header className="header-parent">
        <div className="header-background">

        </div>
        <div className="header-content">
        
          
          <Link to="/Naive-Maps/form"><p>Home</p></Link>
          <Link to="/Naive-Maps/map"><p>View Map</p></Link>    
              
          
          <p>content 3</p>
        </div>
        
      </header>
      <main className='body-parent'>
        <div className='body-background'></div>

        <div className='body-content'>
          <div className='box'>
            

               
                 <Routes>
                    <Route path="/Naive-Maps/form" element={<FormView />} />
                    <Route path="/Naive-Maps/map" element={<MapView />} />
                </Routes>      
            
        </div>
        </div>
                
      </main>
                
      </Router>  
    </div>
  );
}

export default App;
