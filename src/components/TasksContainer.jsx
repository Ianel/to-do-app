import React, { useContext } from 'react';
import { MainContext } from '../providers/main_provider';
import Task from './Task';

export default function TasksContainer({ heading, finished }) {

    const { tasks } = useContext(MainContext);

    const runningTasks = tasks.filter((task) => task.marked === false);
    const finishedTasks = tasks.filter((task) => task.marked === true);

    const isRunningEmpty = runningTasks.length === 0 ? true : false;
    const isFinishedEmpty = finishedTasks.length === 0 ? true : false;

    return (
        <div className="main-tasks">
            <h1>{heading}</h1>
            <div className="tasks">
                { 

                    !finished ? 
                        isRunningEmpty ?
                            ( <p style={{ margin: "1.5rem auto" }}>No running tasks</p> )
                            :
                            (
                                runningTasks
                                    .map((task) => {
                                        return <Task key={task.id} id={task.id} title={task.message} marked={task.marked} />
                                    })
                            )
                    :
                        isFinishedEmpty ?
                            ( <p style={{ margin: "1.5rem auto" }}>No finished tasks</p> )
                            :
                            (
                                finishedTasks
                                    .map((task) => {
                                        return <Task key={task.id} id={task.id} title={task.message} marked={task.marked} />
                                    })
                            )
                }    
            </div>
        </div>
    )
}
