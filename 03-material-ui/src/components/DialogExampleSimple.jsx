import React, { Component } from 'react'
import Dialog from 'material-ui/Dialog'
import FlatButton from 'material-ui/FlatButton'
import RaisedButton from 'material-ui/RaisedButton'

class DialogExampleSimple extends Component {
  constructor(props) {
    super(props)
    this.state = {
      open: false,
    }
  }

  handleOpen() {
    this.setState({ open: true })
    // console.log('handleOpen')
  }

  handleClose() {
    this.setState({ open: false })
    //console.log('handleClose')
  }

  render() {
    const actions = [
      <FlatButton
        label="Cancel"
        primary={true}
        onClick={() => this.handleClose()}
      />,
      <FlatButton
        label="Submit"
        primary={true}
        keyboardFocused={true}
        onClick={() => this.handleClose()}
      />,
    ];

    return (
      <div className="box">
        <RaisedButton label="Dialog" onClick={() => this.handleOpen()} />
        <Dialog
          title="Dialog With Actions"
          actions={actions}
          modal={false}
          open={this.state.open}
          onRequestClose={this.handleClose}
        >
          The actions in this window were passed in as an array of React objects.
        </Dialog>
      </div>
    );
  }
}

export default DialogExampleSimple
