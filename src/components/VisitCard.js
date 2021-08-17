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
    // backgroundColor: "rgb(194,220,50)",
  },

  root1: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: "100%",
    height: "100px",
    padding: "4px 20px",
    margin: "2px 20px",
  },
  inActive: {
    width: "120px",
    height: "70px",
    backgroundColor: "#eeeeee",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  active: {
    width: "120px",
    height: "70px",
    backgroundColor: "#f50057",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
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

const VisitCard = ({ visit, handleVisit, active }) => {
  const { name, position, date } = visit;
  const d = new Date(date);
  const classes = useStyles();
  return (
    <Card
      onClick={handleVisit}
      className={classes.root}
      elevation={2}
      display={{ xs: "none", sm: "none", md: "none", lg: "none" }}
    >
      <CardContent>
        {/*TODO nazwa classes box czy classes paper?*/}
        <Box className={active ? classes.active : classes.inActive}>
          {/*TODO sprawdzić zaokrąglenia*/}
          <Typography align="center">
            <Box variant="h6"
                 color={active ? "#ffffff" : "#000000"}

            >
              {d.getDate()}.{d.getMonth()}
            </Box>
            <Box
              fontSize={24}
              fontWeight={700}
              color={active ? "#ffffff" : "#f50057"}
              variant="h5"
            >
              {d.getHours()}:{d.getMinutes()}
            </Box>
          </Typography>
        </Box>
      </CardContent>
      <Box display={{ xs: "none", sm: "none", md: "none", lg: "none" }}>
        <Avatar className={classes.avatar}>H</Avatar>
      </Box>
      <Typography className={classes.content}>
        <Box
          // display={{ xs: "none", sm: "none", md: "none", lg: "none" }}
          fontWeight={700}
        >
          lek. {name}
        </Box>
        <Box fontWeight={500}>{position}</Box>
      </Typography>
      {active ? <ArrowForwardIosIcon /> : null}
    </Card>
  );
};

export default VisitCard;
