import React from 'react'
import { NavLink } from 'react-router-dom'
import { connect } from 'react-redux'
import { logout } from '../../actions/users'

import { withRouter } from 'react-router'

class Logout extends React.Component {

  render() {
    return (
      <div className="logout">
        <NavLink className="logout__link" to={`/profile/${this.props.user.username}`}>Profile</NavLink>
        <NavLink className="logout__link" to="/conversations">Conversations</NavLink>
        <NavLink className="logout__link" to="/friends">Friends</NavLink>
        <button className="logout__btn btn" onClick={()=>this.props.logout()}>LOGOUT</button>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    user: state.user
  }
}

export default withRouter(connect(mapStateToProps, { logout })(Logout))
