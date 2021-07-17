import {expect} from "chai";
import {describe} from "mocha";
import {parseTestData} from "./parseTestData";
import {CollectionRdfReader} from "../src/CollectionRdfReader";
import {Store} from "n3";

describe("Collection RDF reader", () => {
  let store: Store;

  before(function(this: any) {
    // @ts-ignore
    this.timeout(10000);
    store = parseTestData();
  });

  it("should read all collections from the store", () => {
    const models = CollectionRdfReader.readAll(store);
    expect(models).to.not.be.empty;
    models.forEach(model => {
      expect(model.institutionUri.trim()).to.not.be.empty;
      expect(model.title.trim()).to.not.be.empty;
      expect(model.uri.trim()).to.not.be.empty;
    });
  });
});
