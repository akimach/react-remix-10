import React,{ Component } from 'react'

function WarningMessage(isWarn) {
  if (isWarn == 1) {
    return (<plaintext>Not valid</plaintext>)
  }
  return (<plaintext> </plaintext>)
}

export default WarningMessage
