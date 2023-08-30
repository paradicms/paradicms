import {expect} from "chai";
import {it} from "mocha";
import {PartialDateTimeDescription} from "../src/PartialDateTimeDescription";

export const behavesLikePartialDateTimeDescription = (
  partialDateTimeDescription: PartialDateTimeDescription
) => {
  it("should get the day", () => {
    expect(partialDateTimeDescription.day).to.be.gte(1);
    expect(partialDateTimeDescription.day).to.be.lte(31);
  });

  it("should get the hour", () => {
    expect(partialDateTimeDescription.hour).to.be.null;
  });

  it("should get the minute", () => {
    expect(partialDateTimeDescription.minute).to.be.null;
  });

  it("should get the month", () => {
    expect(partialDateTimeDescription.month).to.be.gte(1);
    expect(partialDateTimeDescription.month).to.be.lte(12);
  });

  it("should get the second", () => {
    expect(partialDateTimeDescription.second).to.be.null;
  });

  it("should get the year", () => {
    expect(partialDateTimeDescription.year).to.gte(2021);
    expect(partialDateTimeDescription.year).to.be.lte(2022);
  });

  // it("should convert to a string", () => {
  //   const str = partialDateTimeDescription.toString();
  //   expect(str).to.not.be.empty;
  // });
};
