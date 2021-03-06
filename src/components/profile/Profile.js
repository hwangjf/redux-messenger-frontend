import React from 'react'
import withAuth from '../hocs/withAuth'
import { connect } from 'react-redux'
import { addFriend } from '../../actions/users'

class Profile extends React.Component {

  state = {
    editProfile: false
  }

  handleClickEditProfile = () => {
    this.setState({editProfile: !this.state.editProfile})
  }

  render() {
    console.log(this.props)
    console.log(this.state)
    const user = this.props.users.find(user => user.id === this.props.userId)
    return (
      <div>
        <div className="profile-background">
          <div className="stripe__1"></div>
          <div className="stripe__2"></div>
          <div className="stripe__3"></div>
          <div className="stripe__4"></div>
        </div>
        <div className="profile">
        {
          this.props.user && this.props.user.friends.map(u => u.id).includes(this.props.userId) 
            ? <div>
                Already your friend
              </div>
            : <>
                <h1>CLICK BELOW TO ADD FRIEND</h1>
                <button onClick={()=>this.props.addFriend(this.props.userId)} >ADD FRIEND</button>
              </>
        }
        
        <div className="profile__image--container">
          <img
            className="profile__image--image" 
            src="https://i.pinimg.com/originals/ae/c4/53/aec453161b2f33ffc6219d8a758307a9.jpg" 
            alt="profile" 
          />
          <div className="profile__image--default"></div>
          <div className="profile__camera--container">
            <img className="profile__camera" src="images/camera.png" alt="camera" />
          </div>
          </div>
          
          {this.state.editProfile 
            ? <div className="profile__edit" onClick={this.handleClickEditProfile}>done</div> 
            : <div className="profile__edit" onClick={this.handleClickEditProfile}>edit</div>
          }
          <div className="profile__info">
            <div className="profile__header">name</div>
            {this.state.editProfile 
              ? <input className="profile__input"></input> 
              : <div className="profile__content">
                  {user 
                    ? user.username 
                    : 'name'}
                </div>
            }
          </div>
          <div className="profile__info">
            <div className="profile__header">birthday</div>
            {this.state.editProfile 
              ? <input className="profile__input"></input> 
              : <div className="profile__content">info</div>
            }
          </div>
          <div className="profile__info">
            <div className="profile__header">gender</div>
            {this.state.editProfile 
              ? <input className="profile__input"></input> 
              : <div className="profile__content">info</div>
            }
          </div>
          <div className="profile__info">
            <div className="profile__header">password</div>
            {this.state.editProfile 
              ? <input className="profile__input"></input> 
              : <div className="profile__content">info</div>
            }
          </div>
        </div>
      </div>
    )
  }
}

export default withAuth(connect(null, { addFriend })(Profile))
