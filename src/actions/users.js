import { UsersAdapter } from '../adapters'
import {
  userConstants
} from '../types'

export const getUsers = () => dispatch => {
  UsersAdapter.getUsers()
    .then(data => {
      dispatch({
        type: userConstants.GET_USERS,
        payload: data
      })
    })
}

export const login = (userInfo) => dispatch => {
  dispatch(loginRequest)
  return UsersAdapter.login(userInfo)
    .then(data => {
      dispatch(loginSuccess(data))
      return data
    })
    .catch(err => {
      err.json().then(arg => console.log(arg) )
      dispatch(loginFailure(err))
    })
}

export const autoLogin = () => dispatch => {
  dispatch(loginRequest)
  return UsersAdapter.autoLogin()
    .then(data => {
      dispatch(loginSuccess(data))
      return data
    })
    .catch(err => {
      dispatch(loginFailure(err))
    })
}

export const signup = (userInfo) => dispatch => {
  dispatch(loginRequest)

  return UsersAdapter.signup(userInfo)
    .then(data => {
      debugger
      dispatch(signupSuccess(data))
    })
    .catch(err => {
      dispatch(signupFailure(err))
    })
}

export const logout = () => {
  // removes token
  UsersAdapter.logout()

  return {
    type: userConstants.LOGOUT
  }
}

export const addFriend = (friendId) => dispatch => {
  UsersAdapter.addFriend(friendId)
    .then(data => {

      dispatch(addedFriend(data))
    })
}

const addedFriend = (newFriend) => ({
  type: userConstants.ADD_FRIEND,
  payload: newFriend
})


// login success
const loginSuccess = ({user}) => ({
  type: userConstants.LOGIN_SUCCESS,
  user
})

// beginning login async action
const loginRequest = ({
  type: userConstants.LOGIN_REQUEST
})

// login failure error
const loginFailure = err => ({
  type: userConstants.LOGIN_FAILURE,
  payload: err.message
})

// signup success
const signupSuccess = ({user}) => ({
  type: userConstants.SIGNUP_SUCCESS,
  user
})

// beginning signup async action
// const signupRequest = {
//   type: userConstants.SIGNUP_REQUEST
// }

// signup failure error
const signupFailure = err => ({
  type: userConstants.SIGNUP_FAILURE,
  payload: err.message
})
