import {expect} from "chai";
import {ModelSet, WorkEvent} from "../src";
import {testData} from "@paradicms/test";

describe("WorkEvent", () => {
  const modelSet = ModelSet.fromDatasetCore(testData);
  const work = modelSet.works[0];
  const sut: WorkEvent = modelSet.workEventsByWork(work.uri)[0];

  before(() => {
    expect(sut).is.not.undefined;
  });

  it("should return the work", () => {
    expect(sut.workUri).to.eq(work.uri);
  });
});
