import {describe} from "mocha";
import {Event} from "../../src/Event";
import {behavesLikeEvent} from "../behavesLikeEvent";
import {testModelSet} from "../testModelSet";
import {expect} from "chai";
import {CmsEvent} from "../../src/cms/CmsEvent";

describe("CmsEvent", () => {
  const event: Event = testModelSet.workEvents[0];

  before(() => {
    expect(event).to.be.instanceof(CmsEvent);
  });

  behavesLikeEvent(event);
});
