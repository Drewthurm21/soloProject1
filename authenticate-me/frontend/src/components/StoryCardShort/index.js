import { Link } from 'react-router-dom'
import './storycardshort.css'
const StoryCardShort = ({ story }) => {
  const sentenceArr = story.content.split('. ')
  const synopsis = sentenceArr.slice(0, 3).join('. ')

  return (
    <div className='short-story-card-wrap'>
      <div>
        <Link to={`/stories/${story.id - 1}`}>
          <h3>{story.title}</h3>
        </Link>
        <div >
          <img src={story.img}></img>
        </div>
      </div>
      <div>
        <p>{synopsis}</p>
        <p>Written by {story.User.username}</p>
      </div>
    </div>
  )
}

export default StoryCardShort;