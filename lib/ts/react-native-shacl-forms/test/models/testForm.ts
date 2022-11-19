import {Form} from "../../../shacl-forms/src/Form";
import {validTestDataGraphTtl} from "../validTestDataGraphTtl";
import {ShapesGraph} from "@paradicms/shacl";
import {testShapesGraphTtl} from "../testShapesGraphTtl";
import {parseIntoDataset} from "@paradicms/rdf";
import {schema} from "@paradicms/vocabularies";

export const testForm = () =>
  new Form({
    dataGraph: parseIntoDataset(validTestDataGraphTtl),
    nodeRdfTypes: [schema.Person],
    shapesGraph: new ShapesGraph(parseIntoDataset(testShapesGraphTtl)),
  });
