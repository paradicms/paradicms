import {expect} from "chai";
import {describe} from "mocha";
import {OwlTimePartialDateTimeDescription} from "../../src/owl-time/OwlTimePartialDateTimeDescription";
import {behavesLikePartialDateTimeDescription} from "../behavesLikePartialDateTimeDescription";
import {testModelSet} from "../testModelSet";

describe("OwlTimePartialDateTimeDescription", () => {
  let partialDateTimeDescription: OwlTimePartialDateTimeDescription;
  for (const work of testModelSet.works) {
    for (const workEvent of work.events) {
      if (
        workEvent.type === "WorkModification" &&
        workEvent.date instanceof OwlTimePartialDateTimeDescription
      ) {
        partialDateTimeDescription = workEvent.date as OwlTimePartialDateTimeDescription;
      }
    }
  }

  before(() => {
    expect(partialDateTimeDescription).to.be.instanceof(
      OwlTimePartialDateTimeDescription
    );
  });

  behavesLikePartialDateTimeDescription(partialDateTimeDescription!);
});
