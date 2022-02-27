import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import TodoApp from './todoApp';
import registerServiceWorker from './registerServiceWorker';

var tasksList = ["task 1", "task 2"];

var tasks = localStorage.getItem('storedTasks');

if(tasks){
    tasksList = JSON.parse(tasks);
}

ReactDOM.render(<TodoApp tasks={tasksList} />,
     document.getElementById('root'));
registerServiceWorker();
