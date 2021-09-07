import '../App.css';
import React, { useState } from 'react';
import Grid from '@material-ui/core/Grid';
import Information from '../components/Information';
import VisitDetails from '../components/VisitDetails';
import MainTemplate from '../templates/MainTemplate';
import ListVisits from '../components/ListVisits';

const MakeAppointmentPage = () => {
  const [chosenVisit, setChosenVisit] = useState();

  const handleVisit = (d) => {
    setChosenVisit(d);
  };

  return (
    <MainTemplate>
      <Grid container component="main">
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

export default MakeAppointmentPage;
