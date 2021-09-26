import './NavBar.css';
import { Link } from 'react-router-dom';
import React from 'react';

// Material UI imports
import { IconButton } from '@mui/material';
import HomeIcon from "@material-ui/icons/Home";
import BookmarkIcon from "@material-ui/icons/Bookmark";
import MessageIcon from "@material-ui/icons/Message";
import LogoutIcon from '@mui/icons-material/Logout';
import { logOut } from '../../utilities/services/users-service';


const NavBar = (props) => {

  const handleLogOut = () => {
    console.log(props)
    logOut();
    props.setUser(null)
  }

  return (
    <nav className="NavBar navbar-shadow background-override">
      <div className="nav__header">
        <h1>Dog Day</h1>
      </div>
            
      <div className="nav__icons">
        <IconButton>
          <Link to="/bookmark">
            <BookmarkIcon className="icon__button" />
          </Link>
        </IconButton>
        <IconButton>
          <Link to="/">
            <MessageIcon className="icon__button" />
          </Link>
        </IconButton>
        <IconButton>
          <Link to="/">
            <HomeIcon className="icon__button" />
          </Link>
        </IconButton>
        <IconButton
          onClick={handleLogOut}
          component={Link}
          to="/"
        >
          <LogoutIcon />
        </IconButton>
      </div>
    </nav>
  );
}

export default NavBar
