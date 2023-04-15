import {expect} from "chai";
import {WorkClosing, WorkOpening} from "../src";
import {WorkCreation} from "../src/WorkCreation";
import {testModelSet} from "./testModelSet";

describe("WorkCreation", () => {
  const work = testModelSet.works[0];

  let sut: WorkCreation;
  testModelSet.workEventsByWorkUri(work.uri).forEach(workEvent =>
    workEvent.accept({
      visitWorkClosing: function(workClosing: WorkClosing): void {},
      visitWorkCreation: function(workCreation: WorkCreation): void {
        sut = workCreation;
      },
      visitWorkOpening: function(workOpening: WorkOpening): void {},
    })
  );

  before(() => {
    expect(sut).is.not.undefined;
  });

  it("should expose the creator", () => {
    const creator = sut.creatorAgents[0];
    testModelSet.agentByUri(creator.uri);
    expect(work.agents.some(agent => agent.agent.uri === creator.uri)).to.be
      .true;
  });
});
