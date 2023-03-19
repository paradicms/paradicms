import {expect} from "chai";
import {ModelSet} from "../src";
import {syntheticData} from "@paradicms/test";
import {Location} from "../src/Location";
import {Text} from "../src/Text";
import {Event} from "../src/Event";

describe("Event", () => {
  const modelSet = ModelSet.fromDatasetCore(syntheticData);
  const sut: Event = modelSet.workEvents[0];

  before(() => {
    expect(sut).is.not.undefined;
  });

  it("should get the abstract", () => {
    expect(
      modelSet.workEvents.some(workEvent => {
        const abstract = workEvent.abstract;
        return abstract instanceof Text;
      })
    ).to.be.true;

    expect(modelSet.workEvents.some(workEvent => workEvent.abstract === null))
      .to.be.true;
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
