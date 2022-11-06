import {expect} from "chai";
import {DataGraph, ShapesGraph} from "../src";
import {testShapesGraphTtl} from "./testShapesGraphTtl";
import {validTestDataGraphTtl} from "./validTestDataGraphTtl";
import {invalidTestDataGraphTtl} from "./invalidTestDataGraphTtl";

describe("Shapes", () => {
  let invalidDataGraph: DataGraph;
  let validDataGraph: DataGraph;
  let shapes: ShapesGraph;

  before(() => {
    invalidDataGraph = DataGraph.parse(invalidTestDataGraphTtl);
    validDataGraph = DataGraph.parse(validTestDataGraphTtl);
    shapes = ShapesGraph.parse(testShapesGraphTtl);
  });

  it("should parse the shapes correctly", () => {
    expect(shapes).to.not.be.undefined;
    expect(shapes.nodeShapes).to.have.length(4);
    expect(shapes.propertyShapes).to.have.length(6);
  });

  it("should validate a valid data graph", () => {
    const validationReport = shapes.validate(validDataGraph);
    expect(validationReport.results).to.be.empty;
  });

  it("should validate an invalid data graph", () => {
    const validationReport = shapes.validate(invalidDataGraph);
    expect(validationReport.results).to.have.length(2);
  });
});
