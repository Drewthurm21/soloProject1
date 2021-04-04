import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getStories } from '../../store/stories'
import StoryCardShort from '../StoryCardShort'


const TopStories = ({ stories }) => {



  return (
    <>
      <div>
        {stories?.map(story => {
          return <StoryCardShort key={story.id} story={story} />
        })}
      </div>
    </>
  )
}


export default TopStories