import {expect} from "chai";
import {testModelSet} from "../testModelSet";
import {describe} from "mocha";
import {behavesLikeDateTimeDescription} from "../behavesLikeDateTimeDescription";
import {OwlTimeDateTimeDescription} from "../../src/owl-time/OwlTimeDateTimeDescription";

describe("OwlTimeDateTimeDescription", () => {
  let dateTimeDescription: OwlTimeDateTimeDescription;
  for (const work of testModelSet.works) {
    for (const workEvent of work.events) {
      if (
        workEvent.type === "WorkModification" &&
        workEvent.date instanceof OwlTimeDateTimeDescription
      ) {
        dateTimeDescription = workEvent.date as OwlTimeDateTimeDescription;
      }
    }
  }

  before(() => {
    expect(dateTimeDescription).to.be.instanceof(OwlTimeDateTimeDescription);
  });

  behavesLikeDateTimeDescription(dateTimeDescription!);
});
