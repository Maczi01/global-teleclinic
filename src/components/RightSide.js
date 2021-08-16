import Grid from "@material-ui/core/Grid";
import Information from "./Information";
import React, { useState } from "react";
import ConsultationForm from "./ConsultationForm";
import DoctorCard from "./DoctorCard";
import Card from "@material-ui/core/Card/Card";
import Typography from "@material-ui/core/Typography";
import { formatDate } from "../utils/utils";
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
    padding: "4px 20px",
    margin: "2px 20px",
    backgroundColor: "rgb(74,198,220)",
  },

  content: {
    direction: "column",
    justifyContent: "center",
    alignItems: "center",
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
}));

const RightSide = ({ consultation }) => {
  const [contact, setContact] = useState("chat");
  const [payment, setPayment] = useState();
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
    setPayment(e.target.value);
  };

  const onChangeValueContact = (contactType) => {
    //TODO może dataset i generyczny handler?
    setContact(contactType);
  };

  return (
    <Grid container item xs={12} sm={8} md={6}  >
      <Grid className={classes.content} container>
        <>
          <DoctorCard
            name={name}
            position={position}
            description={description}
          />

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
                  className={contact === "chat" ? "" : classes.disabledButton}
                >
                  Przez czat
                </Button>
                <Button
                  variant="outlined"
                  color="secondary"
                  disableElevation
                  className={
                    contact === "videochat" ? "" : classes.disabledButton
                  }
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
                  className={contact === "phone" ? "" : classes.disabledButton}
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
                disabled={isSubmitting}
              >
                Umów konsultację
              </Button>
            </form>
          </Card>
        </>
      </Grid>
    </Grid>
  );
};

export default RightSide;
