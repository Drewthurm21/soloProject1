import StoryCardShort from '../../StoryCardShort'

const UserFeed = ({ stories }) => {

  return (
    <>
      {stories?.map(story => {
        return <StoryCardShort key={story.id} story={story} />
      })}
    </>
  )
}

export default UserFeed;