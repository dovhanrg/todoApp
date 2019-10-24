import React from 'react';

const Todos = ({ todos, deleteTodo }) => {

  const todoList = todos.length ? (
    todos.map((todo, it) => {
      return (
        <div
          className="collection-item cursor"
          key={todo.id}
          onClick={() => { deleteTodo(todo.id) }}
        >
          <span>{it + 1} </span>
          <span>
            {todo.content}
          </span>
        </div>
      )
    })
  ) : (
      <p className="center">You have no todos left</p>
    )

  return (
    <div className="todos collection">
      {todoList}
    </div>
  )
}

export default Todos