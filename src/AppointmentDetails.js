import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper/Paper";
import React from "react";
import Box from "@material-ui/core/Box";
import Avatar from "@material-ui/core/Avatar";
import Card from "@material-ui/core/Card/Card";
import { makeStyles } from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import RadioGroup from "@material-ui/core/RadioGroup/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel/FormControlLabel";
import Button from "@material-ui/core/Button";
import Radio from "@material-ui/core/Radio/Radio";
import ChatIcon from "@material-ui/icons/Chat";
import VoiceChatIcon from "@material-ui/icons/VoiceChat";
import PhoneIcon from "@material-ui/icons/Phone";
import { formatDate } from "./utils";

const useStyles = makeStyles(() => ({
  root: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    // height: "200px",
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
  radio: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
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

const AppointmentDetails = ({
  doctor,
  onChangeValueContact,
  onChangeValuePayment,
}) => {
  const classes = useStyles();
  const { date } = doctor;
  return (
    <Card p={8} className={classes.root}>
      <Typography variant="h4">Termin konsultacji: {formatDate(date)}</Typography>
      <Box>
        <RadioGroup
          value="video"
          onChange={onChangeValueContact}
          className={classes.radio}
        >
          <FormControlLabel
            value="chat"
            control={
              <Button
                type="submit"
                variant="outlined"
                color="secondary"
                disableElevation
                startIcon={<ChatIcon />}
              >
                Przez czat
              </Button>
            }
            onChange={onChangeValueContact}
          />
          <FormControlLabel
            value="video"
            control={
              <Button
                type="submit"
                variant="outlined"
                color="secondary"
                disableElevation
                disabled
                startIcon={<VoiceChatIcon />}
              >
                Przez wideo-czat
              </Button>
            }
          />
          <FormControlLabel
            value="phone"
            control={
              <Button
                type="submit"
                variant="outlined"
                color="secondary"
                disableElevation
                startIcon={<PhoneIcon />}
              >
                Przez wideo-czat
              </Button>
            }
          />
        </RadioGroup>
      </Box>
      <Box>
        <RadioGroup>
          <FormControlLabel
            value="subscription"
            control={<Radio color="secondary" />}
            onChange={onChangeValuePayment}
            label="W abonamencie"
          />{" "}
          <FormControlLabel
            value="paymentOnce"
            control={<Radio color="secondary" />}
            onChange={onChangeValuePayment}
            label="Płatność jednorazowa"
          />
        </RadioGroup>
      </Box>
      <Button
        type="submit"
        variant="contained"
        color="secondary"
        disableElevation
      >
        Umów konsultację
      </Button>
    </Card>
  );
};

export default AppointmentDetails;
