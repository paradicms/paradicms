import {expect} from "chai";
import {describe} from "mocha";
import {parseTestData} from "./parseTestData";
import {ImageRdfReader} from "../src/ImageRdfReader";
import {Store} from "n3";

describe("Image RDF reader", () => {
  let store: Store;

  before(function(this: any) {
    // @ts-ignore
    this.timeout(10000);
    store = parseTestData();
  });

  it("should read all images from the store", () => {
    const models = ImageRdfReader.readAll(store);
    expect(models).to.not.be.empty;
    models.forEach(model => {
      expect(model.depictsUri.trim()).to.not.be.empty;
      expect(model.rights).to.not.be.null;
      expect(model.rights!.statement!.type).to.equal("uri");
      expect(model.rights!.statement!.value).to.equal(
        "http://rightsstatements.org/vocab/InC-EDU/1.0/"
      );
      expect(model.uri.trim()).to.not.be.empty;
    });
  });
});
