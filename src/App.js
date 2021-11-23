import React, { useContext } from 'react';
import AddTask from './components/AddTask';
import TasksContainer from './components/TasksContainer';
import { MainContext } from './providers/main_provider';

function App() {

  return (
    <div className="app">
      <h1>To Do App</h1>
      <AddTask />
      <div className="tasks-container">
        <TasksContainer heading="Running Tasks" finished={false} />
        <TasksContainer heading="Tasks Done" finished={true} />
      </div>
    </div>
  );
}

export default App;
