import React from 'react';
import styled from "styled-components"
import { Link } from 'react-router-dom';

// Material UI imports
import { IconButton } from '@mui/material';
import HomeIcon from "@material-ui/icons/Home";
import BookmarkIcon from "@material-ui/icons/Bookmark";
import MessageIcon from "@material-ui/icons/Message";
import LogoutIcon from '@mui/icons-material/Logout';

export const NavBar = (props) => {
  const icons = [
    {
      'icon': <BookmarkIcon/>,
      "link": "/bookmarks"
    }, {
      'icon': <MessageIcon/>,
      "link": "/"
    }, {
      'icon': <HomeIcon/>,
      "link": "/"
    }, {
      'icon': <LogoutIcon />,
      "link": "/"
    }
  ]

  return (
    <NavBarStyled>
      <Link to="/" className="nav__header">
        <h1>Dog Day</h1>
      </Link>
            
      <div className="nav__icons">
        {icons.map(icon => (
          <div className="icon__button">
            <IconButton
              component={Link}
              to={icon.link}
            > {icon.icon}
            </IconButton>
          </div>
        ))}
      </div>
    </NavBarStyled>
  );
};

const NavBarStyled = styled.div`
  grid-column: 2 / span 12;
  grid-row: 1 / 2;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: whitesmoke;
  border-bottom: 1px solid #f9f9f9;
  /* offset-x | offset-y | blur-radius | spread-radius | color */
  box-shadow: 
    0px 3px 1px -1px rgb(0 0 0 / 20%), 
    0px 2px 1px 0px rgb(0 0 0 / 14%), 
    0px 2px 3px 0px rgb(0 0 0 / 12%);
  height: 10vh;
  width: 100%;
  & .nav__header {
    margin-left: 2vw;
    color: ${props => props.theme.colors.dark};
  }
  & .nav__icons {
    margin-right: 1.5em;
    display: flex;
  }
  & .icon__button {
    margin: auto .8vw;
  }

  @media ${props => props.theme.breakpoints.tablet} {
    grid-column: 2 / span 6;
  }

  @media ${props => props.theme.breakpoints.mobile} {
    
  }
`;