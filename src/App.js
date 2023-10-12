import Geocoder from "react-map-gl-geocoder"
import './App.css';

const mapAccess = {
  mapboxApiAccessToken:
    "pk.eyJ1Ijoiam9uc2VuIiwiYSI6IkR6UU9oMDQifQ.dymRIgqv-UV6oz0-HCFx1w"
};

const queryParams = {
  country: "au",
  types: "address"
};

function parseReverseGeo(geoData) {
  // debugger;
  let locality, region, country, postcode, returnStr;
  if (geoData.context) {
    geoData.context.forEach((v, i) => {
      if (v.id.indexOf("locality") >= 0) {
        locality = v.text;
      }
      if (v.id.indexOf("postcode") >= 0) {
        postcode = v.text;
      }
      if (v.id.indexOf("region") >= 0) {
        region = v.text;
      }
      if (v.id.indexOf("country") >= 0) {
        country = v.text;
      }
    });
  }
  if (postcode && region && country) {
    returnStr = `${geoData.address} ${
      geoData.text
    }, ${locality} ${region} ${postcode}, ${country}`;
  } else {
    returnStr = geoData.place_name;
  }
  return {
    number: geoData.address,
    address: geoData.text,
    locality,
    region,
    postcode,
    country,
    concat: returnStr,
    complete: geoData.place_name
  };
}

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
