import {expect} from "chai";
import {WorkCreation} from "../src/WorkCreation";
import {testModelSet} from "./testModelSet";

describe("WorkCreation", () => {
  const work = testModelSet.works[0];

  const sut: WorkCreation = testModelSet
    .workEventsByWorkUri(work.uri)
    .find(workEvent => workEvent.type === "WorkCreation") as WorkCreation;

  before(() => {
    expect(sut).is.not.undefined;
  });

  it("should expose the creator", () => {
    const creator = sut.creators[0];
    testModelSet.agentByUri(creator.uri!);
    expect(work.agents.some(agent => agent.agent.uri === creator.uri)).to.be
      .true;
  });
});
