import {getDayAndMonth, getHourAndMinute} from "../utils/utils";

describe("Return correct date and hour", () => {
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

  it("calculate correct hour and minute", () => {
    const date1 = new Date("2021-08-14T18:05:43.511Z");
    const date2 = new Date("2021-08-14T06:05:43.511Z");
    const dayAndMonth1 = getHourAndMinute(date1);
    const dayAndMonth2 = getHourAndMinute(date2);

    expect(dayAndMonth1).toBe("18:05");
    expect(dayAndMonth2).toBe("06:05");
  });


  it("give NaN as hour and minute if date is incorrect", () => {
    const date1 = new Date("2021-08-79T04:95:43.511Z");
    const date2 = new Date("2011-13-21T26:05:43.511Z");
    const dayAndMonth1 = getDayAndMonth(date1);
    const dayAndMonth2 = getDayAndMonth(date2);

    expect(dayAndMonth1).toBe("NaN:NaN");
    expect(dayAndMonth2).toBe("NaN:NaN");
  });
});
