import {expect} from "chai";
import {WorkCreation} from "../src/WorkCreation";
import {testModelSet} from "./testModelSet";
import {describe} from "mocha";

describe("WorkCreation", () => {
  const work = testModelSet.works[0];
  const sut: WorkCreation = work.events.find(
    workEvent => workEvent.type === "WorkCreation"
  ) as WorkCreation;

  before(() => {
    expect(sut).is.not.undefined;
  });

  it("should expose the creator", () => {
    const creator = sut.creators[0];
    testModelSet.agentByIri(creator.iris[0]!);
    expect(work.agents.some(agent => agent.agent.iris[0] === creator.iris[0]))
      .to.be.true;
  });
});
