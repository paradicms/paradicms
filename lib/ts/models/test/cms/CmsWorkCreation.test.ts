import {expect} from "chai";
import {testModelSet} from "../testModelSet";
import {describe} from "mocha";
import {CmsWorkCreation} from "../../src/cms/CmsWorkCreation";
import {testCmsModelSet} from "./testCmsModelSet";

describe("CmsWorkCreation", () => {
  const work = testCmsModelSet.works[0];
  const sut: CmsWorkCreation = work.events.find(
    workEvent => workEvent.type === "WorkCreation"
  ) as CmsWorkCreation;

  before(() => {
    expect(sut).is.not.undefined;
  });

  it("should expose the creator", () => {
    const creator = sut.creators[0];
    testModelSet.agentByIri(creator.iris[0]!)!;
    expect(work.agents.some(agent => agent.agent.iris[0] === creator.iris[0]))
      .to.be.true;
  });
});
