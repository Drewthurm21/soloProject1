import StoryCardShort from '../../StoryCardShort'

const UserFeed = ({ stories }) => {
  // console.log(stories)
  // if (!stories.length < 1) return null

  return (
    <>
      {stories?.map(story => {
        return <StoryCardShort key={story.id} story={story} />
      })}
    </>
  )
}

export default UserFeed;