import React from 'react'
import { Route } from 'react-router-dom'
import { connect } from 'react-redux'
import { signup } from '../../actions/user'
import Signup from './Signup';

const initialState = {
  username: '',
  password: ''
}
class Home extends React.Component {

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
      <div className="home">
        <div className="home__body">
          <Signup />
        </div>
      </div>
    )
  }
}

export default connect(null, { signup } )(Home)
