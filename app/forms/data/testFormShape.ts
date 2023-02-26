import {schema} from "@paradicms/vocabularies";
import {ShapesGraph} from "@paradicms/shacl";
import {FormShape} from "@paradicms/shacl-forms";
import {testShapesGraph} from "@paradicms/test";

export const testFormShape = new FormShape({
  id: "test",
  label: "Test form shape",
  nodeRdfTypes: [schema.Person],
  shapesGraph: ShapesGraph.fromDatasetCore(testShapesGraph),
});
