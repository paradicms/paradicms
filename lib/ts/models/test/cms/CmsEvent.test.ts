import {describe} from "mocha";
import {Event} from "../../src/Event";
import {behavesLikeEvent} from "../behavesLikeEvent";
import {testCmsModelSet} from "./testCmsModelSet";

describe("CmsEvent", () => {
  const event: Event = testCmsModelSet.workEvents[0];

  behavesLikeEvent(event);
});
