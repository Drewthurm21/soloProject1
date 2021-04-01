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

  return (
    <>
      <div>
        {stories?.map(story => {
          return <StoryCardShort key={story.id} story={story} />
        })}
      </div>
    </>
  )
}

export default StoryContainer;