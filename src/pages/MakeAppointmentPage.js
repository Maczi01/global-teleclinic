import "../App.css";
import React, { useEffect, useState } from "react";
import Grid from "@material-ui/core/Grid";
import CircularProgress from "@material-ui/core/CircularProgress";
import Information from "../components/Information";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import VisitCard from "../components/VisitCard";
import VisitDetails from "../components/RightSide";
import PageTemplate from "../templates/PageTemplate";
import ListVisits from "../components/ListVisits";

const MakeAppointmentView = () => {
  const [choosenVisit, setChoosenVisit] = useState();

  const handleVisit = (d) => {
      setChoosenVisit(d);
  };

  return (
    <PageTemplate>
      <Grid container component="main" >
        <ListVisits handleVisit={handleVisit} />
        {choosenVisit ? (
          <VisitDetails choosenVisit={choosenVisit} />
        ) : (
          <Information />
        )}
      </Grid>
    </PageTemplate>
  );
};

export default MakeAppointmentView;
