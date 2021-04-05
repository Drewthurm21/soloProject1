import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getStories } from '../../store/stories'
import { getUserInfo } from '../../store/user'
import { getFeedStories } from '../../store/stories'
import './homepage.css'

import FeatureStory from './featureStory/FeatureStory'
import TopFour from './topfour/TopFour'
import UserFeed from './userfeed/UserFeed'


const Homepage = ({ userId }) => {

  const dispatch = useDispatch()
  const curUser = useSelector(state => state.session.user)
  const stories = useSelector(state => state.stories.stories)
  const userFeed = useSelector(state => state.stories.userFeed)

  useEffect(() => {
    dispatch(getStories())
  }, [dispatch])

  useEffect(() => {
    dispatch(getFeedStories(curUser !== undefined ? curUser.id : userId))
  }, [dispatch, userId, curUser])

  useEffect(() => {
    dispatch(getUserInfo(curUser !== undefined ? curUser.id : userId))
  }, [dispatch, userId, curUser])


  const sorted = stories?.sort((s1, s2) => s2.Likes.length - s1.Likes.length)
  const featureStory = sorted[0]
  const top4 = sorted.slice(1, 5)

  if (!stories.length) return null;


  return (
    <>
      {userFeed &&
        (<div className='homepage-grid2'>
          <div className='top-story'>
            <FeatureStory story={featureStory} />
          </div>
          <div className='top-four'>
            <TopFour stories={top4} className='top-four' />
          </div>
          <div className='user-feed'>
            <UserFeed stories={sorted} className='user-feed' />
          </div>
        </div>)
      }
    </>
  )
}

export default Homepage;