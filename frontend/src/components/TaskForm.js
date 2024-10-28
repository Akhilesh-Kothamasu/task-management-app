import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../App.css';

function TaskForm({ selectedTask, onClear }) {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');

    useEffect(() => {
        if (selectedTask) {
            setTitle(selectedTask.title);
            setDescription(selectedTask.description);
        } else {
            setTitle('');
            setDescription('');
        }
    }, [selectedTask]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const taskData = { title, description };

        if (selectedTask) {
            // Update Task
            await axios.put(`http://localhost:5000/tasks/${selectedTask._id}`, taskData);
            onClear();
        } else {
            // Create New Task
            await axios.post('http://localhost:5000/tasks', taskData);
        }

        setTitle('');
        setDescription('');
    };

    return (
        <form onSubmit={handleSubmit}>
            <h2>{selectedTask ? 'Edit Task' : 'Add New Task'}</h2>
            <input 
                type="text" 
                value={title} 
                onChange={(e) => setTitle(e.target.value)} 
                placeholder="Task Title" 
                required 
            />
            <textarea 
                value={description} 
                onChange={(e) => setDescription(e.target.value)} 
                placeholder="Task Description" 
            />
            <button type="submit">{selectedTask ? 'Update Task' : 'Add Task'}</button>
            {selectedTask && <button onClick={onClear}>Cancel Edit</button>}
        </form>
    );
}

export default TaskForm;
