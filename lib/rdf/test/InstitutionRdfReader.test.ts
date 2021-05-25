import {expect} from "chai";
import {describe} from "mocha";
import {IndexedFormula} from "rdflib";
import {parseTestData} from "./parseTestData";
import {InstitutionRdfReader} from "../src/InstitutionRdfReader";

describe("Institution RDF reader", () => {
  let store: IndexedFormula;

  before(function(this: any) {
    // @ts-ignore
    this.timeout(10000);
    store = parseTestData();
  });

  it("should read all institutions from the store", () => {
    const models = InstitutionRdfReader.readAll(store);
    expect(models).to.have.length(2);
    models.forEach(model => {
      expect(model.name.trim()).to.not.be.empty;
      expect(model.uri.trim()).to.not.be.empty;
    });
  });
});
