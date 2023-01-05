import {schema} from "@paradicms/vocabularies";
import {ShapesGraph} from "@paradicms/shacl";
import {parseIntoDataset} from "@paradicms/rdf";
import {testShapesGraphTtl} from "./testShapesGraphTtl";
import {FormShape} from "@paradicms/shacl-forms";

export const testFormShape = new FormShape({
  id: "test",
  label: "Test form shape",
  nodeRdfTypes: [schema.Person],
  shapesGraph: new ShapesGraph(parseIntoDataset(testShapesGraphTtl)),
});
