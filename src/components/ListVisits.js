import Grid from "@material-ui/core/Grid";
import VisitCard from "./VisitCard";
import CircularProgress from "@material-ui/core/CircularProgress/CircularProgress";
import React, { useEffect, useState } from "react";
import Box from "@material-ui/core/Box";

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

  const [currentIndex, setCurrentIndex] = useState(0);
  return (
    <Grid container item md={6} >
      {isLoading ? (
        <Box
          display="flex"
          height="100vh"
          alignItems="center"
          margin="0 auto"
          justifyContent="center"
        >
          <CircularProgress color="secondary" />
        </Box>
      ) : (
        availableVisits.map((visit, index) => (
          <VisitCard
            key={visit.id}
            visit={visit}
            active={index === currentIndex}
            onClick={() => console.log(index)}
            handleVisit={() => handleVisit(visit)}
          />
        ))
      )}
    </Grid>
  );
};

export default ListVisits;

{
  /*  {availableVisits ? (*/
}
{
  /*      availableVisits.map((visit, index) => (*/
}
{
  /*          <VisitCard*/
}
{
  /*              key={visit.id}*/
}
{
  /*              visit={visit}*/
}
{
  /*              active={index === currentIndex}*/
}
{
  /*              onClick={() => console.log(index)}*/
}
{
  /*              handleVisit={() => handleVisit(visit)}*/
}
{
  /*          />*/
}
{
  /*      ))*/
}
{
  /*  ) : (*/
}
{
  /*      <CircularProgress color="secondary" />*/
}
{
  /*  )}*/
}
{
  /*</Grid>*/
}
