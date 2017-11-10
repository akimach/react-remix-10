import React, { Component } from 'react'
import { createStore } from 'redux'
import { Provider, connect } from 'react-redux'

import FormApp from './FormApp'

const [SUBMIT, CLEAR] = ['SUBMIT', 'CLEAR']
let submit = (value) => {
  console.log('submit action')
  console.log(value)
  return {
    type: SUBMIT,
    value,
  }
}

let clear = (value) => {
  console.log('clear action')
  console.log(value)
  return {
    type: CLEAR,
    value,
  }
}

let formReducer = (state, action) => {
  console.log('formReducer')
  console.log(state)
  console.log(action)
  switch (action.type) {
    case 'SUBMIT':
      return Object.assign({}, state, {
        value: action.value,
      })
    case 'CLEAR':
      return Object.assign({}, state, {
        value: null,
      })
    default:
      return state
  }
}

const initialState = {
  value: null,
}
const store = createStore(formReducer, initialState)

let mapStateToProps = (state) => {
  console.log('mapStateToProps')
  return {
    value: state.value,
  }
}

function mapDispatchToProps(dispatch) {
  console.log(dispatch)
  return {
    onClick(value) {
      dispatch(submit(value));
    },
    onClear(value) {
      dispatch(clear(value));
    },
  }
}

const AppContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(FormApp)

class App extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <Provider store={store}>
        <AppContainer />
      </Provider>
    )
  }
}

export default App
