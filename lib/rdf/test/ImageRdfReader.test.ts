import {expect} from "chai";
import {describe} from "mocha";
import {IndexedFormula} from "rdflib";
import {parseTestData} from "./parseTestData";
import {ImageRdfReader} from "../src/ImageRdfReader";

describe("Image RDF reader", () => {
  let store: IndexedFormula;

  before(function(this: any) {
    // @ts-ignore
    this.timeout(10000);
    store = parseTestData();
  });

  it("should read all images from the store", () => {
    const models = ImageRdfReader.readAll(store);
    expect(models).to.have.length(564);
    models.forEach(model => {
      expect(model.depictsUri.trim()).to.not.be.empty;
      expect(model.institutionUri.trim()).to.not.be.empty;
      expect(model.uri.trim()).to.not.be.empty;
    });
  });
});
