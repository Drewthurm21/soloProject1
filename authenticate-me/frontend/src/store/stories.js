
const LOAD = 'stories/LOAD'
// const POST = 'stories/POST'
// const DELETE = 'stories/DELETE'

const load = (stories) => ({
  type: LOAD,
  stories
})


export const getStories = () => async (dispatch) => {
  const response = await fetch(`/api/stories`);

  if (response.ok) {
    const stories = await response.json();
    dispatch(load(stories.result));
  }
};

export const getUserStories = (userId) => async (dispatch) => {
  const response = await fetch(`/api/stories/byauthor/${userId}`)

  if (response.ok) {
    const stories = await response.json()

    dispatch(load(stories.authorStories))
  }
}

export const getFeedStories = (userId) => async (dispatch) => {
  const response = await fetch(`/api/stories/followed/${userId}`)

  if (response.ok) {
    const stories = await response.json()
    dispatch(load(stories.feedStories))
  }
}

const initialState = {
  stories: []
}

const storiesReducer = (state = initialState, action) => {

  switch (action.type) {
    case LOAD: {
      return {
        ...state,
        stories: [...action.stories]
      }
    }
    default:
      return state
  }
}

export default storiesReducer;