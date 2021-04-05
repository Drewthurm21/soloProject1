import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Route, Switch } from "react-router-dom";
import * as sessionActions from "./store/session";
import getUserInfo from './store/user'

//components
import LoginForm from "./components/LoginForm";
import SignupForm from "./components/SignupForm"
import NavBar from "./components/NavBar"
import Homepage from './components/HomePage/'
import MyStories from './components/MyStories'
import Footer from './components/Footer'
import WriteStory from "./components/WriteStory";
import StoryPage from './components/SingleStoryPage'

function App() {
  const dispatch = useDispatch();
  const [isLoaded, setIsLoaded] = useState(false);
  useEffect(() => {
    dispatch(sessionActions.restoreUser()).then(() => setIsLoaded(true));

  }, [dispatch]);

  return (
    <>
      <NavBar className='navbar navbar-area' isLoaded={isLoaded} />
      <div className='app-wrapper'>
        {isLoaded && (
          <Switch>
            <Route exact path='/'>
              <Homepage userId={1} />
            </Route>
            <Route path='/mystories'>
              <MyStories />
            </Route>
            <Route path='/writestory'>
              <WriteStory />
            </Route>
            <Route path="/login">
              <LoginForm />
            </Route>
            <Route path='/signup'>
              <SignupForm />
            </Route>
            <Route path='/stories/:storyId'>
              <StoryPage />
            </Route>
          </Switch>
        )}
      </div>
      <Footer />
    </>
  );
}

export default App;