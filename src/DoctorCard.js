import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper/Paper";
import React from "react";
import Box from "@material-ui/core/Box";
import Avatar from "@material-ui/core/Avatar";
import Card from "@material-ui/core/Card/Card";
import { makeStyles } from "@material-ui/core";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles(() => ({
  root: {
    display: "flex",
    // flexDirection: "row",
    justifyContent: "space-between",
    height: "200px",
    padding: "20px",
  },
  box: {
    width: "200px",
    height: "100px",
    backgroundColor: "rgb(220, 0, 78)",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  avatar: {
    width: "150px",
    height: "150px",
  },
  details: {
    display: "flex",
    flexDirection: "column",
  },
  content: {
    flex: "1 0 auto",
  },
}));

const DoctorCard = () => {
  const cutDescription = (description) =>
    description.length > 50
      ? `${description.substring(0, 30)}...`
      : description;

  const classes = useStyles();

  return (
    <Card p={8} className={classes.root}>
      <Box>
        {/*  TODO zmienić fontweight na bold*/}
        <Typography variant="h4">lek. Gregory House</Typography>
        <Typography variant="body1">Internista</Typography>
        <Typography variant="body2">
          "Lekarz z wieloletnim doświadczeniem w pracy za granicą. Absolwent
          Królewskiej Szkoły Chirurgów w Irlandii (RCSI), Członek Niemieckigo
          Towarzystwa Urolgicznego (DGU), Członek Europejskiego Towarzystwa
          Urologicznego (EAU)."
        </Typography>
      </Box>
      <Avatar className={classes.avatar}>H</Avatar>
    </Card>
  );
};

export default DoctorCard;
