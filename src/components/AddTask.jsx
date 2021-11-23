import React, { useContext, useState } from 'react';
import { MainContext } from '../providers/main_provider';

export default function AddTask() {

    const [task, setTask] = useState("");
    const { tasks, setTasks } = useContext(MainContext);

    const addTask = (id) => {
        let newTask = { id: id, message: task, marked: false };
        let tmpTask = [ ...tasks, newTask ];
        setTasks(tmpTask);
    };

    return (
        <div className="add-task">
            <input 
                type="text" 
                name="task" 
                placeholder="Enter a task"
                value={task}
                onChange={(e) => setTask(e.target.value)}
            />
            <button onClick={(e) => { 
                e.preventDefault();
                addTask(Date.now());
                setTask('');
            }}>Add Task</button>
        </div>
    )
}
