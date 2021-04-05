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
      <div className='navbar-btn btn' onClick={openMenu}>
        Stories Menu
      </div>

      {showMenu && (
        <>
          <div className='profile-btn profile-inner-btn'>
            <Link className='profile-btn navbar-btn' to='/mystories'>My Stories</Link>
          </div>
          <div className='profile-btn profile-inner-btn'>
            <Link className='profile-btn navbar-btn' to='/writestory'>Write a Story</Link>
          </div>
          {/* <div className='profile-btn profile-inner-btn'>
            <Link className='profile-btn navbar-btn' to='/favorites'>Favorite Authors</Link>
          </div> */}
        </>
      )}
    </>
  );
}

export default ProfileButton;