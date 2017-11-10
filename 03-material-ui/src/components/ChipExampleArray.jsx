import React, { Component } from 'react'
import Chip from 'material-ui/Chip'


export default class ChipExampleArray extends Component {
  constructor(props) {
    super(props);
    this.state = {
      chipData: [
        { key: 0, label: 'Angular' },
        { key: 1, label: 'JQuery' },
        { key: 2, label: 'Polymer' },
        { key: 3, label: 'ReactJS' },
      ],
    }
    this.styles = {
      chip: {
        margin: 4,
      },
      wrapper: {
        display: 'flex',
        flexWrap: 'wrap',
      },
    }
  }

  handleRequestDelete(key) {
    if (key === 3) {
      alert('Why would you want to delete React?! :)')
      return;
    }
    this.chipData = this.state.chipData
    const chipToDelete = this.chipData.map((chip) => chip.key).indexOf(key)
    this.chipData.splice(chipToDelete, 1)
    this.setState({ chipData: this.chipData })
  }

  renderChip(data) {
    return (
      <Chip
        key={data.key}
        onRequestDelete={() => this.handleRequestDelete(data.key)}
        style={this.styles.chip}
      >
        {data.label}
      </Chip>
    )
  }

  render() {
    return (
      <div className="box">
        {this.state.chipData.map(this.renderChip, this)}
      </div>
    )
  }
}
