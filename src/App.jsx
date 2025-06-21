import React, { useState } from 'react';
import './App.css';
import ToDoForm from './ToDoForm.jsx';

function App() {
  const [tasks, setTasks] = useState([
    'Do laundry',
    'Go to gym',
    'Walk dog'
  ]);

  const addTask = (taskText) => {
    if (!taskText.trim()) return;
    setTasks([...tasks, taskText]);
  };

  return (
    <div className="App">
      <h1>My ToDo List</h1>
      <ToDoForm addTask={addTask} />
      <ToDoList tasks={tasks} />
    </div>
  );
}

function ToDoList({ tasks }) {
  return (
    <ul>
      {tasks.map((task, index) => (
        <li key={index}>
          {task}
        </li>
      ))}
    </ul>
  );
}

export default App;
