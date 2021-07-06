import {expect} from "chai";
import {describe} from "mocha";
import {IndexedFormula} from "rdflib";
import {parseTestData} from "./parseTestData";
import {GuiMetadataRdfReader} from "../src/GuiMetadataRdfReader";

describe("GUI metadata RDF reader", () => {
  let store: IndexedFormula;

  before(function(this: any) {
    // @ts-ignore
    this.timeout(10000);
    store = parseTestData();
  });

  it("should read all GUI metadata objects from the store", () => {
    const models = GuiMetadataRdfReader.readAll(store);
    expect(models).to.have.length(1);
    models.forEach(model => {
      expect(model.bootstrapStylesheetHref!.trim()).to.not.be.empty;
      expect(model.documentTitle!.trim()).to.not.be.empty;
      expect(model.navbarTitle!.trim()).to.not.be.empty;
    });
  });
});
