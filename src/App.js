import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { Switch } from 'react-router';
import { ThemeProvider } from '@material-ui/core/styles';
import ConfirmPage from './pages/ConfirmPage';
import MakeAppointmentPage from './pages/MakeAppointmentPage';
import theme from './theme/theme';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={MakeAppointmentPage} />
          <Route path="/confirmed" component={ConfirmPage} />
        </Switch>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
