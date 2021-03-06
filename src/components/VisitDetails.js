import Grid from "@material-ui/core/Grid";
import React, {useState} from "react";
import DoctorCard from "./DoctorCard";
import Card from "@material-ui/core/Card/Card";
import Typography from "@material-ui/core/Typography";
import {getFormattedVisitDate} from "../utils/utils";
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import RadioGroup from "@material-ui/core/RadioGroup/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel/FormControlLabel";
import Radio from "@material-ui/core/Radio/Radio";
import {makeStyles} from "@material-ui/core";
import ChatIcon from "@material-ui/icons/Chat";
import VoiceChatIcon from "@material-ui/icons/VoiceChat";
import PhoneIcon from "@material-ui/icons/Phone";
import {useHistory} from "react-router";
import Divider from "@material-ui/core/Divider";

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
    margin: "10px 0",
    padding: "20px",
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
    margin: "10px 0",
  },
  payment: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    margin: "10px 0",
  },
}));

const VisitDetails = ({ chosenVisit }) => {
  const [contact, setContact] = useState("chat");
  const [payment, setPayment] = useState("subscription");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isError, setIsError] = useState(false);
  const { date, name, position, description } = chosenVisit;
  const BASE_URL =
    "https://global-teleclinic-default-rtdb.europe-west1.firebasedatabase.app/.json";
  const classes = useStyles();
  const history = useHistory();

  const submitVisit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setIsError(false);

    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ doctorName: name, payment, contact, date }),
    };

    setTimeout(() => {
      fetch(BASE_URL, requestOptions).then((response) => {
        if (!response.ok) {
          console.log("Cannot send data");
          setIsError(true);
        } else {
          history.push("/confirmed");
        }
        setIsSubmitting(false);
      });
    }, 2000);
  };

  const onChangeValuePayment = (e) => {
    setPayment(e.currentTarget.value);
  };

  const onChangeValueContact = (e) => {
    setContact(e.currentTarget.value);
  };

  return (
    <Grid item container sm={12} md={6}>
      <Grid item className={classes.root} container>
        <DoctorCard name={name} position={position} description={description} />
        <Card p={8} md={6} className={classes.visit}>
          <Typography component="div">
            <Box fontWeight={700} fontSize={20}>
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
            <Divider />
            <Box>
              <RadioGroup
                value={payment}
                onChange={(e) => onChangeValuePayment(e)}
              >
                <Box className={classes.payment}>
                  <FormControlLabel
                    value="subscription"
                    control={<Radio color="secondary" />}
                    label="W abonamencie"
                  />
                  <Box fontWeight={700} fontSize={24}>
                    32,99 z??
                  </Box>
                </Box>
                <Divider />
                <Box className={classes.payment}>
                  <FormControlLabel
                    value="paymentOnce"
                    control={<Radio color="secondary" />}
                    label="P??atno???? jednorazowa"
                  />

                  <Box fontWeight={700} fontSize={24}>
                    69,00 z??
                  </Box>
                </Box>
              </RadioGroup>
            </Box>
            <Button
              type="submit"
              variant="contained"
              color="secondary"
              disableElevation
              disabled={isSubmitting}
              fullWidth
            >
              Um??w konsultacj??
            </Button>
            {isError && (
              <Typography>
                <Box mt={2} color="error.main">
                  Nie uda??o si?? wys??a??. Spr??buj ponownie
                </Box>
              </Typography>
            )}
          </form>
        </Card>
      </Grid>
    </Grid>
  );
};

export default VisitDetails;
