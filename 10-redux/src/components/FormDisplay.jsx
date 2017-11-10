import React, { Component } from 'react'

export default class FormDisplay extends Component {
  constructor(props){
    super(props)
    this.state = {}
  }
  render() {
    return (
      <div>{this.props.data}</div>
    )
  }
}
