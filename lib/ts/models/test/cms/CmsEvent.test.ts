import {describe} from "mocha";
import {behavesLikeEvent} from "../behavesLikeEvent";
import {testModelSet} from "../testModelSet";
import {expect} from "chai";
import {CmsWorkCreation} from "../../src/cms/CmsWorkCreation";

describe("CmsEvent", () => {
  const work = testModelSet.works[0];
  const workCreation: CmsWorkCreation = work.events.find(
    workEvent => workEvent.type === "WorkCreation"
  ) as CmsWorkCreation;

  before(() => {
    expect(workCreation).to.be.instanceof(CmsWorkCreation);
  });

  behavesLikeEvent(workCreation);
});
