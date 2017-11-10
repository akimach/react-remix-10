import React, { Component } from 'react'

class Editor extends Component {
  constructor(props) {
    super(props)
    this.state = {
      text: '',
    }
  }

  handleOnChange(e) {
    e.preventDefault()
    const text = e.target.value
    this.setState({text})
    console.log(text)
    this.props.onSubmit(this.state.text)
  }

  handleOnSubmit(e) {
    e.preventDefault()
    if (this.state.text === '') {
      return
    }
    this.props.onSubmit(this.state.text)
  }

  render() {
    return (
      <div>
        <form onSubmit={e => this.handleOnSubmit(e)}>
          <textarea
            value={this.state.text}
            onChange={e => this.handleOnChange(e)}
            className="editor"
          />
          <input type="submit" value="Register" />
        </form>
      </div>
    )
  }
}

export default Editor
