
export const SetToLocalStorage = props => {
  const todos = props ? JSON.stringify(props): JSON.stringify(null);
  localStorage.setItem('todos', todos)
}

export const GetFromLocalStorage = () => {

  const todos = localStorage.getItem('todos');
  return todos ? JSON.parse(todos) : [];
}