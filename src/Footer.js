import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import logo from "./assets/logo.svg";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";

const useStyles = makeStyles((theme) => ({
  root: {
    position: "fixed",
    left: "0",
    bottom: "0",
    width: "100%",
    color: "#FFFFFF",
    backgroundColor: "#212121",
    minHeight: "64px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center flex-start",
    flexGrow: 1,
    // position: "fixed",
    // left: "0",
    // top: "0",
    // width: "100%",
  },
  text: {
    margin: "0 40px",
  },
}));
const Footer = () => {
  const classes = useStyles();

  return (
    <Box className={classes.root} bgcolor="text.primary">
      {/*<Container maxWidth="lg">*/}
      {/*  <Grid container spacing={5}>*/}
      {/*    <Grid item xs={12} sm={4}>*/}
      <Box className={classes.text}>@Global Teleclinic</Box>
      {/*    </Grid>*/}
      {/*  </Grid>*/}
      {/*</Container>*/}
    </Box>
  );
};

export default Footer;
