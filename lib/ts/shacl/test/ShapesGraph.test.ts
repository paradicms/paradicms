import {expect} from "chai";
import {ShapesGraph} from "../src";
import {parseIntoDataset} from "@paradicms/rdf";
import {testShapesGraphTtl} from "@paradicms/test";

describe("ShapesGraph", () => {
  let shapesGraph: ShapesGraph;

  before(() => {
    shapesGraph = new ShapesGraph(parseIntoDataset(testShapesGraphTtl));
  });

  it("should parse the shapes correctly", () => {
    expect(shapesGraph).to.not.be.undefined;
    expect(shapesGraph.nodeShapes).to.have.length(4);
    expect(shapesGraph.propertyShapes).to.have.length(6);
  });
});