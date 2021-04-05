import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getStories } from '../../store/stories'
import './mystories.css'

// import StoryContainer from '../StoryContainer/'
import StoryCardShort from '../StoryCardShort';


const MyStories = () => {
  const dispatch = useDispatch();

  const userId = useSelector((state) => state.session.user?.id)

  useEffect(() => {
    dispatch(getStories(userId))
  }, [dispatch])

  const stories = useSelector((state) => state.stories.stories)
  const myStories = stories.filter(story => story.authorId === userId)
  console.log(myStories)

  return (
    <>
      <div className='mystories-wrap'>
        {myStories && myStories.map(story => <StoryCardShort story={story} />)}
      </div>
    </>
  )
}

export default MyStories;