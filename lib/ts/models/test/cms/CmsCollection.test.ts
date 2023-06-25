import {expect} from "chai";
import {describe} from "mocha";
import {modelIdentifiersToKey} from "../../src/modelIdentifiersToKey";
import {DataFactory} from "@paradicms/rdf";
import {behavesLikeCollection} from "../behavesLikeCollection";
import {requireNonNull} from "@paradicms/utilities";
import {CmsCollection} from "../../src/cms/CmsCollection";
import {testCmsModelSet} from "./testCmsModelSet";

describe("CmsCollection", () => {
  const collection: CmsCollection = requireNonNull(
    testCmsModelSet.collectionByKey(
      modelIdentifiersToKey([
        DataFactory.namedNode("http://example.com/collection1"),
      ])
    )
  ) as CmsCollection;

  it("should get the collection's title", () => {
    expect(collection.title).to.eq(collection.title);
  });

  behavesLikeCollection(collection);
});
