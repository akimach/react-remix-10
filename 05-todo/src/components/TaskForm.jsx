import React, { Component } from 'react';

class TaskForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
    }
  }

  handleTaskChange(title) {
    this.setState({ title })
  }

  handleSubmit(e) {
    e.preventDefault()
    console.log(this.state.title)
    this.props.onSubmit(this.state.title)
    this.state.title = ''
    this.setState(this.state)
  }

  render() {
    return (
      <form onSubmit={e => this.handleSubmit(e)}>
        <input
          type="text"
          value={this.state.title}
          onChange={e => this.handleTaskChange(e.target.value)}
        />
        <input type="submit" value="Register" />
      </form>
    )
  }
}

export default TaskForm
