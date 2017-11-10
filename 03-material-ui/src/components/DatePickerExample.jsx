import React, { Component } from 'react'
import DatePicker from 'material-ui/DatePicker'

export default class DatePickerExample extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  handleChange(event, date) {
    console.log(date)
  }

  render() {
    return (
      <div className="box">
        <DatePicker
          hintText="Controlled Date Input"
          onChange={this.handleChange}
        />
      </div>
    );
  }
}
