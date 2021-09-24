import './navbar.css';
import { Link } from 'react-router-dom';
import React from 'react';
import {
  AppBar,
  Toolbar,
  Button,
  useScrollTrigger,
  Slide,
  Container,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

import HomeIcon from "@material-ui/icons/Home";
import BookmarkIcon from "@material-ui/icons/Bookmark";
import MessageIcon from "@material-ui/icons/Message";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1
  },
  menuButton: {
    marginRight: theme.spacing(2)
  },
  title: {
    flexGrow: 1
  },
  backgroundWhite: {
    backgroundColor:'white'
  }
}));

function HideOnScroll(props) {
  const { children } = props;
  const trigger = useScrollTrigger();

  return (
    <Slide appear={false} direction={"down"} in={!trigger}>
      {children}
    </Slide>
  );
}

export default function NavBar(props) {

  const classes = useStyles();

  return (
    <nav className="navbar-shadow background-override">
      <Container>
        <AppBar
          color="backgroundWhite">
          <Toolbar>
            <h1 className={classes.root}>Dog Day</h1>
            <div style={{ marginRight: "2rem" }}>
              <Button
                variant="text"
                component={Link}
                to="/bookmark"
                color="default"
              >
                <BookmarkIcon />
              </Button>
              <Button
                variant="text"
                component={Link}
                to="/"
                color="default"
              >
                <MessageIcon />
              </Button>
              <Button
                variant="text"
                component={Link}
                to="/"
                color="default"
              >
                <HomeIcon />
              </Button>
            </div>
          </Toolbar>
        </AppBar>
      </Container>
    </nav>
  );
}