import {expect} from "chai";
import {describe} from "mocha";
import {testModelSet} from "../testModelSet";
import {requireNonNull} from "@paradicms/utilities";
import {SchemaEvent} from "../../src/schema/SchemaEvent";
import {behavesLikeEvent} from "../behavesLikeEvent";

describe("SchemaEvent", () => {
  const event: SchemaEvent = requireNonNull(
    testModelSet.events[0]
  ) as SchemaEvent;

  before(() => {
    expect(event).to.be.instanceof(SchemaEvent);
  });

  behavesLikeEvent(event);
});
