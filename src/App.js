
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="header-parent">
        <div className="header-background">

        </div>
        <div className="header-content">
          <p>content 1</p>
          <p>content 2</p>
          <p>content 3</p>
          <p>content 4</p>
        </div>
        
      </header>
      <main className='body-parent'>
        <div className='body-background'></div>

        <div className='body-content'>
          <div className='box'>
            <div class="col-12">
              <input class="textbox-12" type="text" placeholder="First Name"></input>
              <span class="focus-border-12"></span>
            </div>
            <br></br>
            <br></br>
            <div class="col-12">
              <input class="textbox-12" type="text" placeholder="Last Name"></input>
              <span class="focus-border-12"></span>
            </div>
            <a href="/"><button class="bn632-hover bn23">Button</button></a>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
