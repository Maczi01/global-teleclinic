import Grid from "@material-ui/core/Grid";
import VisitCard from "./VisitCard";
import React, {useEffect, useState} from "react";
import Box from "@material-ui/core/Box";
import ProgressCircle from "./ProgressCircle";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

const ListVisits = ({ handleVisit }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [availableVisits, setAvailableVisits] = useState([]);
  const [isError, setIsError] = useState(false);

  const fetchData = async () => {
    setIsLoading(true);
    setIsError(false);
    try {
      const response = await fetch("data/data.json");
      const data = await response.json();
      setAvailableVisits(data);
    } catch (error) {
      setIsError(true);
      console.log(error);
    }
    setIsLoading(false);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const [currentIndex, setCurrentIndex] = useState();

  const chooseCurrentVisit = (visit) => {
    handleVisit(visit);
    setCurrentIndex(visit.id);
  };

  return (
    <Grid container item md={6} >
      {isError ? (
        <Box
          display="flex"
          alignItems="center"
          justifyContent="center"
          margin="0 auto"
          flexDirection="column"
        >
          <Typography> Problem z ładowaniem danych</Typography>
          <Button
            variant="contained"
            color="secondary"
            disableElevation
            onClick={fetchData}
          >
            Spróbuj ponownie
          </Button>
        </Box>
      ) : isLoading ? (
        <ProgressCircle />
      ) : (
        availableVisits.map((visit) => (
          <VisitCard
            key={visit.id}
            visit={visit}
            active={visit.id === currentIndex}
            chooseCurrentVisit={() => chooseCurrentVisit(visit)}
          />
        ))
      )}
    </Grid>
  );
};

export default ListVisits;
