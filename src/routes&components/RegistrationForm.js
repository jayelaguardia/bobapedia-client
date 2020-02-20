import React, { Component } from 'react'
import AuthService from '../services/authService'

export default class RegistrationForm extends Component {
  static defaultProps = {
    onRegistrationSuccess: () => {}
  }

  handleSubmit = ev => {
    ev.preventDefault()
    const { user_name,  user_pass } = ev.target
    const user = {
      user_name: user_name.value,
      user_pass: user_pass.value
    }
    AuthService.postUser(user)
      .then(user => {
        user_name.value = ''
        user_pass.value = ''
        
        this.props.onRegistrationSuccess()
      })
      .catch(this.context.setError)
  }

  render() {

    return (
      <form
        className='RegistrationForm'
        onSubmit={this.handleSubmit}
      >
        <div className='user_name'>
          <label htmlFor='RegistrationForm__user_name'>
            User Name
          </label>
          <br />
          <input
            name='user_name'
            type='text'
            required
            id='RegistrationForm__user_name'>
          </input>
        </div>

        <div className=' user_pass'>
          <label htmlFor='RegistrationForm__user_pass'>
             Password
          </label>
          <br />
          <input
            name='user_pass'
            type='user_pass'
            required
            id='RegistrationForm__user_pass'>
          </input>
        </div>

        <button type='submit'>
          Register
        </button>
      </form>
    )
  }
}