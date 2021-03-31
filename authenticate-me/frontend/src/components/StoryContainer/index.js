import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getStories } from '../../store/stories'
import StoryCardShort from '../StoryCardShort'


const StoryContainer = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getStories())
  }, [dispatch])

  const stories = useSelector(state => state.stories.stories)

  console.log(stories)

  return (
    <>
      {stories.map(story => {
        return <StoryCardShort key={story.id} story={story} />
      })}
      <div>hey</div>
    </>
  )
}

export default StoryContainer;