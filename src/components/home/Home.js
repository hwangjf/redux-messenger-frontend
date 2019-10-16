import React from 'react'
import { Route } from 'react-router-dom'
import { connect } from 'react-redux'
import { signup } from '../../actions/user'
import Signup from './Signup';

class Home extends React.Component {


  // handleChange = e => this.setState({[e.target.name]: e.target.value})

  // handleSubmit = e => {
  //   e.preventDefault()

  //   this.props.history.push('messages')
  // }

  render() {
    return (
      <div className="home">
        <div className="home__body">
          {
            !!this.props.user
            ? null
            : <Signup />
          }
        </div>
      </div>
    )
  }
}

export default connect(state => ({user: state.user}), { signup } )(Home)
