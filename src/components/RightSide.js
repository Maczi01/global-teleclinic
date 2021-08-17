import Grid from "@material-ui/core/Grid";
import Information from "./Information";
import React, { useState } from "react";
import DoctorCard from "./DoctorCard";
import Card from "@material-ui/core/Card/Card";
import Typography from "@material-ui/core/Typography";
import { getFormattedVisitDate } from "../utils/utils";
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import RadioGroup from "@material-ui/core/RadioGroup/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel/FormControlLabel";
import Radio from "@material-ui/core/Radio/Radio";
import { makeStyles } from "@material-ui/core";
import ChatIcon from "@material-ui/icons/Chat";
import VoiceChatIcon from "@material-ui/icons/VoiceChat";
import PhoneIcon from "@material-ui/icons/Phone";
import FormControl from "@material-ui/core/FormControl";
import { useHistory } from "react-router";

const useStyles = makeStyles(() => ({
  root: {
    direction: "column",
    justifyContent: "center",
    alignItems: "center",
    padding: "4px 20px",
  },
  visit: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    width: "100%",
    // height: "200px",
    // margin: "2px 10px",
    margin: "10px 0",
    padding: "20px",
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
  // content: {
  //   flex: "1 0 auto",
  // },
  disabledButton: {
    color: "rgba(0, 0, 0, 0.26)",
    border: "1px solid rgba(0, 0, 0, 0.26)",
  },
  activeButton: {
    color: "primary",
    border: "1px solid rgba(0, 0, 0, 0.26)",
  },
  buttons: {
    display: "flex",
    justifyContent: "space-between",
  },
}));

const RightSide = ({ consultation }) => {
  const [contact, setContact] = useState("chat");
  const [payment, setPayment] = useState("subscription");
  const history = useHistory();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const classes = useStyles();

  const { date, name, position, description } = consultation;

  const submitVisit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      console.log({ doctorName: name, payment, contact, date });
      setIsSubmitting(false);
      history.push("/confirmed");
    }, 1000);
  };

  const onChangeValuePayment = (e) => {
    setPayment(e.currentTarget.value);
  };

  const onChangeValueContact = (e) => {
    //TODO może dataset i generyczny handler?
    setContact(e.currentTarget.value);
  };

  return (
    <Grid item xs={12} sm={12} md={6}>
      <Grid item className={classes.root} container>
        <DoctorCard name={name} position={position} description={description} />
        <Card item p={8} md={6} className={classes.visit}>
          <Typography>
            <Box fontSize={24} fontWeight={700}>
              Termin konsultacji: {getFormattedVisitDate(date)}
            </Box>
          </Typography>
          <form onSubmit={submitVisit}>
            <Box className={classes.buttons}>
              <Button
                variant="outlined"
                color="secondary"
                value="chat"
                disableElevation
                startIcon={<ChatIcon />}
                onClick={(e) => onChangeValueContact(e)}
                className={contact === "chat" ? "" : classes.disabledButton}
              >
                Przez czat
              </Button>
              <Button
                variant="outlined"
                color="secondary"
                value="videochat"
                disableElevation
                className={
                  contact === "videochat" ? "" : classes.disabledButton
                }
                onClick={(e) => onChangeValueContact(e)}
                startIcon={<VoiceChatIcon />}
              >
                Przez wideo-czat
              </Button>
              <Button
                variant="outlined"
                color="secondary"
                disableElevation
                value="phone"
                startIcon={<PhoneIcon />}
                onClick={(e) => onChangeValueContact(e)}
                className={contact === "phone" ? "" : classes.disabledButton}
              >
                Przez telefon
              </Button>
            </Box>
            <Box>
              {/*TODO buttony powinny być różowe*/}
              <RadioGroup
                value={payment}
                onChange={(e) => onChangeValuePayment(e)}
              >
                <FormControlLabel
                  value="subscription"
                  control={<Radio color="secondary" />}
                  label="W abonamencie"
                />
                <FormControlLabel
                  value="paymentOnce"
                  control={<Radio color="secondary" />}
                  label="Płatność jednorazowa"
                />
              </RadioGroup>
            </Box>
            <Button
              type="submit"
              variant="contained"
              color="secondary"
              disableElevation
              disabled={isSubmitting}
            >
              Umów konsultację
            </Button>
          </form>
        </Card>
      </Grid>
    </Grid>
  );
};

export default RightSide;
