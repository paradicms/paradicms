import {expect} from "chai";
import {WorkEvent} from "../src";
import {testModelSet} from "./testModelSet";

describe("WorkEvent", () => {
  const work = testModelSet.works[0];
  const sut: WorkEvent = testModelSet.workEventsByWorkIri(work.iri)[0];

  before(() => {
    expect(sut).is.not.undefined;
  });

  it("should return the work", () => {
    expect(sut.workIri).to.eq(work.iri);
  });
});
