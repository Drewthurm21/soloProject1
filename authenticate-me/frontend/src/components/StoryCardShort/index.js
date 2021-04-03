

const StoryCardShort = ({ story }) => {

  const sentenceArr = story.content.split('. ')
  const synopsis = sentenceArr.slice(0, 3).join('. ')
  // console.log("THIS IS STORY", story)
  return (
    <div>
      <h3>{story.title}</h3>
      <div >
        <img src={story.img}></img>
      </div>
      <div>
        <p>{synopsis}</p>
        <p>{story.authorId}</p>
      </div>
    </div>
  )
}

export default StoryCardShort;