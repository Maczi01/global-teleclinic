import Navbar from "./Navbar";
import React from "react";
import Footer from "./Footer";
import Box from "@material-ui/core/Box";
import logo from "./assets/logo.svg";
import IconButton from "@material-ui/core/IconButton";
import confirmImage from "./assets/confirmImage.svg";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  root: {
    width: "100%",
    display: "flex",
    flexDirection: "column",
    height: "100vh",
    alignItems: "center",
    justifyContent: "center",
    margin: "0 auto",
  },
});

const ConfirmView = () => {
  const classes = useStyles();

  return (
    <>
      <Navbar />
      <div className={classes.root}>
        <Typography variant="h3" component="div">
          <Box fontWeight="fontWeightBold" m={1}>Konsultacja została umówiona</Box>
        </Typography>
        <Typography variant="h6" component="div">
          <Box m={1}>Dziękujemy za skorzystanie z usługi </Box>
        </Typography>
        <img src={confirmImage} alt="logo" />
      </div>
      <Footer />
    </>
  );
};

export default ConfirmView;
