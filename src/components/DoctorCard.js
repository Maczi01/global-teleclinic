import Typography from "@material-ui/core/Typography";
import React from "react";
import Box from "@material-ui/core/Box";
import Avatar from "@material-ui/core/Avatar";
import Card from "@material-ui/core/Card/Card";
import Grid from "@material-ui/core/Grid";

import { makeStyles } from "@material-ui/core";
import {cutDescription} from "../utils/utils";
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

const DoctorCard = ({ description, name, position }) => {
  const classes = useStyles();
  return (
    <Card p={8} className={classes.root} md={6}>
      <Box className={classes.box}>
        <Typography variant="h4">{name}</Typography>
        <Typography variant="body1">{position}</Typography>
        <Typography variant="body2">
          {cutDescription(description)}
        </Typography>
      </Box>
      <Avatar className={classes.avatar}>H</Avatar>
    </Card>
  );
};

export default DoctorCard;
