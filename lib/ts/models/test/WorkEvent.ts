import {expect} from "chai";
import {WorkEvent} from "../src";
import {testModelSet} from "./testModelSet";

describe("WorkEvent", () => {
  const work = testModelSet.works[0];
  const sut: WorkEvent = testModelSet.workEventsByWorkUri(work.uri)[0];

  before(() => {
    expect(sut).is.not.undefined;
  });

  it("should return the work", () => {
    expect(sut.workUri).to.eq(work.uri);
  });
});
