import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { logout } from '../../store/session';

import ProfileButton from '../ProfileButton';

const Navigation = ({ isLoaded }) => {
  const dispatch = useDispatch()
  const sessionUser = useSelector(state => state.session.user);

  let sessionLinks;
  if (sessionUser) {
    sessionLinks = (
      <ProfileButton user={sessionUser}>Profile</ProfileButton>
    );
  } else {
    sessionLinks = (
      <>
        <NavLink to="/login">Log In</NavLink>
        <NavLink to="/signup">Sign Up</NavLink>
      </>
    );
  }

  const logOut = (e) => {
    e.preventDefault();
    dispatch(logout());
  };

  return (
    <>
      <nav>
        <NavLink exact to="/">Home</NavLink>
        {isLoaded && sessionLinks}
        <button onClick={logOut}>Log Out</button>
      </nav>
    </>
  );
}

export default Navigation;