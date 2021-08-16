import "../App.css";
import React, { useEffect, useState } from "react";
import Grid from "@material-ui/core/Grid";
import CircularProgress from "@material-ui/core/CircularProgress";
import Information from "../components/Information";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Appointment from "../components/Appointment";
import VisitCard from "../components/VisitCard";
import RightSide from "../components/RightSide";
import PageTemplate from "../templates/PageTemplate";
import LeftSide from "../components/LeftSide";

const MakeAppointmentView = () => {
  const [availableVisits, setAvailableVisits] = useState();

  const [consultation, setConsultation] = useState();

  useEffect(() => {
    fetch("data/data.json")
      .then((data) => data.json())
      .then((data) => setAvailableVisits(data));
  }, []);

  const handleVisit = (d) => {
    console.log("clicked")
    setConsultation(d);
    console.log(consultation)
  };

  return (
    <PageTemplate>
      {/*<Navbar />*/}
      <Grid container component="main">
        <LeftSide availableVisits={availableVisits} handleVisit={handleVisit} />
        <RightSide consultation={consultation} />
      </Grid>
      {/*<Footer />*/}
    </PageTemplate>
  );
};

export default MakeAppointmentView;
