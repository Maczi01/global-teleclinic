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
  const [availableVisits, setAvailableVisits] = useState();
  const [consultation, setConsultation] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  const fetchData = async () => {
    setIsError(false);
    setIsLoading(true);
    try {
      const response = await fetch("data/data.json");
      const data = await response.json();
      setAvailableVisits(data);
    } catch (error) {
      setIsError(true);
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
    // fetch("data/data.json")
    //   .then((data) => data.json())
    //   .then((data) => setAvailableVisits(data));
  }, []);

  const handleVisit = (d) => {
    setConsultation(d);
  };

  return (
    <PageTemplate>
      <Grid container component="main">
        <ListVisits
          availableVisits={availableVisits}
          handleVisit={handleVisit}
        />
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
