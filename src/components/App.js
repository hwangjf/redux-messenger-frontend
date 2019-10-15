import React, { Component } from 'react'
import { withRouter, Route, Switch } from 'react-router-dom'

import Navbar from './home/Navbar'
import Signup from './home/Signup'
import Home from './home/Home'

import Profile from './profile/Profile'
import Messages from './messages/Messages'
import Conversation from './Conversation';

import { Adapter } from '../adapters'
import { connect } from 'react-redux'

import { autoLogin, getUsers } from '../actions/users';

import '../sass/main.scss'

class App extends Component {
  state = {
    login: true,
    showPassword: false
  }

  componentDidMount() {
    if (Adapter.hasToken()) {
      this.props.autoLogin()
        .then(data => {
          this.props.getUsers()
          // this.props.history.push(`/profile/${this.props.user.username}`)
          this.props.history.push('/conversations')
        })
      this.setState({login: false})
    } else {
      this.props.history.push('/')
    }
  }

  handleClickLogin = () => {
    this.setState({ login: true })
  }

  handleClickPassword = () => {
    this.setState({ showPassword : !this.state.showPassword })
  }

  render() {
    return (
      <div className="App">
        <Navbar
          handleClickLogin={this.handleClickLogin}
          loggedIn={this.props.loggedIn}
          handleClickPassword={this.handleClickPassword}
          showPassword={this.state.showPassword}
        />
        <Route exact path="/" component={Home} />
        <Route
          path="/profile/:username"
          render={routerProps => {
            const userId = this.props.users.length > 0 ? this.props.users.find(user => user.username === routerProps.match.params.username).id : null
            return (
              <Profile
                userId={userId}
                user={this.props.user}
                users={this.props.users}
                // friend={this.props.user && this.props.user.friends.map(u => u.id).includes(user.id)}
                {...routerProps}
              />
            )
          }}
        />
        <Route
          path="/messages"
          render={props => <Messages><Conversation /></Messages>}
        />
        <Route
          path="/conversations"
          component={Conversation}
        />
      </div>
    );
  }
}

const mapStateToProps = state => {
  console.log(state)
  return {
    user: state.user,
    loggedIn: !!state.user,
    users: state.users
  }
}
export { App };
export default withRouter(connect(mapStateToProps, { autoLogin, getUsers })(App))
