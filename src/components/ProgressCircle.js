import Box from '@material-ui/core/Box';
import CircularProgress from '@material-ui/core/CircularProgress/CircularProgress';

const ProgressCircle = () => (
  <Box
    display="flex"
    height="100vh"
    alignItems="center"
    margin="0 auto"
    justifyContent="center"
  >
    <CircularProgress color="secondary" />
  </Box>
);

export default ProgressCircle;
