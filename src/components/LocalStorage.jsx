
export const SetToLocalStorage = props => {
  const todos = JSON.stringify(props);
  localStorage.setItem('todos', todos)
}

export const GetFromLocalStorage = () => {
  const todos = localStorage.getItem('todos');
  return todos ? JSON.parse(todos) : [];
}