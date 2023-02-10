import './App.css';
import City from './assets/city.jpg'; 

function App() {
  return (
    <div className="App">
      <h1>Seção 03 - Avançando em React</h1>

      <div>
        <img src="/img1.jpg" alt="Paisagem"/>
      </div>

      <div>
        <img src={City} alt="Paisagem"/>
      </div>

    </div>
  );
}

export default App;
