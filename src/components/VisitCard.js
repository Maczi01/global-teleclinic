import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardHeader from "@material-ui/core/CardHeader";
import React from "react";
import { makeStyles } from "@material-ui/core";
import Box from "@material-ui/core/Box";
import Avatar from "@material-ui/core/Avatar";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import {getDayAndMonth, getHour} from "../utils/utils";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: "100%",
    height: "100px",
    padding: "4px 20px",
    margin: "2px 20px",
    [theme.breakpoints.down("sm")]: {
      height: "60px",
      padding: "2px 6px",
    },
  },
  active: {
    width: "120px",
    height: "70px",
    backgroundColor: (active) => (active ? "#f50057" : "#eeeeee"),
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    [theme.breakpoints.down("sm")]: {
      height: "45px",
      padding: "4px 6px",
      width: "90px",
    },
  },
  avatar: {
    width: "80px",
    height: "80px",
    margin: "5px",
  },
  details: {
    display: "flex",
    flexDirection: "column",
  },
  content: {
    margin: "0 20px",
    flex: "1 0 auto",
  },
}));

const VisitCard = ({ visit, chooseCurrentVisit, active }) => {
  const { name, position, date } = visit;
  const classes = useStyles(active);
  return (
    <Card
      onClick={chooseCurrentVisit}
      className={classes.root}
      elevation={2}
      display={{ xs: "none", sm: "none", md: "none", lg: "none" }}
    >
      <CardContent>
        {/*TODO nazwa classes box czy classes paper?*/}
        <Box className={classes.active}>
          {/*TODO sprawdzić zaokrąglenia*/}
          <Typography align="center">
            <Box variant="h6" color={active ? "#ffffff" : "#000000"}>
              {getDayAndMonth(date)}
            </Box>
            <Box
              fontSize={24}
              fontWeight={700}
              color={active ? "#ffffff" : "#f50057"}
              variant="h5"
            >
              {getHour(date)}
            </Box>
          </Typography>
        </Box>
      </CardContent>
      <Box display={{ xs: "none", sm: "none", md: "block" }}>
        <Avatar className={classes.avatar}>H</Avatar>
      </Box>
      <Typography className={classes.content}>
        <Box fontWeight={700}>lek. {name}</Box>
        <Box fontWeight={500}>{position}</Box>
      </Typography>
      <Box display={{ xs: "none", sm: "none", md: "block" }}>

        <ArrowForwardIosIcon style={{ color: "#f50057", display: active ? "block" : "none" }} />
      </Box>
    </Card>
  );
};

export default VisitCard;
