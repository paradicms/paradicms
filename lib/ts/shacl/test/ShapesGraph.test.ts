import {expect} from "chai";
import {ShapesGraph} from "../src";
import {testShapesGraphTtl} from "./testShapesGraphTtl";
import {Parser, Store} from "n3";
import {validTestDataGraphTtl} from "./validTestDataGraphTtl";
import {invalidTestDataGraphTtl} from "./invalidTestDataGraphTtl";

const parseDataGraph = (ttl: string): Store => {
  const parser = new Parser();
  const store = new Store();
  store.addQuads(parser.parse(ttl));
  return store;
};

describe("Shapes", () => {
  let invalidData: Store;
  let validData: Store;
  let shapes: ShapesGraph;

  before(() => {
    invalidData = parseDataGraph(invalidTestDataGraphTtl);
    validData = parseDataGraph(validTestDataGraphTtl);
    shapes = ShapesGraph.parse(testShapesGraphTtl);
  });

  it("should parse the shapes correctly", () => {
    expect(shapes).to.not.be.undefined;
    expect(shapes.nodeShapes).to.have.length(2);
    expect(shapes.propertyShapes).to.have.length(6);
  });

  it("should validate a valid data graph", () => {
    const validationReport = shapes.validate(validData);
    expect(validationReport.results).to.be.empty;
  });

  it("should validate an invalid data graph", () => {
    const validationReport = shapes.validate(invalidData);
    expect(validationReport.results).to.have.length(2);
  });
});
