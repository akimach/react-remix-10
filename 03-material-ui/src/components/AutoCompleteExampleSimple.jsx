import React, { Component } from 'react'
import AutoComplete from 'material-ui/AutoComplete'

class AutoCompleteExampleSimple extends Component {
  constructor(props) {
    super(props)
    this.state = {
      dataSource: [],
    }
  }
  handleUpdateInput(value) {
    const dataSource = {
      dataSource: [
        value,
        value + value,
        value + value + value,
      ],
    }
    this.setState(dataSource)
  }
  render() {
    return (
      <div className="box">
        <AutoComplete
          hintText="Type anything"
          dataSource={this.state.dataSource}
          onUpdateInput={this.handleUpdateInput}
        />
      </div>
    )
  }
}

export default AutoCompleteExampleSimple
