import React, { Component } from 'react'

class Message extends Component {
  constructor(props) {
    super(props)
    this.state = {}
    console.log('Message.constructor')
  }
  componentWillMount() {
    console.log('Message.componentWillMount')
  }
  componentDidMount() {
    console.log('Message.componentDidMount')
  }
  componentWillReceiveProps(nextProps) {
    console.log('Message.componentWillReceiveProps')
  }
  shouldComponentUpdate(nextProps, nextState) {
    console.log('Message.shouldComponentUpdate')
    return true
  }
  componentWillUpdate(nextProps, nextState) {
    console.log('Message.componentWillUpdate')
  }
  componentDidMount() {
    console.log('Message.componentDidMount')
  }

  handleOnChange(e) {
    this.props.onChange(e.target.value)
  }

  render() {
    console.log('Message.render')
    return (
      <div>
        <input type="text" onChange={e => this.handleOnChange(e)} />
      </div>
    )
  }
}

export default Message
