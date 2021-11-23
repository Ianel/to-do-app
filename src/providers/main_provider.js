import React, { createContext, useState } from 'react';

export const MainContext = createContext();

export const MainProvider = ({ children }) => {

    const [tasks, setTasks] = useState([]);
    const [tasksDone, setTasksDone] = useState([]);

    return (
        <MainContext.Provider value={{ tasks, setTasks, tasksDone, setTasksDone }}>
            { children }
        </MainContext.Provider>
    )
}
