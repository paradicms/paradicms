import {DateRangeFilter} from "@paradicms/api";
import {expect} from "chai";
import {describe} from "mocha";
import {testEventDateRangeFilter} from "../src/testEventDateRangeFilter";

describe("testEventDateRangeFilter", () => {
  const filter: DateRangeFilter = {
    start: {
      year: 2021,
      month: 1,
      day: 1,
    },
    end: {
      year: 2021,
      month: 1,
      day: 31,
    },
  };

  it("should return true for an event with a single date in the range", () => {
    expect(
      testEventDateRangeFilter({
        event: {
          date: {
            year: 2021,
            month: 1,
            day: 10,
            label: "test",
            hour: 0,
            minute: 0,
            second: 0,
          },
          startDate: null,
          endDate: null,
        },
        filter,
      })
    ).to.be.true;
  });

  it("should return false for an event with a single date outside the range", () => {
    expect(
      testEventDateRangeFilter({
        event: {
          date: {
            year: 2021,
            month: 2,
            day: 10,
            label: "test",
            hour: 0,
            minute: 0,
            second: 0,
          },
          startDate: null,
          endDate: null,
        },
        filter,
      })
    ).to.be.true;
  });
});
