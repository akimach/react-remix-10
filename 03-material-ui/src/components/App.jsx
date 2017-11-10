import React, { Component } from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import AppBar from 'material-ui/AppBar'
import Avatar from 'material-ui/Avatar'
import FontIcon from 'material-ui/FontIcon'
import Badge from 'material-ui/Badge'
import IconButton from 'material-ui/IconButton'
import NotificationsIcon from 'material-ui/svg-icons/social/notifications'
import ActionHome from 'material-ui/svg-icons/action/home'
import { Card, CardActions, CardHeader, CardText } from 'material-ui/Card'
import FlatButton from 'material-ui/FlatButton'
import DatePicker from 'material-ui/DatePicker'

import AutoCompleteExampleSimple from './AutoCompleteExampleSimple'
import ChipExampleArray from './ChipExampleArray'
import DatePickerExample from './DatePickerExample'
import DialogExampleSimple from './DialogExampleSimple'
import DividerExampleForm from './DividerExampleForm'
import DrawerUndockedExample from './DrawerUndockedExample'
import GridListExampleSimple from './GridListExampleSimple'
import ListExampleSimple from './ListExampleSimple'
import MenuExampleSimple from './MenuExampleSimple'
import IconMenuExampleSimple from './IconMenuExampleSimple'
import PaperExampleSimple from './PaperExampleSimple'
import PopoverExampleSimple from './PopoverExampleSimple'
import CircularProgressExampleSimple from './CircularProgressExampleSimple'

const CardExampleExpandable = () => (
  <Card>
    <CardHeader
      title="Without Avatar"
      subtitle="Subtitle"
      actAsExpander={true}
      showExpandableButton={true}
    />
    <CardActions>
      <FlatButton label="Action1" />
      <FlatButton label="Action2" />
    </CardActions>
    <CardText expandable={true}>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      Donec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi.
      Donec vulputate interdum sollicitudin. Nunc lacinia auctor quam sed pellentesque.
      Aliquam dui mauris, mattis quis lacus id, pellentesque lobortis odio.
    </CardText>
  </Card>
)

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }
  render() {
    return (
      <div>
        <MuiThemeProvider>
          <AppBar title="Hello Material-UI" />
        </MuiThemeProvider>
        <MuiThemeProvider>
          <AutoCompleteExampleSimple />
        </MuiThemeProvider>
        <MuiThemeProvider>
          <div className="box">
            <Avatar icon={<FontIcon className="muidocs-icon-communication-voicemail" />} />
          </div>
        </MuiThemeProvider>
        <MuiThemeProvider>
          <div className="box">
            <Badge
              badgeContent={10}
              secondary={true}
              badgeStyle={{top: 12, right: 12}}
            >
              <IconButton tooltip="Notifications">
                <NotificationsIcon />
              </IconButton>
            </Badge>
          </div>
        </MuiThemeProvider>
        <MuiThemeProvider>
          <div className="box">
            <IconButton iconClassName="muidocs-icon-custom-github" />
          </div>
        </MuiThemeProvider>
        <MuiThemeProvider>
          <div className="box">
            <IconButton tooltip="Font Icon">
              <FontIcon className="muidocs-icon-action-home" />
            </IconButton>
          </div>
        </MuiThemeProvider>
        <MuiThemeProvider>
          <CardExampleExpandable />
        </MuiThemeProvider>
        <MuiThemeProvider>
          <ChipExampleArray />
        </MuiThemeProvider>
        <MuiThemeProvider>
          <DatePickerExample />
        </MuiThemeProvider>
        <MuiThemeProvider>
          <DialogExampleSimple />
        </MuiThemeProvider>
        <MuiThemeProvider>
          <DividerExampleForm />
        </MuiThemeProvider>
        <MuiThemeProvider>
          <DrawerUndockedExample />
        </MuiThemeProvider>
        <MuiThemeProvider>
          <GridListExampleSimple />
        </MuiThemeProvider>
        <MuiThemeProvider>
          <ListExampleSimple />
        </MuiThemeProvider>
        <MuiThemeProvider>
          <MenuExampleSimple />
        </MuiThemeProvider>
        <MuiThemeProvider>
          <IconMenuExampleSimple />
        </MuiThemeProvider>
        <MuiThemeProvider>
          <PaperExampleSimple />
        </MuiThemeProvider>
        <MuiThemeProvider>
          <PopoverExampleSimple />
        </MuiThemeProvider>
        <MuiThemeProvider>
          <CircularProgressExampleSimple />
        </MuiThemeProvider>
      </div>
    )
  }
}

export default App
