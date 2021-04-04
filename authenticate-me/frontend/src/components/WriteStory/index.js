import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getUserStories } from '../../store/stories'

import RichTextEditor from '../RichTextEditor/'



const WriteStory = (stories) => {
  const dispatch = useDispatch();
  const userId = useSelector((state) => state.session.user?.id)

  useEffect(() => {
    dispatch(getUserStories(userId))
  }, [dispatch])

  if (!userId) return null;

  return (
    <>
      <RichTextEditor />
    </>
  )
}

export default WriteStory;