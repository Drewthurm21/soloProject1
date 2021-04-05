import { useState } from 'react';
import { useSelector } from 'react-redux';

import { csrfFetch } from '../../store/csrf'
import './postcommentform.css'


export const PostCommentForm = ({ storyId }) => {
  const user = useSelector(state => state.session.user);
  const [comment, setComment] = useState('');
  const [errors, setErrors] = useState([]);

  if (!user) return null;

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrors([])
    if (!comment.length) return

    const cmnt = {
      userId: user.id,
      articleId: storyId,
      comment,
    }

    let response = await csrfFetch(`/api/comments`, {
      method: 'POST',
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(cmnt)
    })

    if (response.ok) {
    }
  }

  return (
    <div className="postComment-form-container">
      <h2>What did you think of this story?</h2>
      <form>
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