import React from 'react';
import Paper from 'material-ui/Paper';

const style = {
  height: 100,
  width: 100,
  margin: 20,
  textAlign: 'center',
  display: 'inline-block',
}

function PaperExampleSimple() {
  return (
    <div className="box">
      <Paper style={style} zDepth={1} />
      <Paper style={style} zDepth={2} />
      <Paper style={style} zDepth={3} />
      <Paper style={style} zDepth={4} />
      <Paper style={style} zDepth={5} />
    </div>
  )
}

export default PaperExampleSimple
