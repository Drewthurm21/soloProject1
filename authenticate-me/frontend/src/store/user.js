import csrfFetch from '../store/csrf'

const LOAD = 'users/LOAD'

const load = (user) => ({
  type: LOAD,
  payload: user,
})

export const getUserInfo = (userId) => async (dispatch) => {
  const user = await csrfFetch(`/api/users/${userId}`)

  if (user.ok) {
    const userInfo = await user.json()
    dispatch(load(userInfo))
  }
}

const initialState = {
  user: {}
}

const userReducer = (state = initialState, action) => {

  switch (action.type) {
    case LOAD: {
      return {
        ...state,
        follows: action.payload
      }
    }
    default:
      return state;
  }
}

export default userReducer;