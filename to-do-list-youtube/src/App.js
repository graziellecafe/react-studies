import React, { useState } from 'react'; 
import "./App.css";
import Tasks from './components/Tasks'; 

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
    },
  ])

  return (
    <>
      <div className="container">
        <Tasks tasks={tasks} />
      </div>
    </>
  );
}

export default App;
