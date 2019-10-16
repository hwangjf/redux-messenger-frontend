import React from 'react'
import { connect } from 'react-redux'
import { login, getUsers } from '../../actions/users'

import { withRouter } from 'react-router'

class Login extends React.Component {
  state = {
    username: '',
    password: '',
  }

  handleChange = e => this.setState({[e.target.name]: e.target.value})

  handleSubmit = e => {
    e.preventDefault()
    this.props.login(this.state)
      .then(data => {
        this.props.getUsers()

        this.props.history.push('/conversations')
      })

    this.setState({
      username: '',
      password: ''
    })
  }

  render(props) {
    return (
      <div className="login">
        <form className="login__form" onSubmit={this.handleSubmit} >
          <input className="login__form__input input" type="text" name="username" value={this.state.username} placeholder="Username" required onChange={this.handleChange}></input>
          <input className="login__form__input input" type={this.props.showPassword ? "text" : "password"} name="password" value={this.state.password} placeholder="Password" required onChange={this.handleChange}></input>
          <img className="login__form__eye" src={this.props.showPassword ? "images/show.png" : "images/hide.png"} alt="Eye" onClick={()=>{this.props.handleClickPassword()}} />
          <button className="login__form__btn btn">LOGIN</button>
        </form>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return state
}

export default withRouter(connect(mapStateToProps, { login, getUsers })(Login))
