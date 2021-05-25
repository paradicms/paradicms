import {expect} from "chai";
import {describe} from "mocha";
import {IndexedFormula} from "rdflib";
import {parseTestData} from "./parseTestData";
import {PropertyDefinitionRdfReader} from "../src/PropertyDefinitionRdfReader";

describe("PropertyDefinition RDF reader", () => {
  let store: IndexedFormula;

  before(function(this: any) {
    // @ts-ignore
    this.timeout(10000);
    store = parseTestData();
  });

  it("should read all property definitions from the store", () => {
    const models = PropertyDefinitionRdfReader.readAll(store);
    expect(models).to.have.length(37);
    models.forEach(model => {
      expect(model.label.trim()).to.not.be.empty;
      expect(model.uri.trim()).to.not.be.empty;
    });
    expect(models.some(model => model.faceted)).to.be.true;
    expect(models.some(model => model.fullTextSearchable)).to.be.true;
  });
});
