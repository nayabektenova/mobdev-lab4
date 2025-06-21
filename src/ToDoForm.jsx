import React, { useState } from 'react';

function ToDoForm({ addTask }) {
  const [taskText, setTaskText] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    addTask(taskText);
    setTaskText('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Add a new task..."
        value={taskText}
        onChange={(e) => setTaskText(e.target.value)}
      />
      <button type="submit">Add Task</button>
    </form>
  );
}

export default ToDoForm;
