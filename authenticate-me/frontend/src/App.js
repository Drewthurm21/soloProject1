import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Route, Switch } from "react-router-dom";
import * as sessionActions from "./store/session";

//components
import LoginForm from "./components/LoginForm";
import SignupForm from "./components/SignupForm"
import NavBar from "./components/NavBar"
import Homepage from './components/HomePage/'

function App() {
  const dispatch = useDispatch();
  const [isLoaded, setIsLoaded] = useState(false);
  useEffect(() => {
    dispatch(sessionActions.restoreUser()).then(() => setIsLoaded(true));
  }, [dispatch]);

  return (
    <>
      <div className={'app-grid-container'}>
        <div className={'navBar flex-container'}>
          <NavBar isLoaded={isLoaded} />
        </div>
        {isLoaded && (
          <Switch>
            <Route exact path='/'>
              <Homepage />
            </Route>
            <Route path="/login">
              <LoginForm />
            </Route>
            <Route path='/signup'>
              <SignupForm />
            </Route>
          </Switch>
        )}
        <div className={'footer flex-container'}>
          this will be footer
            </div>
      </div>
    </>
  );
}

export default App;