import React, { Component } from 'react';

import Todos from './components/Todos';
import AddTodoForm from './components/AddTodoForm';
import CurrentTime from './components/CurrentTime';
import { SetToLocalStorage, GetFromLocalStorage } from './components/LocalStorage';

class App extends Component {
/*
i dont know why, for this moment, but tutor in a didnt use constructor
*/
  state = {
    todos: []
  }

  GetFromLocalStorage = GetFromLocalStorage.bind(this);
  componentDidMount() {
    if (this.state.todos.length === 0) {
      this.setState({
        todos: GetFromLocalStorage()
      })
    }
  }

  deleteTodo = (id) => {
    const todos = this.state.todos.filter(todo => todo.id !== id);
    this.setState({
      todos
    });
    SetToLocalStorage(todos);
  }

  addNewTodo = (todo) => {
    todo.id = +((Math.random() * 10000).toFixed(4));
    let todos = this.state.todos.concat(todo);
    this.setState({
      todos
    })
    SetToLocalStorage(todos);
  }

  render() {
    return (
      <div className="todo-app container">
        <CurrentTime
          sign="this is CurrenTime component"
        />
        <h1 className="center blue-text">
          Todo's
      </h1>
        <AddTodoForm
          addNewTodo={this.addNewTodo}
        />
        <Todos
          todos={this.state.todos}
          deleteTodo={this.deleteTodo}
        />
      </div>
    );
  }
}

export default App;
