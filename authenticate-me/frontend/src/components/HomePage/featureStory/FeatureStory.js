import { Link } from 'react-router-dom'
import './featurestory.css'
const FeatureStory = ({ story }) => {

  console.log(story)
  return (
    <div className='feature'>
      <img className='feature-story-img' src={story.img}></img>
      <h1>{story.title}</h1>
      <p>Written by  :
        <Link className='.btn' to={`/storiesby/${story.User.id}`}>{story.User.username}</Link>
      </p>
      <div>
        <p>{story.content}</p>
      </div>
    </div>
  )
}

export default FeatureStory;