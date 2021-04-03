import { useState, useEffect } from "react";
import { Link } from 'react-router-dom'
import './profilebutton.css'

function ProfileButton({ user }) {
  const [showMenu, setShowMenu] = useState(false);

  const openMenu = () => {
    if (showMenu) return;
    setShowMenu(true);
  };

  useEffect(() => {
    if (!showMenu) return;

    const closeMenu = () => {
      setShowMenu(false);
    };

    document.addEventListener('click', closeMenu);

    return () => document.removeEventListener("click", closeMenu);
  }, [showMenu]);

  return (
    <>
      <div className='navbar-btn' onClick={openMenu}>
        Profile
      </div>
      {showMenu && (
        <ul className="profile-dropdown">
          <li className='profile-btn'>
            <Link className='profile-btn' to='/mystories'>My Stories</Link>
          </li>
          <li className='profile-btn'>
            <Link className='profile-btn' to='/writestory'>Write a Story</Link>
          </li>
          <li className='profile-btn'>
            <Link className='profile-btn' to='/favorites'>Favorite Authors</Link>
          </li>
        </ul>
      )}
    </>
  );
}

export default ProfileButton;