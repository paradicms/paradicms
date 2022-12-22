import {FormData, FormShape} from "@paradicms/shacl-forms";
import {ShapesGraph} from "@paradicms/shacl";
import {parseIntoDataset} from "@paradicms/rdf";
import {schema} from "@paradicms/vocabularies";
import {validTestDataGraphTtl} from "./validTestDataGraphTtl";
import {testShapesGraphTtl} from "./testShapesGraphTtl";

export const testFormData = () =>
  new FormData({
    dataGraph: parseIntoDataset(validTestDataGraphTtl),
    shape: new FormShape({
      nodeRdfTypes: [schema.Person],
      shapesGraph: new ShapesGraph(parseIntoDataset(testShapesGraphTtl)),
    }),
  });
