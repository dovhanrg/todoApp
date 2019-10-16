import React, { Component } from 'react'

class AddTodoForm extends Component {
  state = {
    content: ''
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.addNewTodo(this.state);
    this.setState({
      content: ''
    })
  }

  handleChange = (e) => {
    this.setState({
      content: e.target.value
    })
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>Add new TODO</label>
          <input 
          placeholder="enter new task" 
          type="text" 
          onChange={this.handleChange}
          value={this.state.content}
          />
        </form>
      </div>
    )
  }
}

export default AddTodoForm