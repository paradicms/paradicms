import {expect} from "chai";
import {describe} from "mocha";
import {IndexedFormula} from "rdflib";
import {parseTestData} from "./parseTestData";
import {ObjectRdfReader} from "../src/ObjectRdfReader";
import {PropertyDefinitionRdfReader} from "../src/PropertyDefinitionRdfReader";

describe("Object RDF reader", () => {
  let store: IndexedFormula;

  before(function(this: any) {
    // @ts-ignore
    this.timeout(10000);
    store = parseTestData();
  });

  it("should read all objects from the store", function(this: any) {
    this.timeout(10000);
    const propertyDefinitions = PropertyDefinitionRdfReader.readAll(store);
    const models = ObjectRdfReader.readAll(store);
    expect(models).to.not.be.empty;
    models.forEach(model => {
      expect(model.abstract).to.not.be.empty;
      expect(model.collectionUris).to.not.be.empty;
      expect(model.institutionUri).to.not.be.empty;
      expect(model.properties).to.not.be.empty;
      model.properties!.forEach(property => {
        expect(property.uri.trim()).to.not.be.empty;
        expect(
          propertyDefinitions.find(
            propertyDefinition => propertyDefinition.uri === property.uri,
          ),
        ).to.not.be.undefined;
        if (typeof property.value === "string") {
          expect(property.value.trim()).to.not.be.empty;
        }
      });
      expect(model.rights).to.not.be.null;
      expect(model.title.trim()).to.not.be.empty;
      expect(model.uri.trim()).to.not.be.empty;
    });
  });
});
