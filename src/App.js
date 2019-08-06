import React, { Component } from 'react';
import './App.css';
import { addTodo, findById, toggleTodo, updateTodo, generateId } from './lib/todoHelpers'
import { TodoForm, TodoList, Footer } from './components/todo';

class App extends Component {
  state = {
    todos: [
      { id: 1, name: 'Algo', isComplete: false },
      { id: 2, name: 'Algo2', isComplete: true },
      { id: 3, name: 'Algo3', isComplete: false }
    ],
    currentTodo: '',
    errorMessage: ''
  }

  handleToggle = (id) => {
    const todo = findById(id, this.state.todos);
    const toggled = toggleTodo(todo);
    const updatedTodos = updateTodo(this.state.todos, toggled);
    this.setState({
      todos: updatedTodos
    })
  }

  handleSubmit = (event) => {
    event.preventDefault();

    const newId = generateId();
    const newTodo = { id: newId, name: this.state.currentTodo, isComplete: false };
    const updatedTodos = addTodo(this.state.todos, newTodo);
    this.setState({
      todos: updatedTodos,
      currentTodo: '',
      errorMessage: ''
    });
  }

  handleEmptySubmit = (event) => {
    event.preventDefault()
    this.setState({
      errorMessage: 'Please provide a name'
    })
  }

  handleInputChange = (event) => {
    this.setState({
      currentTodo: event.target.value
    });
  }

  render() {
    const submitHandler = this.state.currentTodo ? this.handleSubmit : this.handleEmptySubmit;

    return (
      <div className="App">
        <div className="Todo-List">
          {this.state.errorMessage && <span className="error">{this.state.errorMessage}</span>}
          <TodoForm handleSubmit={submitHandler}
                    handleInputChange={this.handleInputChange}
                    currentTodo={this.state.currentTodo} />
          <TodoList handleToggle={this.handleToggle} todos={this.state.todos} />
          <Footer/>
        </div>
      </div>
    );
  }
}

export default App;
