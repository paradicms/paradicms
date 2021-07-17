import {expect} from "chai";
import {describe} from "mocha";
import {parseTestData} from "./parseTestData";
import {GuiMetadataRdfReader} from "../src/GuiMetadataRdfReader";
import {Store} from "n3";

describe("GUI metadata RDF reader", () => {
  let store: Store;

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
