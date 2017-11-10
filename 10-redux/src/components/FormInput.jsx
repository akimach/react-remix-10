import React, { Component } from 'react'

export default class FormInput extends Component {
  constructor(props){
    console.log('FormInput.constructor')
    super(props)
    console.log(this.props)
  }
  submit(e) {
    console.log('FormInput.submit')
    e.preventDefault()
    this.props.handleClick(this.myInput.value)
    this.myInput.value = ''
  }
  clear(e) {
    console.log('FormInput.clear')
    e.preventDefault()
    this.props.handleClear()
    this.myInput.value = ''
  }
  render() {
    return (
      <form>
        <input type="text" ref={(ref) => (this.myInput = ref)} defaultValue="" />
        <button onClick={(e) => this.submit(e)}>Send</button>
        <button onClick={(e) => this.clear(e)}>Delete</button>
      </form>
    );
  }
}
