import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getStories } from '../../store/stories'
import './homepage.css'

import StoryContainer from "../StoryContainer"
import FeatureStory from './featureStory/FeatureStory'
import TopFour from './topfour/TopFour'
const Homepage = () => {

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getStories())
  }, [dispatch])

  const stories = useSelector(state => state.stories.stories)
  const featureStory = stories[0]
  const top4 = stories.slice(1, 5)
  // console.log(top5)

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
        <div>
          <StoryContainer className='user-feed' />
        </div>
      </div>
    </>
  )
}

export default Homepage;