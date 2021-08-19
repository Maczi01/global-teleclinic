import { render, screen } from "@testing-library/react";
import React from "react";
import theme from "../theme/theme";
import { ThemeProvider } from "@material-ui/core/styles";
import VisitCard from "../components/VisitCard";
import "@testing-library/jest-dom";
import user from "@testing-library/user-event";
import ConfirmPage from "../pages/ConfirmPage";
import { BrowserRouter } from "react-router-dom";

describe("<ConfirmPage />", () => {
  it("correctly render ConfirmPage", () => {
    render(
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <ConfirmPage />
        </BrowserRouter>
      </ThemeProvider>
    );
    //
    expect(
      screen.getByText(/Konsultacja została umówiona/i)
    ).toBeInTheDocument();
    expect(
      screen.getByText(/Dziękujemy za skorzystanie z usługi/i)
    ).toBeInTheDocument();
  });
});
