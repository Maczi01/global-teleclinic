import "./App.css";
import React, { useEffect, useState } from "react";
import MakeAppointmentView from "./pages/MakeAppointmentPage";
import { BrowserRouter, Router, Route } from "react-router-dom";
import { Switch } from "react-router";
import ConfirmPage from "./pages/ConfirmPage";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={MakeAppointmentView} />
        <Route path="/confirmed" component={ConfirmPage} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
