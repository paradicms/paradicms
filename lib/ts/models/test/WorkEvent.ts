import {expect} from "chai";
import {WorkEvent} from "../src";
import {testModelSet} from "./testModelSet";
import {describe} from "mocha";

describe("WorkEvent", () => {
  const work = testModelSet.works[0];
  const sut: WorkEvent = testModelSet.workEventsByWorkIri(work.iris[0])[0];

  before(() => {
    expect(sut).is.not.undefined;
  });

  it("should return the work", () => {
    expect(sut.workIri).to.eq(work.iris[0]);
  });
});
