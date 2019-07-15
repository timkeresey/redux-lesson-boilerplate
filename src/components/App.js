import React, { Component } from 'react';
import AddTodoForm from '../containers/AddTodoForm';
import FilterMenu from './FilterMenu';
import ToDoList from '../containers/ToDoList';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Another Todo Box</h1>
        <FilterMenu />
        <AddTodoForm />
        <ToDoList />
      </div>
    );
  }
}

export default App;
