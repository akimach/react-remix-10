import React, { Component } from 'react'
import WarningMessage from './WarningMessage'

export default class AccountForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      name: '',
      email: '',
      password: '',
      sex: '',
      comment: '',
    }
  }

  handleNameChange(name) {
    if (name.length >= 8) {
      alert('8 or more characters')
    }
  }

  handleEmailChange(email) {
    console.log(email)
    if (email.match(/@gmail/) || email.match(/@yahoo/)) {
      alert('Exclude gmail.com and @yahoo')
    }
  }
  handlePasswordChange(password) {
    console.log(password)
    if (16 < password.length) {
      alert('16 or less characters')
    }
  }

  handleSubmit(e) {
    console.log(e)
    e.preventDefault()
  }

  render() {
    return (
      <div className="AccountForm">
        <div className="formParts">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Name"
            onChange={ (e) => this.handleNameChange(e.target.value) }
            required
          />
        </div>
        <div>
          <label htmlFor="email">Email</label>
          <input
            type="text"
            id="email"
            name="email"
            placeholder="Email"
            onChange={ (e) => this.handleEmailChange(e.target.value) }
            required
          />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            placeholder="Password"
            onChange={ (e) => this.handlePasswordChange(e.target.value) }
            required
          />
        </div>
        <div>
          <fieldset>
            <legend>Sex</legend>
            <label>
              <input
                type="radio"
                name="sex"
                value="man"
                defaultChecked
              /> Man
            </label>
            <label>
              <input
                type="radio"
                name="sex"
                value="woman"
              /> Woman
            </label>
          </fieldset>
        </div>
        <div>
          <label htmlFor="comment">Comment</label>
          <textarea id="comment" name="comment" required />
        </div>
        <div>
          <input
            type="submit"
            value="Submit"
          />
        </div>
      </div>
    )
  }
}
