import * as React from "react";
import { render } from "react-dom";
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
  const [suggestion, setSuggestion] = React.useState({});
  const [parsed, setParsed] = React.useState({});

  const onSelected = (_, item) => {
    const data = parseReverseGeo(item);
    setParsed(data);
    setSuggestion(item);
  };
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
            <h1>Address autocomplete</h1>
      <Geocoder
        {...mapAccess}
        onSelected={onSelected}
        hideOnSelect={true}
        viewport={{}}
        initialInputValue={"500 Hay"}
        queryParams={queryParams}
      />
      <pre>
        <h3>Extract</h3>
        {JSON.stringify(parsed, null, 2)}
      </pre>
      <pre>
        <h3>Complete response</h3>
        {JSON.stringify(suggestion, null, 2)}
      </pre>
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
