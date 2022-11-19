import {expect} from "chai";
import {ModelSet} from "../src";
import {testDataTrig} from "@paradicms/test";
import {WorkCreation} from "../src/WorkCreation";
import {parseIntoDataset} from "@paradicms/rdf";

describe("WorkCreation", () => {
  const modelSet = new ModelSet(parseIntoDataset(testDataTrig));
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
