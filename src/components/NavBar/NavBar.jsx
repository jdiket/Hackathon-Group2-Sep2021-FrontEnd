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

        <div className="icon__button">
          <IconButton
            component={Link}
            to="/"
          >
            <BookmarkIcon/>
          </IconButton>
        </div>
        
        <div className="icon__button">
          <IconButton
            component={Link}
            to="/"
          >
            <MessageIcon/>
          </IconButton>
        </div>

        <div className="icon__button">
          <IconButton
            className="icon__button"
            component={Link}
            to="/"
          >
            <HomeIcon/>
          </IconButton>
        </div>

        <div className="icon__button">
          <IconButton
            className="icon__button"
            onClick={handleLogOut}
            component={Link}
            to="/"
          >
            <LogoutIcon />
          </IconButton>
        </div>

      </div>
    </nav>
  );
}

export default NavBar
