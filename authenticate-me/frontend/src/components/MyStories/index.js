import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getUserStories } from '../../store/stories'

import StoryContainer from '../StoryContainer/'
// import './mystories.css'


const MyStories = (stories) => {
  const dispatch = useDispatch();

  const userId = useSelector((state) => state.session.user?.id)
  console.log('USERID HERE', userId)


  useEffect(() => {
    dispatch(getUserStories(userId))
  }, [dispatch])


  return (
    <>
      <div className=''>
        <StoryContainer stories={stories} />
      </div>
    </>
  )
}

export default MyStories;