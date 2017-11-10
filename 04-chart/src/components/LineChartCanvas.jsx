import React, { Component } from 'react'
import { Line } from 'react-chartjs-2'

export default class LineChartCanvas extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }
  render() {
    const data = {
      labels: ['M', 'T', 'W', 'T', 'F', 'S', 'S'],
      datasets: [
        {
          label: 'apples',
          data: [12, 19, 3, 17, 6, 3, 7],
          backgroundColor: 'rgba(153,255,51,0.4)',
        }, {
          label: 'oranges',
          data: [2, 29, 5, 5, 2, 3, 10],
          backgroundColor: 'rgba(255,153,0,0.4)',
        },
      ],
    }
    return (
      <div>
        <Line
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
