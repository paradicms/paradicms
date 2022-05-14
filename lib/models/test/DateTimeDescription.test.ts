import {expect} from "chai";
import {Dataset} from "../src";
import {testDataTrig} from "./testDataTrig";
import {DateTimeDescription} from "../src/DateTimeDescription";

describe("DateTimeDescription", () => {
  const dataset = Dataset.parse(testDataTrig);
  const sut: DateTimeDescription = dataset.workEventsByWork(
    dataset.works[0].uri
  )[0].date! as DateTimeDescription;

  before(() => {
    expect(sut).to.not.be.null;
    expect(sut).to.be.instanceof(DateTimeDescription);
  });

  it("should get the day", () => {
    expect(sut.day).to.be.gte(1);
    expect(sut.day).to.be.lte(31);
  });

  it("should get the hour", () => {
    expect(sut.hour).to.be.null;
  });

  it("should get the minute", () => {
    expect(sut.minute).to.be.null;
  });

  it("should get the month", () => {
    expect(sut.month).to.be.gte(1);
    expect(sut.month).to.be.lte(12);
  });

  it("should get the second", () => {
    expect(sut.second).to.be.null;
  });

  it("should get the year", () => {
    expect(sut.year).to.eq(2022);
  });

  it("should convert to a string", () => {
    const str = sut.toString();
    expect(str).to.not.be.empty;
  });
});
