import './App.css';
import Events from './components/Events';
import FirstComponent from './components/FirstComponent';
import TemplateExpressions from './components/TemplateExpresions';
import Challenge from './components/Challenge'; 

function App() {
  return (
    <div className="App">
      <h1>Fundamentos React</h1>
      <FirstComponent />
      <TemplateExpressions />
      <Events />
      <Challenge />
    </div>
  );
}

export default App;
