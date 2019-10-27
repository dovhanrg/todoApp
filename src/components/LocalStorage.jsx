
export const SetToLocalStorage = props => {
  if ( !props || props.length === 0 ) {
    return localStorage.removeItem('todos');
  }
  localStorage.setItem('todos', JSON.stringify(props))
}

export const GetFromLocalStorage = () => {

  const todos = localStorage.getItem('todos');
  return todos ? JSON.parse(todos) : [];
}