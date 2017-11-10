import React, { Component } from 'react'

import AccountForm from './AccountForm'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }
  render() {
    return (
      <form action="#">
        <AccountForm />
      </form>
    )
  }
}

export default App
