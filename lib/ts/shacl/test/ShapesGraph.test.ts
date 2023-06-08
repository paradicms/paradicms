import {expect} from "chai";
import {ShapesGraph} from "../src";
import {testShapesGraph} from "@paradicms/test";

describe("ShapesGraph", () => {
  let shapesGraph: ShapesGraph;

  before(() => {
    shapesGraph = ShapesGraph.fromDataset(testShapesGraph);
  });

  it("should parse the shapes correctly", () => {
    expect(shapesGraph).to.not.be.undefined;
    expect(shapesGraph.nodeShapes).to.have.length(4);
    expect(shapesGraph.propertyShapes).to.have.length(6);
  });
});
