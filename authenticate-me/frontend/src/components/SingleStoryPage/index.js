import { useEffect } from 'react';
import { NavLink, useParams } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux';
import { getStories } from '../../store/stories'
import './singlestorypage.css'

const SingleStoryPage = () => {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getStories())
  }, [dispatch])



  const { storyId } = useParams()
  const story = useSelector(state => state.stories.stories[storyId])

  if (!story) return null

  return (
    <div className='single-story-page'>
      <div className='img-div'>
        <img src={story.img}></img>
      </div>
      <div className='title-div'>
        <h1>{story.title}</h1>
        <p>Written by <NavLink to={`/`}>{story.User.username}</NavLink></p>
        <p>follow</p>
      </div>
      <div className='content-div'>
        {story.content}
      </div>
    </div>
  )
}

export default SingleStoryPage