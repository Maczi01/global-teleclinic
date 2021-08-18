import {render} from "@testing-library/react";
import React from "react";
import ListVisits from "../components/ListVisits";
import theme from "../theme/theme";
import { ThemeProvider } from "@material-ui/core/styles";

describe("<VisitCard />", () => {
  it("correctly call submit function with given arguments", async () => {
    const onSubmitMock = jest.fn();

      const list = [{
          id: 1,
          name: "Doktor Paj-chi-wo",
          position: "internista",
          description: "Jestem absolwentem Wydziału Lekarskiego Collegium Medicum Uniwersytetu Jagiellońskiego w Krakowie. W 2011 roku uzyskałem specjalizację z zakresu chirurgii dziecięcej a w 2015 roku specjalisty urologii dziecięcej. ",
          date: "2021-08-14T18:05:43.511Z"
      },
      {
          id: 1,
          name: "Doktor Paj-chi-wo",
          position: "internista",
          description: "Jestem absolwentem Wydziału Lekarskiego Collegium Medicum Uniwersytetu Jagiellońskiego w Krakowie. W 2011 roku uzyskałem specjalizację z zakresu chirurgii dziecięcej a w 2015 roku specjalisty urologii dziecięcej. ",
          date: "2021-08-14T18:05:43.511Z"
      }]


    render(
      <ThemeProvider theme={theme}>
        <ListVisits />
      </ThemeProvider>
    );

    // const inputName = screen.getByTestId("name");
    // const inputCategory = screen.getByTestId("category");
    // const inputUnit = screen.getByTestId("unit");
    // const inputMaximalQuantity = screen.getByTestId("maximalQuantity");
    // const inputMinimalQuantity = screen.getByTestId("minimalQuantity");
    // const inputCurrentQuantity = screen.getByTestId("currentQuantity");
    // const submitButton = screen.getByTestId("accept");
    //
    // user.type(inputName, "Wine");
    // user.selectOptions(inputCategory, ["dairy"]);
    // user.selectOptions(inputUnit, ["liter"]);
    // user.type(inputMaximalQuantity, "5");
    // user.type(inputMinimalQuantity, "5");
    // user.type(inputCurrentQuantity, "5");
    // user.click(submitButton);
    //
    // await waitFor(() => expect(onSubmitMock).toBeCalled());
    // await waitFor(() => expect(onSubmitMock).toHaveBeenCalledTimes(1));
    // await waitFor(() =>
    //   expect(onSubmitMock).toHaveBeenCalledWith({
    //     name: "Wine",
    //     category: "dairy",
    //     unit: "liter",
    //     currentQuantity: 5,
    //     minimalQuantity: 5,
    //     maximalQuantity: 5,
    //   })
    // );
  });
});
