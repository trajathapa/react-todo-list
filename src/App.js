import React, { Component } from 'react';
import uuid from 'uuid';
import TodoList from './components/TodoList';
import TodoInput from './components/TodoInput';

class App extends Component {
  
  render() {  
    return (
      <div>
        <div className="row">
          <TodoInput />
          <TodoList />
          <h1>hello</h1>
        </div>
      </div>
    );
  }
}

export default App;