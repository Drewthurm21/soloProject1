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
      <br></br>
      <br></br>
      <h2>Stories Just For You</h2>
    </div>
  )
}

export default FeatureStory;