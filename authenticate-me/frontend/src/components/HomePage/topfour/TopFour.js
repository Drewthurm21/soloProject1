import StoryCardShort from '../../StoryCardShort'

const TopFour = ({ stories }) => {

  return (
    <div>
      {stories.map(story => (
        <StoryCardShort key={story.id} story={story} />
      ))}
    </div>
  )
}

export default TopFour;