import {Form} from "../../src/models/Form";
import {validTestDataGraphTtl} from "../validTestDataGraphTtl";
import {DataGraph, ShapesGraph} from "@paradicms/shacl";
import {testShapesGraphTtl} from "../testShapesGraphTtl";
import {DataFactory} from "n3";

export const testForm = () =>
  new Form({
    dataGraph: DataGraph.parse(validTestDataGraphTtl),
    nodeRdfTypes: [DataFactory.namedNode("http://schema.org/Person")],
    shapesGraph: ShapesGraph.parse(testShapesGraphTtl),
  });
