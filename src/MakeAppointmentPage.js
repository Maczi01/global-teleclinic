import "./App.css";
import React, { useEffect, useState } from "react";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import FormLabel from "@material-ui/core/FormLabel";
import Grid from "@material-ui/core/Grid";
import ChatIcon from "@material-ui/icons/Chat";
import VoiceChatIcon from "@material-ui/icons/VoiceChat";
import PhoneIcon from "@material-ui/icons/Phone";
import VisitCard from "./VisitCard";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Box from "@material-ui/core/Box";
import LinearProgress from "@material-ui/core/LinearProgress/LinearProgress";
import CircularProgress from "@material-ui/core/CircularProgress";
import Paper from "@material-ui/core/Paper";
import DoctorCard from "./DoctorCard";
import AppointmentDetails from "./AppointmentDetails";
import Information from "./Information";
import Appointment from "./Appointment";

const MakeAppointmentView = () => {
  const [selectedDoctor, setSelectedDoctor] = useState();
  const [array, setArray] = useState();
  const [elementToSubmit, setElementToSubmit] = useState({
    selectedDoctor: "",
    payment: "",
    contact: "",
  });

  const [payment, setPayment] = useState();
  const [contact, setContact] = useState();

  useEffect(() => {
    fetch("data/data.json")
      .then((r) => r.json())
      .then((r) => setArray(r));
  }, []);

  const handleDoctor = (d) => {
    setSelectedDoctor(d);
    console.log(selectedDoctor);
  };

  const onChangeValueContact = (e) => {
    setContact(e.target.value);
    console.log("radio button changed, contact");
    console.log(contact);
  };

  const onChangeValuePayment = (e) => {
    setPayment(e.target.value);
    console.log("radio button changed, payment");
    console.log(payment);
  };

  const submitVisit = (e) => {
    e.preventDefault();
    setTimeout(() => {
      console.log({ doctor: selectedDoctor.name, payment, contact });
    }, 5000);
  };



  return (
    <>
      <Navbar />
      <Grid container component="main">
        <Grid container item md={6}>
          {array ? (
            array.map((d) => (
              <VisitCard visit={d} handleDoctor={() => handleDoctor(d)} />
            ))
          ) : (
            <CircularProgress color="secondary" />
          )}

          {/*<RadioGroup>*/}
          {/*  {array*/}
          {/*    ? array.map((d) => (*/}
          {/*        <Grid sm={4}  md={12} item key={d.id}>*/}
          {/*          <VisitCard visit={d} handleDoctor={handleDoctor} />*/}
          {/*<FormControlLabel*/}
          {/*    value="paymentOnce"*/}
          {/*    control={*/}
          {/*        <Button onClick={() => handleDoctor(d)}>{d.name}</Button>*/}
          {/*    }*/}
          {/*    onChange={onChangeValuePayment}*/}
          {/*/>*/}
          {/*    </Grid>*/}
          {/*  ))*/}
          {/*: null}*/}
          {/*</RadioGroup>*/}
          {/*</Box>*/}
        </Grid>
        <Grid item xs={12} sm={8} md={6}>
          <Grid
            container
            direction="column"
            justifyContent="center"
            alignItems="center"
            minWidth="100%"
          >
            {/*<form action="" onSubmit={submitVisit} className="list">*/}
            {selectedDoctor ? (
              <Appointment doctor={selectedDoctor} />
            ) : (
              <Information />
            )}
            {/*</form>*/}
          </Grid>
        </Grid>
      </Grid>
      <Footer />
    </>
  );
};

export default MakeAppointmentView;
