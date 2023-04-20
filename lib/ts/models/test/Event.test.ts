import {expect} from "chai";
import {Event} from "../src/Event";
import {Location} from "../src/Location";
import {testModelSet} from "./testModelSet";

describe("Event", () => {
  const sut: Event = testModelSet.works[0].events[0];

  before(() => {
    expect(sut).is.not.undefined;
  });

  it("should get the description", () => {
    expect(
      testModelSet.works[0].events.some(workEvent => {
        const description = workEvent.description;
        return typeof description !== "string";
      })
    ).to.be.true;

    expect(
      testModelSet.works[0].events.some(
        workEvent => workEvent.description === null
      )
    ).to.be.true;
  });

  it("should get the date", () => {
    const date = sut.date;
    expect(date).to.not.be.null;
    expect(date!.year!).to.eq(2022);
    expect(date!.month!).to.eq(1);
    expect(date!.day!).to.eq(1);
  });

  it("should get the location", () => {
    const location = sut.location;
    expect(location).not.to.be.null;
    expect(location).not.to.be.instanceof(String);
    expect((location as Location).lat).to.not.eq(0);
    expect((location as Location).long).to.not.eq(0);
  });

  it("should get the label", () => {
    expect(sut.label).to.not.be.empty;
  });
});
