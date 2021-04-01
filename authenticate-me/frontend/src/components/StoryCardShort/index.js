

const StoryCardShort = ({ story }) => {

  const sentenceArr = story.content.split('. ')
  const synopsis = sentenceArr.slice(0, 2).join('. ')
  // console.log("THIS IS STORY", story)
  return (
    <div>
      <h3>{story.title}</h3>
      <p>{synopsis}</p>
    </div>
  )
}

export default StoryCardShort;