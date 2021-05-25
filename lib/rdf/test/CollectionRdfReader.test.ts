import {expect} from "chai";
import {describe} from "mocha";
import {IndexedFormula} from "rdflib";
import {parseTestData} from "./parseTestData";
import {CollectionRdfReader} from "../src/CollectionRdfReader";

describe("Collection RDF reader", () => {
  let store: IndexedFormula;

  before(function(this: any) {
    // @ts-ignore
    this.timeout(10000);
    store = parseTestData();
  });

  it("should read all collections from the store", () => {
    const models = CollectionRdfReader.readAll(store);
    expect(models).to.have.length(4);
    models.forEach(model => {
      expect(model.institutionUri.trim()).to.not.be.empty;
      expect(model.title.trim()).to.not.be.empty;
      expect(model.uri.trim()).to.not.be.empty;
    });
  });
});
