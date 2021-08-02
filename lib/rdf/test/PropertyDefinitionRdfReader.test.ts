import {expect} from "chai";
import {describe} from "mocha";
import {parseTestData} from "./parseTestData";
import {PropertyDefinitionRdfReader} from "../src/PropertyDefinitionRdfReader";
import {Store} from "n3";

describe("PropertyDefinition RDF reader", () => {
  let store: Store;

  before(function(this: any) {
    // @ts-ignore
    this.timeout(10000);
    store = parseTestData();
  });

  it("should read all property definitions from the store", () => {
    const models = PropertyDefinitionRdfReader.readAll(store);
    expect(models).to.have.length(38);
    models.forEach(model => {
      expect(model.label.trim()).to.not.be.empty;
      expect(model.uri.trim()).to.not.be.empty;
    });
  });
});
