import {expect} from "chai";
import {Text} from "../../src";
import {testModelSet} from "../testModelSet";
import {describe} from "mocha";
import {SchemaCollection} from "../../src/schema/SchemaCollection";

describe("SchemaCollection", () => {
  const sut: SchemaCollection = testModelSet.collectionByIri(
    "http://example.com/collection0"
  ) as SchemaCollection;

  it("should get the collection's description", () => {
    expect(sut.description).not.to.be.null;
    expect(sut.description).not.to.be.instanceof(String);
    const description: Text = sut.description as Text;
    expect(description.value).to.not.be.empty;
  });

  it("should get the collection's name", () => {
    expect(sut.name).to.eq(sut.name);
  });

  it("should get the collection's works", () => {
    expect(sut.works).not.to.be.empty;
  });
});
