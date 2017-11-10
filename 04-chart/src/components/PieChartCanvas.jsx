import React, { Component } from 'react'
import { Pie } from 'react-chartjs-2'

export default class PieChartCanvas extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }
  render() {
    const data = {
      labels: ['M', 'T', 'W', 'T', 'F', 'S', 'S'],
      datasets: [
        {
          backgroundColor: [
            '#2ecc71',
            '#3498db',
            '#95a5a6',
            '#9b59b6',
            '#f1c40f',
            '#e74c3c',
            '#34495e',
          ],
          data: [12, 19, 3, 17, 28, 24, 7],
        },
      ],
    }
    return (
      <div>
        <Pie
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
