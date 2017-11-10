import React, { Component } from 'react'
import marked from 'marked'

import Editor from './Editor'
// import Viewer from './Viewer'

class App extends Component {
  constructor(props) {
    super(props)
    marked.setOptions({
      renderer: new marked.Renderer(),
      gfm: true,
      tables: true,
      breaks: false,
      pedantic: false,
      sanitize: false,
      smartLists: true,
      smartypants: false,
    })
    this.state = {}
  }

  onSubmit(text) {
    console.log(text)
    var viewer = document.getElementById('viewer')
    console.log(viewer)
    viewer.innerHTML = marked(text)
  }

  render() {
    return (
      <div>
        <Editor onSubmit={text => this.onSubmit(text)}/>
      </div>
    )
  }
}

export default App
