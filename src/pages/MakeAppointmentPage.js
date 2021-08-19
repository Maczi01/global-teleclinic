import "../App.css";
import React, { useEffect, useState } from "react";
import Grid from "@material-ui/core/Grid";
import CircularProgress from "@material-ui/core/CircularProgress";
import Information from "../components/Information";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import VisitCard from "../components/VisitCard";
import VisitDetails from "../components/VisitDetails";
import MainTemplate from "../templates/MainTemplate";
import ListVisits from "../components/ListVisits";

const MakeAppointmentView = () => {
  const [chosenVisit, setChosenVisit] = useState();

  const handleVisit = (d) => {
      setChosenVisit(d);
  };

  return (
    <MainTemplate>
      <Grid container component="main" >
        <ListVisits handleVisit={handleVisit} />
        {chosenVisit ? (
          <VisitDetails chosenVisit={chosenVisit} />
        ) : (
          <Information />
        )}
      </Grid>
    </MainTemplate>
  );
};

export default MakeAppointmentView;
