import csrfFetch from './csrf'

const SET_USER = 'session/setUser';
const REMOVE_USER = 'session/removeUser';

//set current user in state
const setUser = (user) => {
  return {
    type: SET_USER,
    user,
  }
}

//remove current user from state
const removeUser = () => {
  return {
    type: REMOVE_USER,
  }
}

//
export const login = (user) => async (dispatch) => {
  const { credential, password } = user;
  const response = await csrfFetch('/api/session', {
    method: 'POST',
    body: JSON.stringify({
      credential,
      password,
    }),
  });
  const data = await response.json();
  dispatch(setUser(data.user));
  return response;
};

const sessionReducer = (state = { user: null }, action) => {
  let newState;
  switch (action.type) {
    case SET_USER:
      newState = { ...state }
      newState.user = action.payload;
      return newState;
    case REMOVE_USER:
      newState = { ...state }
      newState.user = null;
      return newState;
    default:
      return state;
  }
};

export default sessionReducer;