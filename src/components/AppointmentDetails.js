import Typography from "@material-ui/core/Typography";
import React, { useState } from "react";
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
import { formatDate } from "../utils/utils";
import ButtonGroup from "@material-ui/core/ButtonGroup";

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
  disabledButton: {
    color: "rgba(0, 0, 0, 0.26)",
    border: "1px solid rgba(0, 0, 0, 0.26)",
  },
}));

const AppointmentDetails = ({ doctor }) => {
  const classes = useStyles();
  const { date } = doctor;

  const [contact, setContact] = useState();
  const [disabled, setDisabled] = useState(true);
  const [selectedDoctor, setSelectedDoctor] = useState();
  const [payment, setPayment] = useState();


  const onChangeValueContact = (e) => {
    setContact(e.target.value);
    setDisabled((prev) => !prev);
    console.log(contact);
  };

  return (
    <Card p={8} className={classes.root}>
      <Typography variant="h4">
        Termin konsultacji: {formatDate(date)}
      </Typography>
      <Box>
        <ButtonGroup
        // value="video"
        // onChange={onChangeValueContact}
        // className={classes.radio}
        >
          <Button
            value="chat"
            variant="outlined"
            color="secondary"
            disableElevation
            startIcon={<ChatIcon />}
            onClick={(e) => onChangeValueContact(e)}
            className={disabled ? classes.disabledButton : ""}
          >
            Przez czat
          </Button>
          <Button
            value="videochat"
            variant="outlined"
            color="secondary"
            disableElevation
            className={disabled ? classes.disabledButton : ""}
            onClick={(e) => onChangeValueContact(e)}
            startIcon={<VoiceChatIcon />}
          >
            Przez wideo-czat
          </Button>
          <Button
            value="phone"
            variant="outlined"
            color="secondary"
            disableElevation
            startIcon={<PhoneIcon />}
            onClick={(e) => onChangeValueContact(e)}
            className={disabled ? classes.disabledButton : ""}
          >
            Przez telefon
          </Button>
        </ButtonGroup>
      </Box>
      <Box>
        <RadioGroup>
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
        // disabled={!payment}
        disableElevation
      >
        Umów konsultację
      </Button>
    </Card>
  );
};

export default AppointmentDetails;
