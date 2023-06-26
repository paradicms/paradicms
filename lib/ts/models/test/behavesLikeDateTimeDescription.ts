import {expect} from "chai";
import {DateTimeDescription} from "../src/DateTimeDescription";
import {it} from "mocha";

export const behavesLikeDateTimeDescription = (
  dateTimeDescription: DateTimeDescription
) => {
  it("should get the day", () => {
    expect(dateTimeDescription.day).to.be.gte(1);
    expect(dateTimeDescription.day).to.be.lte(31);
  });

  it("should get the hour", () => {
    expect(dateTimeDescription.hour).to.be.null;
  });

  it("should get the minute", () => {
    expect(dateTimeDescription.minute).to.be.null;
  });

  it("should get the month", () => {
    expect(dateTimeDescription.month).to.be.gte(1);
    expect(dateTimeDescription.month).to.be.lte(12);
  });

  it("should get the second", () => {
    expect(dateTimeDescription.second).to.be.null;
  });

  it("should get the year", () => {
    expect(dateTimeDescription.year).to.gte(2021);
    expect(dateTimeDescription.year).to.be.lte(2022);
  });

  // it("should convert to a string", () => {
  //   const str = dateTimeDescription.toString();
  //   expect(str).to.not.be.empty;
  // });
};
