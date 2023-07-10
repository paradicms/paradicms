import {expect} from "chai";
import {describe} from "mocha";
import {testModelSet} from "../testModelSet";
import {requireNonNull} from "@paradicms/utilities";
import {behavesLikeEvent} from "../behavesLikeEvent";
import {SchemaExhibitionEvent} from "../../src/schema/SchemaExhibitionEvent";

describe("SchemaExhibitionEvent", () => {
  const event: SchemaExhibitionEvent = requireNonNull(
    testModelSet.events[0]
  ) as SchemaExhibitionEvent;

  before(() => {
    expect(event).to.be.instanceof(SchemaExhibitionEvent);
  });

  behavesLikeEvent(event);
});
