import {expect} from "chai";
import {Event} from "../src/Event";
import {Location} from "../src/Location";
import {testModelSet} from "./testModelSet";

describe("Event", () => {
  const sut: Event = testModelSet.workEvents[0];

  before(() => {
    expect(sut).is.not.undefined;
  });

  it("should get the description", () => {
    expect(
      testModelSet.workEvents.some(workEvent => {
        const description = workEvent.description;
        return description instanceof Text;
      })
    ).to.be.true;

    expect(
      testModelSet.workEvents.some(workEvent => workEvent.description === null)
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
    expect(location).to.be.instanceof(Location);
    expect((location as Location).lat).to.not.eq(0);
    expect((location as Location).long).to.not.eq(0);
  });

  it("should get the title", () => {
    expect(sut.title).to.not.be.empty;
  });
});
