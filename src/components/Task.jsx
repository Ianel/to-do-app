import React, { useContext } from 'react';
import { MainContext } from '../providers/main_provider';

export default function Task({ id, title, marked }) {

    const { tasks, setTasks, setTasksDone } = useContext(MainContext);

    const markTaskAsFinished = (_id) => {

        let isFinished = window.confirm("Is this task done ?");

        if (isFinished) {
            let tmpTasks = tasks.map((task) => {
                if (task.id === _id) {
                    task.marked = true;
                }
    
                return task;
            });

            setTasks(tmpTasks);
        }

    };

    const deleteTask = (_id) => {

        let isToDelete = window.confirm("Do you want to delete this task ?");

        if (isToDelete) {
            let tmpTasks = tasks.filter((task) => task.id !== _id);
            setTasks(tmpTasks);
        }

    };

    return (
        <div className="task-container">
            <p className={marked ? "marked" : ""}>{title}</p>
            <div className="btns">
                {marked ? (
                    <button onClick={() => deleteTask(id)}>Delete</button>
                ):
                (
                <>
                    <button onClick={() => markTaskAsFinished(id)}>Mark as finished</button>
                    <button onClick={() => deleteTask(id)}>Delete</button>
                </>
                )}
            </div>
        </div>
    )
}
