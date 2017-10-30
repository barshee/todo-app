import React, { Component } from 'react'
import logo from './logo.svg'
import './App.css'
import TodoList from './components/Todo/TodoList'
import Form from './components/Form/Form'

class App extends Component {
  constructor() {
    super()
    this.state = {
      todos: [
        {
          id: 1,
          title: 'Hello, React!',
          desc: 'React始めました',
          done: false
        },
        {
          id: 2,
          title: 'Hello, Redux!',
          desc: 'Reduxも始めました',
          done: false
        },
      ]
    }
  }
  render() {
    return (
      <div className="App">
        <h1>todoApp Example</h1>
        <Form />
        <TodoList
          collection={ this.state.todos }
        />
      </div>
    );
  }
}

export default App;
