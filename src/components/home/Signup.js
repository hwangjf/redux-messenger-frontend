import React from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router'

import { signup, getUsers } from '../../actions/users'

const initialState = {
  username: '',
  password: ''
}

class Signup extends React.Component {

  state = initialState

  handleChange = e => this.setState({[e.target.name]: e.target.value})

  handleSubmit = e => {
    e.preventDefault()
    this.props.signup(this.state)
      .then(data => {
        this.props.getUsers()

        this.props.history.push('/conversations')
      })

    this.setState(initialState)
  }

  render() {
    return (
      <div className="signup">
        <div className="signup__header">Start Chatting Today!</div>
        <form className="signup__form" onSubmit={this.handleSubmit} >
          <input className="signup__form__input input" type="text" name="username" value={this.state.username} placeholder="Enter your username" required onChange={this.handleChange}></input>
          <input className="signup__form__input input" type={this.props.showPassword ? "text" : "password"} name="password" value={this.state.password} placeholder="Enter your password" required  onChange={this.handleChange}></input>
          <button className="signup__form__btn btn">SIGNUP</button>
        </form>
      </div>
    )
  }
}

export default withRouter(connect(null, { signup, getUsers } )(Signup))
