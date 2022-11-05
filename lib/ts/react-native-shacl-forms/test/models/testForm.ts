import {Form} from "../../src/models/Form";
import {DataGraph} from "../../../shacl/src/DataGraph";
import {validTestDataGraphTtl} from "../validTestDataGraphTtl";
import {ShapesGraph} from "@paradicms/shacl";
import {testShapesGraphTtl} from "../testShapesGraphTtl";

export const testForm = () =>
  new Form({
    dataGraph: DataGraph.parse(validTestDataGraphTtl),
    shapesGraph: ShapesGraph.parse(testShapesGraphTtl),
  });
