import React, { Component } from 'react'
import { Bar } from 'react-chartjs-2'

export default class BarChartCanvas extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }
  render() {
    const data = {
      labels: ['M', 'T', 'W', 'T', 'F', 'S', 'S'],
      datasets: [{
        label: 'apples',
        data: [12, 19, 3, 17, 28, 24, 7]
      }, {
        label: 'oranges',
        data: [30, 29, 5, 5, 20, 3, 10]
      }]
    }
    return (
      <div>
        <Bar
          data={data}
          width={600}
          height={250}
          options={{
            maintainAspectRatio: false,
          }}
        />
      </div>
    )
  }
}
