import Paper from "@material-ui/core/Paper";
import IconButton from "@material-ui/core/IconButton";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import MapboxAutocomplete from "react-mapbox-autocomplete";
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
            <Paper
        component="form"
        sx={{
          padding: "2px 4px",
          display: "flex",
          flexDirection: "row",
          alignItems: "center"
        }}
      >
        <IconButton sx={{ p: "10px" }} aria-label="menu">
          <LocationOnIcon />
        </IconButton>
        <MapboxAutocomplete
          publicKey={mapAccess.mapboxApiAccessToken}
          inputClass="form-control search"
          onSuggestionSelect={_suggestionSelect}
          country="us"
          resetSearch={false}
          placeholder="Search Address..."
        />
      </Paper>
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
