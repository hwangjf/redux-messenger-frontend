import React from 'react'
import { Link } from 'react-router-dom'

const UserContact = (props) => {
  // console.log('USERCONTACT PROPS: ', props)
  const { username } = props
  return (
    <div onClick={()=>props.newConvo}>
      {/* change from link to something else for styling */}
      <Link to={`/profile/${username}`}>{username}</Link>
    </div>
  )
}

export default UserContact