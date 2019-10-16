import {
  userConstants
} from '../../types'

const initialState = null

export default (state = initialState, action) => {
  const { user } = action
  switch (action.type) {
    case userConstants.ADD_FRIEND:
      return {...state, friends: [...state.friends, action.payload]}
    case userConstants.LOGIN_SUCCESS:
    console.log(user, action)
      return user
    case userConstants.SIGNUP_SUCCESS:
      return user
    case userConstants.LOGOUT:
      return null
    default:
      return state
  }
}
