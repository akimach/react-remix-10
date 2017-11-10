import React from 'react'
import CircularProgress from 'material-ui/CircularProgress'

function CircularProgressExampleSimple() {
  return (
    <div className="box">
      <CircularProgress />
      <CircularProgress size={60} thickness={7} />
      <CircularProgress size={80} thickness={5} />
    </div>
  )
}

export default CircularProgressExampleSimple
