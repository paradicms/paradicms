import {expect} from "chai";
import {ModelSet} from "../src";
import {testDataTrig} from "./testDataTrig";
import {WorkCreation} from "../src/WorkCreation";

describe("WorkCreation", () => {
  const dataset = ModelSet.parse(testDataTrig);
  const work = dataset.works[0];
  const sut: WorkCreation = dataset
    .workEventsByWork(work.uri)
    .find(event => event instanceof WorkCreation)! as WorkCreation;

  before(() => {
    expect(sut).is.not.undefined;
  });

  it("should expose the creator", () => {
    const creator = sut.creatorAgents[0];
    dataset.agentByUri(creator.uri);
    expect(work.agents.some(agent => agent.agent.uri === creator.uri)).to.be
      .true;
  });
});
