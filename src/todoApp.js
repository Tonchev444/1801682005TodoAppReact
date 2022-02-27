import React, { Component } from 'react';
import { TodoInput } from './components/todoInput';
import { TodoTasks } from './components/todoTasks';

class TodoApp extends Component {
  constructor(props){
    super();
    this.state = {tasks: props.tasks};
    this.updateList = this.updateList.bind(this);
    this.removeTasks = this.removeTasks.bind(this);
    this.editTask = this.editTask.bind(this);
  }

  updateList(text){
    var updatedTasks = this.state.tasks;
    updatedTasks.push(text);
    this.setState({tasks: updatedTasks});
    this.updateLocalStorage(updatedTasks);
  }

  removeTasks(text){
    var updatedTasks = this.state.tasks;
    updatedTasks.splice(updatedTasks.indexOf(text),1);
    this.setState({tasks: updatedTasks});
    this.updateLocalStorage(updatedTasks);
  }
  editTask(text, i){
    var updatedTasks = this.state.tasks;
    updatedTasks.splice(i , 1, text);
    this.setState({tasks: updatedTasks});
    this.updateLocalStorage(updatedTasks);
  }

  updateLocalStorage(updatedTasks){
    localStorage.setItem('storedTasks', JSON.stringify(updatedTasks));
  }

 
  

  render() {
    return (
      <div className="app-container">
          <h1 className="app-title">To do list</h1>
          <TodoInput updateList={this.updateList} />
          <TodoTasks tasks={this.state.tasks} remove={this.removeTasks} editTask={this.editTask}/>
      </div>
    );
  }
}

export default TodoApp;
