import ApiAdapter from './ApiAdapter'
import { Adapter } from '.';

// TODO: move baseUrl to env.process.
// const apiAdapter = new ApiAdapter(baseUrl)

class UsersAdapter extends ApiAdapter {
 
  signup = (userInfo) => {
    return this.post('/signup', {
      user: userInfo
    })
  }

  login = (userInfo) => {
    return this.post('/login', {
      user: userInfo
    })
  }

  autoLogin = () => {
    this.addAuthHeaders()

    return this.get('/auto_login')
  }

  logout = () => {
    Adapter.removeToken()
  }

  getUsers = () => {
    this.addAuthHeaders()
    return this.get('/users')
  }

  // TODO: MOVE TO FRIENDS ADAPTER
  getFriends = () => {
    this.addAuthHeaders()
    return this.get('/friends')
  }

  addFriend = (userId) => {
    this.addAuthHeaders()
    return this.post(`/friends`, {friend_id: userId})
  }

  deleteFriend = (userId) => {
    this.addAuthHeaders()
    return this.delete(`/friends`, { friend_id: userId })
  }
}

// users adapter that connects to user related backend routes
const usersAdapter = new UsersAdapter()

export default usersAdapter
