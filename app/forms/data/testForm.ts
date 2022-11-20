import {ShapesGraph} from "@paradicms/shacl";
import {parseIntoDataset} from "@paradicms/rdf";
import {schema} from "@paradicms/vocabularies";
import {Form} from "@paradicms/shacl-forms";
import {validTestDataGraphTtl} from "./validTestDataGraphTtl";
import {testShapesGraphTtl} from "./testShapesGraphTtl";

export const testForm = new Form({
  dataGraph: parseIntoDataset(validTestDataGraphTtl),
  nodeRdfTypes: [schema.Person],
  shapesGraph: new ShapesGraph(parseIntoDataset(testShapesGraphTtl)),
});
