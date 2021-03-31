import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Route, Switch } from "react-router-dom";
import * as sessionActions from "./store/session";

//components
import LoginForm from "./components/LoginForm";
import SignupForm from "./components/SignupForm"
import NavBar from "./components/NavBar"
import StoryContainer from './components/StoryContainer'

function App() {
  const dispatch = useDispatch();
  const [isLoaded, setIsLoaded] = useState(false);
  useEffect(() => {
    dispatch(sessionActions.restoreUser()).then(() => setIsLoaded(true));
  }, [dispatch]);

  return (
    <>
      <NavBar isLoaded={isLoaded} />
      {isLoaded && (
        <Switch>
          <Route exact path='/'>
            <StoryContainer />
          </Route>
          <Route path="/login">
            <LoginForm />
          </Route>
          <Route path='/signup'>
            <SignupForm />
          </Route>
        </Switch>
      )}
    </>
  );
}

export default App;