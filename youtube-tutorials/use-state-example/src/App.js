import { useState } from 'react'; 
import './App.css';

function App() {
const [ count, setCount ] = useState(0); 
const [ theme, setTheme ] = useState('dark'); 

const incrementValue = () => {
  setCount((prevState) => prevState + 1); 
}

  return (
    <div className="App">
      <h1>{count}</h1>
      <button onClick={incrementValue}>Increment value!</button>
    </div>
  );
}

export default App;
