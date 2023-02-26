import {expect} from "chai";
import {ShapesGraph} from "../src";
import {DataFactory} from "@paradicms/rdf";
import {testShapesGraph} from "@paradicms/test";

describe("Shapes", () => {
  let shapes: ShapesGraph;

  before(() => {
    shapes = ShapesGraph.fromDatasetCore(testShapesGraph);
  });

  it("should have properties", () => {
    {
      const personNodeShape = shapes.nodeShapeByNode(
        DataFactory.namedNode("http://schema.org/PersonShape")
      );
      expect(personNodeShape.properties).have.length(4);
    }
    {
      const addressNodeShape = shapes.nodeShapeByNode(
        DataFactory.namedNode("http://schema.org/AddressShape")
      );
      expect(addressNodeShape.properties).to.have.length(2);
    }
  });
});
