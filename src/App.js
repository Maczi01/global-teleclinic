import React, { useEffect, useState } from "react";
import MakeAppointmentView from "./pages/MakeAppointmentPage";
import { BrowserRouter, Router, Route } from "react-router-dom";
import { Switch } from "react-router";
import ConfirmPage from "./pages/ConfirmPage";
import { ThemeProvider } from "@material-ui/core/styles";
import {createTheme} from "@material-ui/core";
import theme from "./theme/theme";




function App() {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={MakeAppointmentView} />
          <Route path="/confirmed" component={ConfirmPage} />
        </Switch>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
