import {expect} from "chai";
import {describe} from "mocha";
import {IndexedFormula} from "rdflib";
import {parseTestData} from "./parseTestData";
import {LicenseRdfReader} from "../src/LicenseRdfReader";

describe("License RDF reader", () => {
  let store: IndexedFormula;

  before(function(this: any) {
    // @ts-ignore
    this.timeout(10000);
    store = parseTestData();
  });

  it("should read all licenses from the store", () => {
    const models = LicenseRdfReader.readAll(store);
    expect(models).to.have.length(23);
    models.forEach(model => {
      expect(model.identifier.trim()).to.not.be.empty;
      expect(model.title.trim()).to.not.be.empty;
      expect(model.uri.trim()).to.not.be.empty;
    });
  });
});
