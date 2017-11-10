import React, { Component } from 'react'
import Drawer from 'material-ui/Drawer'
import MenuItem from 'material-ui/MenuItem'
import RaisedButton from 'material-ui/RaisedButton'

export default class DrawerUndockedExample extends Component {
  constructor(props) {
    super(props);
    this.state = { open: false }
  }

  handleToggle() {
    this.setState({ open: !this.state.open })
  }

  handleOpen() {
    this.setState({ open: true })
  }

  handleClose() {
    this.setState({ open: false })
  }

  render() {
    return (
      <div className="box">
        <RaisedButton
          label="Open Drawer"
          onClick={() => this.handleToggle()}
        />
        <Drawer
          docked={false}
          width={200}
          open={this.state.open}
          onRequestChange={(open) => this.setState({open})}
        >
          <MenuItem onClick={() => this.handleClose()}>Menu Item</MenuItem>
          <MenuItem onClick={() => this.handleClose()}>Menu Item 2</MenuItem>
        </Drawer>
      </div>
    );
  }
}
