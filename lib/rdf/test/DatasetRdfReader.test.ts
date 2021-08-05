import {describe} from "mocha";
import {parseTestData} from "./parseTestData";
import {DatasetRdfReader} from "../src/DatasetRdfReader";
import {Store} from "n3";
import {expect} from "chai";

describe("Dataset RDF reader", () => {
  let store: Store;

  before(function(this: any) {
    // @ts-ignore
    this.timeout(10000);
    store = parseTestData();
  });

  it("should read a dataset from the store", () => {
    const model = DatasetRdfReader.read(store);
    expect(model.collections).to.not.be.empty;
    expect(model.images).to.not.be.empty;
    expect(model.institutions).to.not.be.empty;
    expect(model.licenses).to.not.be.empty;
    expect(model.objects).to.not.be.empty;
    expect(model.propertyDefinitions).to.not.be.empty;
    expect(model.rightsStatements).to.not.be.empty;
    // console.log(JSON.stringify(model));
  });
});
