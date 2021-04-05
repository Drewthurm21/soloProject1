import { useEffect } from 'react';
import { NavLink, useParams } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux';
import { getStories } from '../../store/stories'
import PostCommentForm from '../PostComment/PostCommentForm'
import './singlestorypage.css'

const SingleStoryPage = () => {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getStories())
  }, [dispatch])

  const { storyId } = useParams()
  const stories = useSelector(state => state.stories.stories)
  const story = stories.find(story => story.id.toString() === storyId)

  if (!story) return null

  return (
    <div className='single-story-page'>
      <div className='img-div'>
        <img src={story.img}></img>
      </div>
      <div className='title-div'>
        <h1>{story.title}</h1>
        <p>Written by <NavLink className='author-link'
          to={`/`}>{story.User.username}</NavLink></p>
        <div className='Follw-btn'>follow</div>
      </div>
      <div className='content-div'>
        {story.content}
      </div>
      <PostCommentForm storyId={story.id} />
      <div className='comments-container'>
        {story.Comments && story.Comments.map(comment => <p>Comment: {comment.comment}</p>)}
      </div>
    </div>
  )
}

export default SingleStoryPage