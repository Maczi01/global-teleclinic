import "../App.css";
import React, { useEffect, useState } from "react";
import Grid from "@material-ui/core/Grid";
import CircularProgress from "@material-ui/core/CircularProgress";
import Information from "../components/Information";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import VisitCard from "../components/VisitCard";
import RightSide from "../components/RightSide";
import PageTemplate from "../templates/PageTemplate";
import ListVisits from "../components/ListVisits";

const MakeAppointmentView = () => {
  const [consultation, setConsultation] = useState();

  const handleVisit = (d) => {
    setConsultation(d);
  };

  return (
    <PageTemplate>
      <Grid container component="main" >
        <ListVisits handleVisit={handleVisit} />
        {consultation ? (
          <RightSide consultation={consultation} />
        ) : (
          <Information />
        )}
      </Grid>
    </PageTemplate>
  );
};

export default MakeAppointmentView;
