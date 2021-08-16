import Grid from "@material-ui/core/Grid";
import VisitCard from "./VisitCard";
import CircularProgress from "@material-ui/core/CircularProgress/CircularProgress";
import React, { useState } from "react";

const ListVisits = ({ availableVisits, handleVisit }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  return (
    <Grid container item md={6}>
      {availableVisits ? (
        availableVisits.map((visit, index) => (
          <VisitCard
            key={visit.id}
            visit={visit}
            active={index === currentIndex}
            onClick={() => console.log(index)}
            handleVisit={() => handleVisit(visit)}
          />
        ))
      ) : (
        <CircularProgress color="secondary" />
      )}
    </Grid>
  );
};

export default ListVisits;
