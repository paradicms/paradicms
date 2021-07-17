import {expect} from "chai";
import {describe} from "mocha";
import {parseTestData} from "./parseTestData";
import {LicenseRdfReader} from "../src/LicenseRdfReader";
import {Store} from "n3";

describe("License RDF reader", () => {
  let store: Store;

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
