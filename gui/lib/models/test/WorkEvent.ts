import {expect} from "chai";
import {Dataset, WorkEvent} from "../src";
import {testDataTrig} from "./testDataTrig";

describe("WorkEvent", () => {
  const dataset = Dataset.parse(testDataTrig);
  const work = dataset.works[0];
  const sut: WorkEvent = dataset.workEventsByWork(work.uri)[0];

  before(() => {
    expect(sut).is.not.undefined;
  });

  it("should return the work", () => {
    expect(sut.workUri).to.eq(work.uri);
  });
});
