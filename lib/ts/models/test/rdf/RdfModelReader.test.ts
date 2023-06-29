import {syntheticData} from "@paradicms/test";
import {expect} from "chai";
import {dummyModelSet} from "../dummyModelSet";
import {describe} from "mocha";
import {RdfModelReader} from "../../src/rdf/RdfModelReader";

describe("RdfModelReader", () => {
  const sut = new RdfModelReader(syntheticData);

  it("should read at least one Property", () => {
    expect(sut.readProperties({modelSet: dummyModelSet})).not.to.be.empty;
  });
});
