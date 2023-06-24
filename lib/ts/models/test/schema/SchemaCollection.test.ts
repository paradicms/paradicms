import {expect} from "chai";
import {testModelSet} from "../testModelSet";
import {describe} from "mocha";
import {SchemaCollection} from "../../src/schema/SchemaCollection";
import {modelIdentifiersToKey} from "../../src/modelIdentifiersToKey";
import {DataFactory} from "@paradicms/rdf";
import {behavesLikeCollection} from "../behavesLikeCollection";

describe("SchemaCollection", () => {
  const collection: SchemaCollection = testModelSet.collectionByKey(
    modelIdentifiersToKey([
      DataFactory.namedNode("http://example.com/collection0"),
    ])
  )! as SchemaCollection;

  it("should get the collection's name", () => {
    expect(collection.name).to.eq(collection.name);
  });

  behavesLikeCollection(collection);
});
