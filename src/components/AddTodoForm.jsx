import React from 'react'

const AddTodoForm = props => {

  const [content, setContent] = React.useState({ content: '' });

  const handleSubmit = e => {
    e.preventDefault();
    props.addNewTodo(content);
    setContent({
      content: ''
    })
  }

  const handleChange = e => {
    setContent({
      content: e.target.value
    })
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>Add new TODO</label>
        <input
          placeholder="enter new task"
          type="text"
          onChange={handleChange}
          value={content.content}
        />
      </form>
    </div>
  )
}
export default AddTodoForm
