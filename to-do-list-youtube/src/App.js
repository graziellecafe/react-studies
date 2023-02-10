import React, { useState } from 'react'; 
import "./App.css";

function App() {
  // lista de vários objetos 
  const [tasks, setTasks] = useState([
    {
      id: '1', 
      title: 'Estudar Programação',
      completed: false, 
    }, 
    {
      id: '2', 
      title: 'Ler livros',
      completed: true, 
    }
  ])

  return (
    <>
      <div className="container"></div>

    </>
  );
}

export default App;
