import { useState, useEffect } from "react";
import { Link } from 'react-router-dom'

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
      <button onClick={openMenu}>
        <i class="fas fa-door-open"></i>
      </button>
      {showMenu && (
        <ul className="profile-dropdown">
          <li>
            <Link to='/favorites'>Favorite Authors</Link>
          </li>
          <li>
            <Link to='/myArticles'>My Articles</Link>
          </li>
          <li>
            <Link to='/profile'>My Profile</Link>
          </li>
        </ul>
      )}
    </>
  );
}

export default ProfileButton;