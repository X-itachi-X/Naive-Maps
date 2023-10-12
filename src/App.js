import Geocoder from "react-map-gl-geocoder"
import './App.css';

const mapAccess = {
  mapboxApiAccessToken:
    "pk.eyJ1Ijoiam9uc2VuIiwiYSI6IkR6UU9oMDQifQ.dymRIgqv-UV6oz0-HCFx1w"
};

function _suggestionSelect(result, lat, long, text) {
  console.log(result, lat, long, text);
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
            <form>
            <input name="address" placeholder="Address" type="text" />
            <input name="unit" placeholder="Unit number" type="text" />
            <input name="city" placeholder="City" type="text" />
            <input name="state" placeholder="State" type="text" />
            <input name="country" placeholder="Country" type="text" />
            <input name="postcode" placeholder="Postcode" type="text" />
        </form>
            {/* <form autocomplete="on">
              <input className='textBox' type="text" placeholder='Starting Point'></input>
              <br></br>
              <input className='textBox' type="text" placeholder='Destination Point'></input>
              <br></br>
              <input type="submit" value="Submit" class="bn632-hover bn23"></input>
            </form> */}
            
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
