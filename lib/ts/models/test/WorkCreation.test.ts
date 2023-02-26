import {expect} from "chai";
import {ModelSet} from "../src";
import {testData} from "@paradicms/test";
import {WorkCreation} from "../src/WorkCreation";

describe("WorkCreation", () => {
  const modelSet = ModelSet.fromDatasetCore(testData);
  const work = modelSet.works[0];
  const sut: WorkCreation = modelSet
    .workEventsByWork(work.uri)
    .find(event => event instanceof WorkCreation)! as WorkCreation;

  before(() => {
    expect(sut).is.not.undefined;
  });

  it("should expose the creator", () => {
    const creator = sut.creatorAgents[0];
    modelSet.agentByUri(creator.uri);
    expect(work.agents.some(agent => agent.agent.uri === creator.uri)).to.be
      .true;
  });
});
