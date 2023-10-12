
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="header-parent">
        <div className="header-background">

        </div>
        <div className="header-content">
          <p>Home</p>
          
        </div>
        
      </header>
      <main className='body-parent'>
        <div className='body-background'></div>

        <div className='body-content'>
          <div className='box'>
            <div className='emptyDiv'></div>
            <input className='textBox' type="text" placeholder='Starting Point'></input>
            <input className='textBox' type="text" placeholder='Destination Point'></input>
            <a href="/"><button class="bn632-hover bn23">Button</button></a>
            
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
