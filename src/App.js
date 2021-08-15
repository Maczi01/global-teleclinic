import "./App.css";
import React, { useEffect, useState } from "react";
import MakeAppointmentView from "./MakeAppointmentPage";
import { BrowserRouter, Router, Route } from "react-router-dom";
import { Switch } from "react-router";
import ConfirmView from "./ConfirmView";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={MakeAppointmentView} />
        <Route path="/confirmed" component={ConfirmView} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
