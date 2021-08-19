import {getDayAndMonth, getFormattedVisitDate, getHourAndMinute} from "../utils/utils";

describe("Data util functions", () => {
  it("calculate correct day and month", () => {
    const date1 = new Date("2021-08-14T18:05:43.511Z");
    const date2 = new Date("2011-12-21T18:05:43.511Z");
    const dayAndMonth1 = getDayAndMonth(date1);
    const dayAndMonth2 = getDayAndMonth(date2);

    expect(dayAndMonth1).toBe("14.08");
    expect(dayAndMonth2).toBe("21.12");
  });

  it("give NaN as day and month if date is incorrect", () => {
    const date1 = new Date("2021-08-79T18:05:43.511Z");
    const date2 = new Date("2011-13-21T18:05:43.511Z");
    const dayAndMonth1 = getDayAndMonth(date1);
    const dayAndMonth2 = getDayAndMonth(date2);

    expect(dayAndMonth1).toBe("NaN.NaN");
    expect(dayAndMonth2).toBe("NaN.NaN");
  });

  it("give NaN as hour and minute if date is incorrect", () => {
    const date1 = new Date("2021-08-79T04:95:43.511Z");
    const date2 = new Date("2011-13-21T26:05:43.511Z");
    const dayAndMonth1 = getHourAndMinute(date1);
    const dayAndMonth2 = getHourAndMinute(date2);

    expect(dayAndMonth1).toBe("NaN:NaN");
    expect(dayAndMonth2).toBe("NaN:NaN");
  });

  it("return word 'dzisiaj' if difference between day is zero", () => {

    const today = new Date()

    const text = getFormattedVisitDate(today).substring(0,7);
    expect(text).toBe("dzisiaj")
  });

  it("return word 'jutro' if difference between day is one", () => {

    const today = new Date()
    const tomorrow = new Date()

    tomorrow.setDate(today.getDate() + 1);
    const text = getFormattedVisitDate(tomorrow).substring(0,5);
    expect(text).toBe("jutro")
  });

  it("return word 'pojutrze' if difference between day is two", () => {

    const today = new Date()
    const tomorrow = new Date()

    tomorrow.setDate(today.getDate() + 2);
    const text = getFormattedVisitDate(tomorrow).substring(0,8);
    expect(text).toBe("pojutrze")
  });

  
});
