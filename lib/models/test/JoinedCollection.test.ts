import {expect} from "chai";
import {testDataset} from "./testDataset";
import {JoinedDataset} from "../src/JoinedDataset";

describe("JoinedCollection", () => {
  const collection = testDataset.collections[0];
  const sut = JoinedDataset.fromDataset(testDataset).collectionByUri(collection.uri);

  it("should get the collection's institution", () => {
    expect(sut.institution.uri).to.eq(collection.institutionUri);
  });

  it("should get the collection's title", () => {
    expect(sut.title).to.eq(collection.title);
  });

  it("should get the collection's URI", () => {
    expect(sut.uri).to.eq(collection.uri);
  });

  it("should get the collection's thumbnail", () => {
    const thumbnail = sut.thumbnail({targetDimensions: {height: 200, width: 200}});
    expect(thumbnail).to.not.be.null;
    expect(thumbnail!.asImage.depictsUri).to.not.eq(collection.uri);
    expect(sut.objects.some(object => object.uri === thumbnail!.asImage.depictsUri)).to.be.true;
  });
});
