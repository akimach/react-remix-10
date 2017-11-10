import React, { Component } from 'react'

import Map from './Map'
import MapWithADirectionsRenderer from './MapWithADirectionsRenderer'
import TestMap from './TestMap'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      lat: 35.360556,
      lng: 138.727778,
      testLat: -34.397,
      testLng: 150.644,
    }
  }

  render() {
    return (
      <div>
        <Map lat={this.state.lat} lng={this.state.lng} />
        <TestMap lat={this.state.testLat} lng={this.state.testLng} />
      </div>
    )
  }
}

export default App
