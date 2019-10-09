import React from 'react'
import { NavLink, withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import { logout, login } from '../../actions/users'
import Login from './Login';
import Logout from './Logout';

class Navbar extends React.Component {
  state = {
    username: '',
    password: '',
  }

  handleChange = e => this.setState({ [e.target.name]: e.target.value })

  handleSubmit = e => {
    e.preventDefault()
    this.props.login(this.state)
    this.setState({
      username: '',
      password: ''
    })
    this.props.history.push('/conversations')
  }

  render() {
    return (
      <div className="navbar">
        <NavLink className="navbar__logo" to="/">ChatApp</NavLink>
        {this.props.loggedIn ? <Logout /> : <Login handleClickPassword={this.props.handleClickPassword} showPassword={this.props.showPassword}/>}
      </div>
    )
  }
}

export default withRouter(connect(null, { login, logout })(Navbar))
