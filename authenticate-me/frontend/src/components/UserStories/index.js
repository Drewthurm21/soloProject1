import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getUserStories } from '../../store/stories'


const UserStories = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUserStories())
  }, [dispatch])

  const stories = useSelector(state => state.stories.stories)

  return (
    <div>
      <StoryContainer stories={stories} />
    </div>
  )

}

export default UserStories;