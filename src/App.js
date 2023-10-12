import './App.css';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import CityLocation from './components/CityLocation';

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
      <div>
        <h1>My React App</h1>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="./components/CityLocation.js">City Location</Link>
          </li>
        </ul>

        <hr />

        <Route exact path="/" render={() => <div>Home Page</div>} />
        <Route path="./components/CityLocation.js" component={CityLocation} />
      </div>
    </Router>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
