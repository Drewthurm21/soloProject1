import StoryCardShort from '../../StoryCardShort'

const TopFour = ({ stories }) => {
  console.log(stories)
  return (
    <div>
      {stories.map(story => (
        <StoryCardShort story={story} />
      ))}
    </div>
  )
}

export default TopFour;