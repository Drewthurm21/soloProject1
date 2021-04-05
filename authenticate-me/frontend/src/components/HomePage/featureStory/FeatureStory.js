import { Link } from 'react-router-dom'

const FeatureStory = ({ story }) => {

  return (
    <div className='feature'>
      <img className='feature-story-img' src={story.img}></img>
      <h1><Link to={`/stories/${story.id}`}>{story.title}</Link></h1>
      <p>Written by  :
        <Link className='.btn' to={`/storiesby/${story.User.id}`}>{story.User.username}</Link>
      </p>
      <div className='feature-story-content'>
        <p>{story.content}</p>
      </div>
    </div>
  )
}

export default FeatureStory;