import { render, screen } from "@testing-library/react";
import React from "react";
import theme from "../theme/theme";
import { ThemeProvider } from "@material-ui/core/styles";
import VisitCard from "../components/VisitCard";
import "@testing-library/jest-dom";
import user from "@testing-library/user-event";
import MakeAppointmentPage from "../pages/MakeAppointmentPage";
import {BrowserRouter} from "react-router-dom";
import VisitDetails from "../components/VisitDetails";

describe("<VisitCard />", () => {
  it("correctly render item on ListVisits", () => {
    const visit = {
      id: 1,
      name: "Doctor Who",
      position: "surgeon",
      description:
        "British science fiction television programme broadcast by BBC One since 1963.",
      date: "2021-08-14T18:05:43.511Z",
    };

    render(
      <ThemeProvider theme={theme}>
          <VisitDetails chosenVisit={visit}/>
      </ThemeProvider>
    );

    const phoneButton = screen.getByText(/przez telefon/i);
    user.click(phoneButton);

      // const logoutButton = screen.getByTestId("box");
      // console.log(logoutButton)
      // expect(screen.getByText(/Doctor Who/i)).toBeInTheDocument();
    // expect(screen.getByText(/surgeon/i)).toBeInTheDocument();
    // expect(screen.getByText(/14.08/i)).toBeInTheDocument();
  });
});
