import React from 'react'

import logo from './logo.svg';
import './App.css';
//import GreetingF from './components/pure/greetingF';
import TaskListComponent from './components/container/task_list';
import CompA from './components/container/compA';

function App() {
  return (
    <div className="App">
      <header className='App-header'>
        <img src={logo} className="App-logo" alt="logo" />
        {/* <TaskListComponent /> */}
        <h1>RETO 1</h1>
        <CompA />
        {/* <GreetingF /> */}
      </header>

    </div>
  );
}

export default App;
