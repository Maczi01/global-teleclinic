import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper/Paper";
import React from "react";
import Box from "@material-ui/core/Box";
import Avatar from "@material-ui/core/Avatar";
import Card from "@material-ui/core/Card/Card";
import Grid from "@material-ui/core/Grid";

import { makeStyles } from "@material-ui/core";
const useStyles = makeStyles(() => ({
  root: {
    display: "flex",
    // flexDirection: "row",
    justifyContent: "space-between",
    height: "200px",
    // padding: "20px",
    margin: "0 auto",
    width: "100%",
  },
  box: {
    // width: "200px",
    // height: "100px",
    // backgroundColor: "rgb(220, 0, 78)",
    // display: "flex",
    // flexDirection: "column",
    // justifyContent: "center",
    // alignItems: "center",
    margin: "10px",
  },
  avatar: {
    width: "150px",
    height: "150px",
    margin: "10px",
  },
  details: {
    display: "flex",
    flexDirection: "column",
  },
  content: {
    flex: "1 0 auto",
  },
}));

const DoctorCard = ({ consultation }) => {
  const { description, name, position } = consultation;

  const classes = useStyles();
  console.log(description);
  return (
    <Card p={8} className={classes.root} md={6}>
      <Box className={classes.box}>
        {/*  TODO zmienić fontweight na bold*/}
        <Typography variant="h4">{name}</Typography>
        <Typography variant="body1">{position}</Typography>
        <Typography variant="body2">
          {/*{cutDescription(description)}*/}
          {description}
        </Typography>
      </Box>
      <Avatar className={classes.avatar}>H</Avatar>
    </Card>
  );
};

export default DoctorCard;
