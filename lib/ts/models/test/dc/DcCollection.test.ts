import {expect} from "chai";
import {describe} from "mocha";
import {modelIdentifiersToKey} from "../../src/modelIdentifiersToKey";
import {DataFactory} from "@paradicms/rdf";
import {behavesLikeCollection} from "../behavesLikeCollection";
import {requireNonNull} from "@paradicms/utilities";
import {testModelSet} from "../testModelSet";
import {DcCollection} from "../../src/dc/DcCollection";

describe("DcCollection", () => {
  const collection: DcCollection = requireNonNull(
    testModelSet.collectionByKey(
      modelIdentifiersToKey([
        DataFactory.namedNode("http://example.com/collection0"),
      ])
    )
  ) as DcCollection;

  before(() => {
    expect(collection).to.be.instanceof(DcCollection);
  });

  it("should get the collection's title", () => {
    expect(collection.title).to.eq(collection.title);
  });

  behavesLikeCollection(collection);
});
