import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getUserStories } from '../../store/stories'
import './mystories.css'

import StoryContainer from '../StoryContainer/'
// import './mystories.css'


const MyStories = (stories) => {
  const dispatch = useDispatch();

  const userId = useSelector((state) => state.session.user?.id)

  useEffect(() => {
    dispatch(getUserStories(userId))
  }, [dispatch])


  return (
    <>
      <div className='mystories-wrap'>
        <StoryContainer stories={stories} />
      </div>
    </>
  )
}

export default MyStories;