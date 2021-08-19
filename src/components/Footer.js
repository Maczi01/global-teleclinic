import React from "react";
import { makeStyles } from "@material-ui/core/styles";
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
  },
  text: {
    margin: "0 40px",
  },
}));
const Footer = () => {
  const classes = useStyles();

  return (
    <Box className={classes.root} bgcolor="text.primary">
      <Box className={classes.text}>@Global Teleclinic</Box>
    </Box>
  );
};

export default Footer;
