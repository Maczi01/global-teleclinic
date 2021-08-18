import Typography from "@material-ui/core/Typography";
import React from "react";
import Box from "@material-ui/core/Box";
import Avatar from "@material-ui/core/Avatar";
import Card from "@material-ui/core/Card/Card";
import Link from "@material-ui/core/Link";
import {makeStyles} from "@material-ui/core";
import {cutDescription} from "../utils/utils";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    justifyContent: "space-between",
    height: "200px",
    width: "100%",
    padding: "10px",
    margin: "10px 0",
    [theme.breakpoints.down("sm")]: {
      height: "120px",
      padding: "0",
      margin: "5px 0",
    },
  },
  box: {
    margin: "10px",
  },
  avatar: {
    width: "150px",
    height: "150px",
    margin: "10px 20px",
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
    <Card className={classes.root} md={6}>
      <Box className={classes.box}>
        <Typography>
          <Box fontWeight={700} fontSize={24}>
            {/*wprowadzić "lek" do jsona*/}
            {name}
          </Box>
          <Box fontSize={16}>{position}</Box>
        </Typography>
        <Typography variant="body2"  >
          {cutDescription(description)}
          <Link
              href="#"
              onClick={() => console.log("link")}
              color="secondary"
          >
            {'więcej'}
          </Link>
        </Typography>
      </Box>
      <Box display={{ xs: "none", sm: "none", md: "block" }}>
        <Avatar className={classes.avatar}>H</Avatar>
      </Box>
    </Card>
  );
};

export default DoctorCard;
