import React from "react";
import MakeAppointmentPage from "./pages/MakeAppointmentPage";
import {BrowserRouter, Route} from "react-router-dom";
import {Switch} from "react-router";
import ConfirmPage from "./pages/ConfirmPage";
import {ThemeProvider} from "@material-ui/core/styles";
import theme from "./theme/theme";

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
