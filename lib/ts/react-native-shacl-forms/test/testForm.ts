import {ShapesGraph} from "@paradicms/shacl";
import {parseIntoDataset} from "@paradicms/rdf";
import {schema} from "@paradicms/vocabularies";
import {testShapesGraphTtl, validTestDataGraphTtl} from "@paradicms/test";
import {Form} from "@paradicms/shacl-forms";

export const testForm = () =>
  new Form({
    dataGraph: parseIntoDataset(validTestDataGraphTtl),
    id: "test",
    nodeRdfTypes: [schema.Person],
    shapesGraph: new ShapesGraph(parseIntoDataset(testShapesGraphTtl)),
  });
