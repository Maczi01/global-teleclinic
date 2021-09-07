import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { useAsyncFn } from 'react-use';
import axios from 'axios';
import VisitCard from './VisitCard';
import ProgressCircle from './ProgressCircle';

const ListVisits = ({ handleVisit }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [availableVisits, setAvailableVisits] = useState([]);
  const [isError, setIsError] = useState(false);
  const url = 'data/data.json';

  // const Demo = ({url}) => {
  //     const [state, doFetch] = useAsyncFn(async () => {
  //         const response = await fetch(url);
  //         const result = await response.json();
  //         return result
  //     }, [url])
  // };

  const fetchData = () => {
    setIsLoading(true);
    setIsError(false);
    axios
      .get(url)
      .then((response) => {
        setAvailableVisits(response.data);
      })
      .catch((error) => {
        console.log(error);
        setIsError(true);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  // const fetchData = async () => {
  //   setIsLoading(true);
  //   setIsError(false);
  //   try {
  //     const response = await fetch("data/data.json");
  //     const data = await response.json();
  //     setAvailableVisits(data);
  //   } catch (error) {
  //     setIsError(true);
  //     console.log(error);
  //   }
  //   setIsLoading(false);
  // };

  useEffect(() => {
    fetchData();
  }, []);

  const [currentIndex, setCurrentIndex] = useState();

  const chooseCurrentVisit = (visit) => {
    handleVisit(visit);
    setCurrentIndex(visit.id);
  };

  return (
    <Grid container item md={6}>
      {/*  {state.loading ? */}
      {/*      <ProgressCircle/> */}
      {/*      : state.error */}
      {/*          ? <Box */}
      {/*              display="flex" */}
      {/*              alignItems="center" */}
      {/*              justifyContent="center" */}
      {/*              margin="0 auto" */}
      {/*              flexDirection="column" */}
      {/*          > */}
      {/*              <Typography> {state.error.message}</Typography> */}
      {/*          </Box> : */}
      {/*          availableVisits.map((visit) => ( */}
      {/*              <VisitCard */}
      {/*                  key={visit.id} */}
      {/*                  visit={visit} */}
      {/*                  active={visit.id === currentIndex} */}
      {/*                  chooseCurrentVisit={() => chooseCurrentVisit(visit)} */}
      {/*              /> */}
      {/*          )) */}
      {/*  } */}
      {/* <button onClick={() => doFetch()}>Start loading</button> */}

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

ListVisits.propTypes = {
  handleVisit: PropTypes.func.isRequired,
};

ListVisits.defaultProps = {
  handleVisit: [],
};

export default ListVisits;
