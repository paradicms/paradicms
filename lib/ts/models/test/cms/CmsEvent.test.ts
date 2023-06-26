import {describe} from "mocha";
import {Event} from "../../src/Event";
import {behavesLikeEvent} from "../behavesLikeEvent";
import {testModelSet} from "../testModelSet";
import {expect} from "chai";
import {CmsWorkCreation} from "../../src/cms/CmsWorkCreation";

describe("CmsEvent", () => {
  const event: Event = testModelSet.workEvents[0];

  before(() => {
    expect(event).to.be.instanceof(CmsWorkCreation);
  });

  behavesLikeEvent(event);
});
