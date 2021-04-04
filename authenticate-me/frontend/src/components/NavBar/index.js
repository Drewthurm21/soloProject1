import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { logout } from '../../store/session';
import ProfileButton from '../ProfileButton';
import './navbar.css'

const Navigation = ({ isLoaded }) => {
  const dispatch = useDispatch()
  const sessionUser = useSelector(state => state.session.user);

  let sessionLinks;
  if (sessionUser) {
    sessionLinks = (
      <ProfileButton className='btn' user={sessionUser}>Profile</ProfileButton>
    );
  } else {
    sessionLinks = (
      <>
        <NavLink className='navbar-btn btn' to="/login">Log In</NavLink>
        <NavLink className='navbar-btn btn' to="/signup">Sign Up</NavLink>
      </>
    );
  }

  const logOut = (e) => {
    e.preventDefault();
    dispatch(logout());
  };

  return (
    <>
      <nav className='navbar navbar-area'>
        <NavLink className='navbar-btn btn' exact to="/">Home</NavLink>
        {isLoaded && sessionLinks}
        {sessionUser && <div className='navbar-btn btn logout-btn' onClick={logOut}>Log Out</div>}
      </nav>
    </>
  );
}

export default Navigation;