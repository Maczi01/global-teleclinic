import React from "react";
import {makeStyles} from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import logo from "../assets/logo.svg";
import {Link} from "react-router-dom";

const useStyles = makeStyles(() => ({
  root: {
    flexGrow: 1,
    position: "fixed",
    left: "0",
    top: "0",
    width: "100%",
  },
  bar: {
    backgroundColor: "#ffffff",
  },
  title: {
    flexGrow: 1,
  },
}));

const Navbar = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar className={classes.bar} position="static" elevation={0}>
        <Toolbar>
          <Link to={"/"}>
            <IconButton
              edge="start"
              className={classes.menuButton}
              color="inherit"
              aria-label="menu"
            >
              <img src={logo} alt="logo" />
            </IconButton>
          </Link>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Navbar;
