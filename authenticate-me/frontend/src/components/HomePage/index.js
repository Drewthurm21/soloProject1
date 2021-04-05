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

  useEffect(() => {
    dispatch(getStories())
  }, [dispatch])

  useEffect(() => {
    dispatch(getFeedStories(userId))
  }, [dispatch])

  useEffect(() => {
    dispatch(getUserInfo(userId))
  })

  const stories = useSelector(state => state.stories.stories)
  const curUser = useSelector(state => state.session.user)
  const feedStories = useSelector(state => state.stories.userFeed)

  const sorted = stories?.sort((s1, s2) => s2.Likes.length - s1.Likes.length)
  const featureStory = sorted[0]
  const top4 = sorted.slice(1, 5)

  console.log(feedStories[0])

  if (!stories.length) return null;

  return (
    <>
      <div className='homepage-grid2'>
        <div className='top-story'>
          <FeatureStory story={featureStory} />
        </div>
        <div className='top-four'>
          <TopFour stories={top4} className='top-four' />
        </div>
        <div className='user-feed'>
          <UserFeed stories={sorted} className='user-feed' />
        </div>
      </div>
    </>
  )
}

export default Homepage;