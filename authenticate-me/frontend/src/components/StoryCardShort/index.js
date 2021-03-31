

const StoryCardShort = (props) => {
  const { story } = props
  return (
    <div>
      <h3>Title: {story.title}</h3>
      <p> Content: {story.content}</p>
    </div>
  )
}

export default StoryCardShort;