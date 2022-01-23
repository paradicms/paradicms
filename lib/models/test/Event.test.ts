import {expect} from "chai";
import {Dataset} from "../src";
import {testDataTrig} from "./testDataTrig";
import {WorkCreation} from "../src/WorkCreation";
import {DateTimeDescription} from "../src/DateTimeDescription";
import {Location} from "../src/Location";
import {hasMixin} from "ts-mixer";

describe("Event", () => {
  const dataset = Dataset.parse(testDataTrig);
  const work = dataset.works[0];
  const sut: WorkCreation = dataset
    .workEventsByWork(work.uri)
    .find(event => hasMixin(event, WorkCreation))! as WorkCreation;

  before(() => {
    expect(sut).is.not.undefined;
  });

  it("should get the abstract", () => {
    expect(
      dataset.workEvents.some(workEvent => {
        const abstract = workEvent.abstract;
        return abstract instanceof Text;
      })
    ).to.be.true;
  });

  it("should get the date", () => {
    const date = sut.date;
    expect(date).to.be.instanceof(DateTimeDescription);
    expect((date as DateTimeDescription).year).to.eq(2022);
  });

  it("should get the location", () => {
    const location = sut.location;
    expect(location).to.be.instanceof(Location);
    expect((location as Location).lat).to.not.eq(0);
    expect((location as Location).long).to.not.eq(0);
  });

  it("should get the title", () => {
    expect(sut.title).to.not.be.empty;
  });
});
