import React, { Component } from 'react'

import LineChartCanvas from './LineChartCanvas'
import BarChartCanvas from './BarChartCanvas'
import PieChartCanvas from './PieChartCanvas'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }
  render() {
    return (
      <div>
        <LineChartCanvas />
        <BarChartCanvas />
        <PieChartCanvas />
      </div>
    )
  }
}

export default App
