import React from 'react'
import { connect } from 'react-redux'
import { login } from '../../actions/users'

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
      .then(()=>this.props.history.push('/conversations'))

    this.setState({
      username: '',
      password: ''
    })
  }

  render(props) {
    return (
      <div className="login">
        <form className="login__form" onSubmit={this.handleSubmit} >
          <input className="login__form__input input" type="text" placeholder="Username" name="username" required value={this.state.username} onChange={this.handleChange} ></input>
          <input className="login__form__input input" type={this.props.showPassword ? "text" : "password"} placeholder="Password" name="password" required value={this.state.password} onChange={this.handleChange} ></input>
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

export default withRouter(connect(mapStateToProps, { login })(Login))
