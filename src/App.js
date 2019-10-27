import React, { useState, useEffect } from 'react';

import Todos from './components/Todos';
import AddTodoForm from './components/AddTodoForm';
import CurrentTime from './components/CurrentTime';
import { SetToLocalStorage, GetFromLocalStorage } from './components/LocalStorage';

const App = () => {

  const [todos, setTodos] = useState([]);

  useEffect(() => {
    if (todos.length === 0) {
      setTodos(GetFromLocalStorage())
    }
  }, [todos.length])


  const deleteTodo = (id) => {
    const todosNew = todos.filter(todo => todo.id !== id);
    setTodos(todosNew);
    SetToLocalStorage(todosNew);
  }

  const addNewTodo = (todo) => {
    todo.id = +((Math.random() * 10000).toFixed(4));
    let newTodos = todos.concat(todo);
    setTodos(newTodos)
    SetToLocalStorage(newTodos);
  }

  return (
    <div className="todo-app container">
      <CurrentTime
        sign="this is CurrenTime component"
      />
      <h1 className="center blue-text">
        Todo's
    </h1>
      <AddTodoForm
        addNewTodo={addNewTodo}
      />
      <Todos
        todos={todos}
        deleteTodo={deleteTodo}
      />
    </div>
  )
}

export default App;
