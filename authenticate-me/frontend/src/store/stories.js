import csrfFetch from '../store/csrf'
const LOAD = 'stories/LOAD'
const LOAD_ONE = 'stories/LOAD_ONE'
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

// const load_one = (story) => ({
//   type: POST,
//   story
// })


export const getStory = (userId) => async (dispatch) => {
  const response = await fetch(`/api/stories/${userId}`)

  if (response.ok) {
    const story = await response.json()
    dispatch(load(story.story))
  }
}

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
    const authorStories = await response.json()

    dispatch(load(authorStories))
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

  const response = await csrfFetch(`/api/stories`, {
    method: 'POST',
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ story })
  })

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
    case LOAD_ONE: {
      return {
        ...state,
        stories: [...state.stories],
        singleStory: [action.story]
      }
    }
    default:
      return state
  }
}

export default storiesReducer;