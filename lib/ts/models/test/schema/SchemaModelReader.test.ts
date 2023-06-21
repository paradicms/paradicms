import {syntheticData} from "@paradicms/test";
import {expect} from "chai";
import {dummyModelSet} from "../dummyModelSet";
import {describe} from "mocha";
import {SchemaModelReader} from "../../src/schema/SchemaModelReader";

describe("SchemaModelReader", () => {
  const sut = new SchemaModelReader(syntheticData);

  it("should read at least one Collection", () => {
    expect(sut.readCollections({modelSet: dummyModelSet})).not.to.be.empty;
  });
});
