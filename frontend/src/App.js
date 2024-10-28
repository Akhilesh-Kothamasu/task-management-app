import React, { useState } from 'react';
import TaskList from './components/TaskList';
import TaskForm from './components/TaskForm';
import  './App.css'

function App() {
    

  const [selectedTask, setSelectedTask] = useState(null);
    
  const handleEdit = (task) => setSelectedTask(task);
  const handleClear = () => setSelectedTask(null);

  return (
      <div className="App">
          <h1>Task Management Application</h1>
          <TaskForm selectedTask={selectedTask} onClear={handleClear} />
          <TaskList onEdit={handleEdit} />
      </div>
  );
}

export default App;
