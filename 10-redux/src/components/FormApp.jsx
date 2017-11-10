import React, { Component } from 'react'

import FormDisplay from './FormDisplay'
import FormInput from './FormInput'

export default class FormApp extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <div>
        <FormInput
          handleClick={this.props.onClick}
          handleClear={this.props.onClear}
        />
        <FormDisplay data={this.props.value} />
      </div>
    )
  }
}
