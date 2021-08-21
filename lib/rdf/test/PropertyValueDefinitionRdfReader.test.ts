import {expect} from "chai";
import {describe} from "mocha";
import {parseTestData} from "./parseTestData";
import {PropertyValueDefinitionRdfReader} from "../src/PropertyValueDefinitionRdfReader";
import {Store} from "n3";

describe("PropertyValueDefinition RDF reader", () => {
  let store: Store;

  before(function(this: any) {
    // @ts-ignore
    this.timeout(10000);
    store = parseTestData();
  });

  it("should read all property value definitions from the store", () => {
    const models = PropertyValueDefinitionRdfReader.readAll(store);
    expect(models).to.have.length(130);
    models.forEach(model => {
      expect(model.propertyUris).to.not.be.empty;
      expect(model.value.value.toString().trim()).to.not.be.empty;
      expect(model.uri.trim()).to.not.be.empty;
    });
  });
});
