import React, { Component } from 'react'
import TokenService from '../services/token-service'
import AuthService from '../services/authService'

export default class LoginForm extends Component {
  static defaultProps = {
    onLoginSuccess: () => {}
  }

  handleSubmitJwtAuth = ev => {
    ev.preventDefault()
    const { user_name, user_pass } = ev.target
    AuthService.postLogin({
      user_name: user_name.value,
      user_pass: user_pass.value,
    })
      .then(res => {
        user_name.value = ''
        user_pass.value = ''
        TokenService.saveAuthToken(res.authToken)
        this.props.onLoginSuccess()
      })
      .catch(this.context.setError)
  }

  render() {
    return (
      <form
        className='LoginForm'
        onSubmit={this.handleSubmitJwtAuth}
      >
        <div className='user_name'>
          <label htmlFor='LoginForm__user_name'>
            User Name
          </label>
          <br />
          <input
            required
            name='user_name'
            id='LoginForm__user_name'>
          </input>
        </div>

        <div className='user_pass'>
          <label htmlFor='LoginForm__user_pass'>
            Password
          </label>
          <br />
          <input
            required
            name='user_pass'
            type='user_pass'
            id='LoginForm__user_pass'>
          </input>
        </div>
        <button type='submit'>
          Login
        </button>
      </form>
    )
  }
}