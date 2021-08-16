import DoctorCard from "./DoctorCard";
import Card from "@material-ui/core/Card/Card";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import Avatar from "@material-ui/core/Avatar";
import React, { useState } from "react";
import { formatDate } from "../utils/utils";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import Button from "@material-ui/core/Button";
import RadioGroup from "@material-ui/core/RadioGroup/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel/FormControlLabel";
import Radio from "@material-ui/core/Radio/Radio";
import ChatIcon from "@material-ui/icons/Chat";
import VoiceChatIcon from "@material-ui/icons/VoiceChat";
import PhoneIcon from "@material-ui/icons/Phone";
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
  visit: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    // height: "200px",
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
  content: {
    flex: "1 0 auto",
  },
  disabledButton: {
    color: "rgba(0, 0, 0, 0.26)",
    border: "1px solid rgba(0, 0, 0, 0.26)",
  },
  activeButton: {
    color: "primary",
    border: "1px solid rgba(0, 0, 0, 0.26)",
  },
}));

const ConsultationForm = ({ date, submitVisit, onChangeValuePayment }) => {
  const classes = useStyles();
  const [contact, setContact] = useState("chat");

  const onChangeValueContact = (contactType) => {
    setContact(contactType);
  };

  return (
    <>
      <Card p={8} className={classes.visit}>
        <Typography variant="h4">
          Termin konsultacji: {formatDate(date)}
        </Typography>
        <form onSubmit={submitVisit}>
          <Box>
            <Button
              variant="outlined"
              color="secondary"
              disableElevation
              startIcon={<ChatIcon />}
              onClick={() => onChangeValueContact("chat")}
              className={contact === "chat" ? "" :classes.disabledButton}
            >
              Przez czat
            </Button>
            <Button
              variant="outlined"
              color="secondary"
              disableElevation
              className={contact === "videochat" ? "" :classes.disabledButton}
              onClick={() => onChangeValueContact("videochat")}
              startIcon={<VoiceChatIcon />}
            >
              Przez wideo-czat
            </Button>
            <Button
              variant="outlined"
              color="secondary"
              disableElevation
              startIcon={<PhoneIcon />}
              onClick={() => onChangeValueContact("phone")}
              className={contact === "phone" ? "" :classes.disabledButton}
            >
              Przez telefon
            </Button>
          </Box>
          <Box>
            <RadioGroup onChange={(e) => onChangeValuePayment(e)}>
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
          >
            Umów konsultację
          </Button>
        </form>
      </Card>
    </>
  );
};
export default ConsultationForm;
