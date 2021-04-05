import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getUserStories } from '../../store/stories'


const UserStories = () => {
  const dispatch = useDispatch();

  const userId = useSelector(state => state.session.user.id)

  useEffect(() => {
    dispatch(getUserStories(userId))
  }, [dispatch, userId])

  const stories = useSelector(state => state.stories.stories)

  return (
    <div>
      <StoryContainer stories={stories} />
    </div>
  )

}

export default UserStories;