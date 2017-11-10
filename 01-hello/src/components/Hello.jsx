import React, { Component } from 'react'

class Hello extends Component {
  constructor(props) {
    super(props)
    this.state = {
      'message': props.message,
    }
    console.log('Hello.constructor')
  }
  componentWillMount() {
    console.log('Hello.componentWillMount')
  }
  componentDidMount() {
    console.log('Hello.componentDidMount')
  }
  componentWillReceiveProps(nextProps) {
    console.log('Hello.componentWillReceiveProps')
    this.setState({
      'message': nextProps.message,
    })
  }
  shouldComponentUpdate(nextProps, nextState) {
    console.log('Hello.shouldComponentUpdate')
    return true
  }
  componentWillUpdate(nextProps, nextState) {
    console.log('Hello.componentWillUpdate')
  }
  componentDidMount() {
    console.log('Hello.componentDidMount')
  }
  render() {
    console.log('Hello.render')
    console.log(this.state.message)
    return (
      <div>
        <h1>Hello, {this.state.message}!</h1>
      </div>
    )
  }
}

export default Hello
