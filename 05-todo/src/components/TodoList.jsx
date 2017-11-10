import React, { Component } from 'react';

import TaskForm from './TaskForm'

export default class TodoList extends Component {
  constructor(props) {
    super(props)
    this.state = {
      tasks: [
        {
          id: 0,
          name: 'Shopping',
          done: false,
        },
        {
          id: 1,
          name: 'Reporting',
          done: false,
        },
      ],
    }
  }

  handleOnSubmit(title) {
    console.log(title)
    const task = {
      id: this.state.tasks.length,
      name: title,
      done: false,
    }
    this.state.tasks.push(task)
    console.log(this.state.tasks)
    this.setState(this.state)
  }

  handleOnChange(task) {
    const id = Number(task.id)
    this.state.tasks[id].done = !this.state.tasks[id].done
    console.log(this.state.tasks)
    this.setState(this.state)
  }

  render() {
    var list = this.state.tasks.map((task) => {
      return (
        <label htmlFor={task.id} key={task.id}>
          <input
            type="checkbox"
            name={task.name}
            checked={task.done}
            id={task.id}
            onChange={(e) => this.handleOnChange(e.target)}
          />
          {task.name}
        </label>
      )
    })
    return (
      <div className="todolist">
        <TaskForm onSubmit={(title) => this.handleOnSubmit(title)} />
        <ul>{list}</ul>
      </div>
    )
  }
}
