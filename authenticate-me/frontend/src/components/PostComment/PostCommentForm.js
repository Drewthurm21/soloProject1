import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect, useHistory } from 'react-router-dom';
import { postStory } from '../../store/stories'

import './postcommentform.css'

const randomNumber = (num) => Math.floor(Math.random() * Math.floor(num) + 1)

export const PostCommentForm = ({ grabText }) => {
  const dispatch = useDispatch();
  const history = useHistory()
  const user = useSelector(state => state.session.user);
  const [title, setTitle] = useState('');
  const [comment, setComment] = useState('');
  const [errors, setErrors] = useState([]);

  if (!user) return <Redirect to="/" />;

  const handleSubmit = (e) => {
    e.preventDefault();
    const storyBody = grabText()

    const story = {
      authorId: user.id,
      categoryId: randomNumber(19),
      title,
      content: comment,
    }

    dispatch(postStory(story))
    history.push('/mystories')
  }

  return (
    <div className="postComment-form-container">
      <h2>What did you think of this story?</h2>
      <form>
        <div className='info-box'>
          <input
            type="text"
            onChange={(e) => setTitle(e.target.value)}
            required
          />
          <label>
            Title:
          </label>
        </div>
        <div className='info-box'>
          <input
            type="text"
            onChange={(e) => setComment(e.target.value)}
            required
          />
          <label>
            Comment:
          </label>
        </div>
        {!errors.length && <p onClick={handleSubmit}>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          Submit
        </p>}
      </form>
    </div>
  )
}

export default PostCommentForm;