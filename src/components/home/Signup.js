import React from 'react'
import { connect } from 'react-redux'
import { signup } from '../../actions/user'

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
    this.setState(initialState)
    this.props.history.push('messages')
  }

  render() {
    return (
      <div className="signup">
        <div className="signup__header">Start Chatting Today!</div>
        <form className="signup__form">
          <input className="signup__form__input input" type="text" name="username" value={this.state.username} placeholder="Enter your username" required onChange={this.handleChange}></input>
          <input className="signup__form__input input" type={this.props.showPassword ? "text" : "password"} name="password" value={this.state.password} placeholder="Enter your password" required  onChange={this.handleChange}></input>
          <button className="signup__form__btn btn">SIGNUP</button>
        </form>
      </div>
    )
  }
}

export default connect(null, { signup } )(Signup)
