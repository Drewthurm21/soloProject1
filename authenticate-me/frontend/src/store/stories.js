
const LOAD = 'stories/LOAD'
// const POST = 'stories/POST'
// const DELETE = 'stories/DELETE'

const load = (stories) => ({
  type: LOAD,
  stories
})

export const getStories = () => async dispatch => {
  const response = await fetch(`/api/stories`);

  if (response.ok) {
    const stories = await response.json();
    dispatch(load(stories.result));
  }
};

const initialState = {
  stories: []
}

const storiesReducer = (state = initialState, action) => {
  let newState;

  switch (action.type) {
    case LOAD: {
      newState = { ...state }
      action.stories.forEach(story => (
        newState.stories[story.id] = story))
      return newState
    }
    default:
      return state
  }
}

export default storiesReducer;