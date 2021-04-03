import csrfFetch from '../store/csrf'
const LOAD = 'stories/LOAD'
const POST = 'stories/POST'
// const DELETE = 'stories/DELETE'

const load = (stories) => ({
  type: LOAD,
  stories
})
const post = (story) => ({
  type: POST,
  story
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

export const postStory = (story) => async (dispatch) => {
  console.log(story)

  const response = await csrfFetch(`/api/stories`, {
    method: 'POST',
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ story })
  })
  if (response.ok) {

    console.log(response)
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
    case POST: {
      return {
        ...state,
        stories: [...state.stories, action.story]
      }
    }
    default:
      return state
  }
}

export default storiesReducer;