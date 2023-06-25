import {expect} from "chai";
import {describe} from "mocha";
import {SchemaCollection} from "../../src/schema/SchemaCollection";
import {modelIdentifiersToKey} from "../../src/modelIdentifiersToKey";
import {DataFactory} from "@paradicms/rdf";
import {behavesLikeCollection} from "../behavesLikeCollection";
import {testSchemaModelSet} from "./testSchemaModelSet";
import {requireNonNull} from "@paradicms/utilities";

describe("SchemaCollection", () => {
  const collection: SchemaCollection = requireNonNull(
    testSchemaModelSet.collectionByKey(
      modelIdentifiersToKey([
        DataFactory.namedNode("http://example.com/collection0"),
      ])
    )
  ) as SchemaCollection;

  it("should get the collection's name", () => {
    expect(collection.name).to.eq(collection.name);
  });

  behavesLikeCollection(collection);
});
