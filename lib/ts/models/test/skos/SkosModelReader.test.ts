import {syntheticData} from "@paradicms/test";
import {expect} from "chai";
import {dummyModelSet} from "../dummyModelSet";
import {describe} from "mocha";
import {SkosModelReader} from "../../src/skos/SkosModelReader";

describe("SkosModelReader", () => {
  const sut = new SkosModelReader(syntheticData);

  it("should read concepts", () => {
    const concepts = sut.readConcepts({
      modelSet: dummyModelSet,
    });
    expect(concepts).not.to.be.empty;
    for (const concept of concepts) {
      expect(concept.label).not.to.be.empty;
    }
  });
});
