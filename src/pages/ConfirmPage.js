import React from 'react';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import confirmImage from '../assets/confirmImage.svg';

const useStyles = makeStyles({
  root: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    margin: '0 auto',
  },
});

const ConfirmPage = () => {
  const classes = useStyles();

  return (
    <>
      <Navbar />
      <div className={classes.root}>
        <Typography variant="h3" component="div">
          <Box fontWeight="fontWeightBold" m={2}>Konsultacja została umówiona</Box>
        </Typography>
        <Typography variant="h6" component="div">
          <Box m={4}>Dziękujemy za skorzystanie z usługi </Box>
        </Typography>
        <img src={confirmImage} alt="logo" />
      </div>
      <Footer />
    </>
  );
};

export default ConfirmPage;
