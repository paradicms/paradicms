import {expect} from "chai";
import {describe} from "mocha";
import {IndexedFormula} from "rdflib";
import {parseTestData} from "./parseTestData";
import {RightsStatementRdfReader} from "../src/RightsStatementRdfReader";

describe("RightsStatement RDF reader", () => {
  let store: IndexedFormula;

  before(function(this: any) {
    // @ts-ignore
    this.timeout(10000);
    store = parseTestData();
  });

  it("should read all rights statements from the store", () => {
    const models = RightsStatementRdfReader.readAll(store);
    expect(models).to.have.length(15);
    models.forEach(model => {
      expect(model.identifier.trim()).to.not.be.empty;
      expect(model.prefLabel.trim()).to.not.be.empty;
      expect(model.uri.trim()).to.not.be.empty;
    });
    expect(models.some(model => !!model.definition)).to.be.true;
    expect(models.some(model => !!model.description)).to.be.true;
  });
});
