import React, { Component } from 'react'

import Hello from './Hello'
import Message from './Message'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      'message': '',
    }
    console.log('App.constructor')
  }
  componentWillMount() {
    console.log('App.componentWillMount')
  }
  componentDidMount() {
    console.log('App.componentDidMount')
  }
  componentWillReceiveProps(nextProps) {
    console.log('App.componentWillReceiveProps')
  }
  shouldComponentUpdate(nextProps, nextState) {
    console.log('App.shouldComponentUpdate')
    return true
  }
  componentWillUpdate(nextProps, nextState) {
    console.log('App.componentWillUpdate')
  }
  componentDidMount() {
    console.log('App.componentDidMount')
  }
  onChange(message) {
    console.log(message)
    this.state.message = message
    this.setState(this.state)
    console.log(this.state)
  }
  render() {
    console.log('App.render')
    return (
      <div>
        <Hello message={this.state.message} />
        <Message onChange={text => this.onChange(text)}/>
      </div>
    )
  }
}

export default App
