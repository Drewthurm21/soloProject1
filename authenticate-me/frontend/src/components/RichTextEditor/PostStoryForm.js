import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect, useHistory } from 'react-router-dom';
import { postStory } from '../../store/stories'

import './poststoryform.css'

const randomNumber = (num) => Math.floor(Math.random() * Math.floor(num) + 1)

export const PostStoryForm = ({ grabText }) => {
  const dispatch = useDispatch();
  const history = useHistory()
  const user = useSelector(state => state.session.user);
  const [title, setTitle] = useState('');
  const [img, setImg] = useState('');
  const [errors, setErrors] = useState([]);


  if (!user) return <Redirect to="/" />;

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrors([])
    const storyBody = grabText()
    if (!title.length) errors.push('Please provide a title.')
    if (!storyBody.length) errors.push('Please share a story.')
    if (errors.length > 0) return
    const story = {
      authorId: user.id,
      categoryId: randomNumber(19),
      title,
      content: storyBody,
      img,
    }

    dispatch(postStory(story))

    history.push('/mystories')
  }

  return (
    <div className="postStory-form-container">
      <h2>What's on your mind?</h2>
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
            onChange={(e) => setImg(e.target.value)}
            required
          />
          <label>
            Image URL
          </label>
        </div>
        <p onClick={handleSubmit}>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          Submit
        </p>
      </form>
    </div>
  )
}

export default PostStoryForm;