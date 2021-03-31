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
  // const followed = stories.filter(story => story.)

  return (
    <>
      <div>
        {stories?.map(story => {
          return <StoryCardShort key={story.id} story={story} />
        })}
      </div>
      <div>nope =[</div>
    </>
  )
}

export default StoryContainer;