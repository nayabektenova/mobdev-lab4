import React, { useState } from 'react';
import './App.css'; 


function App() {
  //part a
  const [tasks] = useState([
    'Do laundry',
    'Go to gym',
    'Walk dog'
  ]);

  return (
    <div className="App">
      <h1>My ToDo List</h1>
      {/*part b*/}
      <ToDoList tasks={tasks} />
    </div>
  );
}

function ToDoList({ tasks }) {
  return (
    <ul>
      {tasks.map((task, index) => (
        <li key={index}>
          {task} {/*render each task*/}
        </li>
      ))}
    </ul>
  );
}

export default App;
