import {expect} from "chai";
import {DateTimeDescription} from "../src/DateTimeDescription";
import {testModelSet} from "./testModelSet";

describe("DateTimeDescription", () => {
  let sut: DateTimeDescription;

  before(() => {
    for (const work of testModelSet.works) {
      for (const workEvent of work.events) {
        if (workEvent.date) {
          sut = workEvent.date;
        }
      }
    }

    expect(sut).to.not.be.null;
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
