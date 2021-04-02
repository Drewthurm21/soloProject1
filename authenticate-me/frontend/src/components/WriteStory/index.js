import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getUserStories } from '../../store/stories'

import RichTextEditor from '../RichTextEditor/'



const WriteStory = (stories) => {
  const dispatch = useDispatch();

  const userId = useSelector((state) => state.session.user?.id)
  console.log('USERID HERE', userId)


  useEffect(() => {
    dispatch(getUserStories(userId))
  }, [dispatch])


  return (
    <>
      <div className='flex-container'>
        <div>
          What's on your mind?
        </div>
        <RichTextEditor />
      </div>
    </>
  )
}

export default WriteStory;