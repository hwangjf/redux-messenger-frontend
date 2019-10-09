import React from 'react'
import { NavLink } from 'react-router-dom'
import { connect } from 'react-redux'
import { logout } from '../../actions/user'

import { withRouter } from 'react-router'

class Logout extends React.Component {

  render(props) {
    return (
      <>
      <div className="logout">
        <NavLink classname="logout__link" to="/profile">Profile</NavLink>
        <NavLink classname="logout__link" to="/conversations">Conversations</NavLink>
        <NavLink classname="logout__link" to="/friends">Friends</NavLink>
        <button className="logout__btn btn">LOGOUT</button>
      </div>
      </>
    )
  }
}

const mapStateToProps = state => {
  return state
}

export default withRouter(connect(mapStateToProps, { logout })(Logout))
