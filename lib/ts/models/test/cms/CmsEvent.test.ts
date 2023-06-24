import {describe} from "mocha";
import {testModelSet} from "../testModelSet";
import {Event} from "../../src/Event";
import {behavesLikeEvent} from "../behavesLikeEvent";

describe("CmsEvent", () => {
  const event: Event = testModelSet.works[0].events[0]!;

  behavesLikeEvent(event);
});
