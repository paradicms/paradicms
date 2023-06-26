import {expect} from "chai";
import {describe} from "mocha";
import {CmsWorkCreation} from "../../src/cms/CmsWorkCreation";
import {testModelSet} from "../testModelSet";

describe("CmsWorkCreation", () => {
  const work = testModelSet.works[0];
  const workCreation: CmsWorkCreation = work.events.find(
    workEvent => workEvent.type === "WorkCreation"
  ) as CmsWorkCreation;

  before(() => {
    expect(work).to.be.instanceof(CmsWorkCreation);
  });

  it("should expose the creator", () => {
    const creator = workCreation.creators[0];
    testModelSet.agentByIri(creator.iris[0]!)!;
    expect(work.agents.some(agent => agent.agent.iris[0] === creator.iris[0]))
      .to.be.true;
  });
});
