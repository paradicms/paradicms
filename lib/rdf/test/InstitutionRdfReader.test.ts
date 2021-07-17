import {expect} from "chai";
import {describe} from "mocha";
import {parseTestData} from "./parseTestData";
import {InstitutionRdfReader} from "../src/InstitutionRdfReader";
import {Store} from "n3";

describe("Institution RDF reader", () => {
  let store: Store;

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
