import StoryContainer from "../StoryContainer"

const Homepage = () => {

  //grab proper sets of stories to pass each component
  //rather than grabbing all stories




  return (
    <>
      {/* <div className='page-wrapper'> */}
      <div className='homepage-grid'>
        <div className='top-stories'>
          <StoryContainer className='feature-story' />
          <StoryContainer className='top-five' />
        </div>
        <div className='user-feed'>
          <StoryContainer />
        </div>
      </div>
      {/* </div> */}
    </>
  )
}

export default Homepage;