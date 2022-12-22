import {schema} from "@paradicms/vocabularies";
import {ShapesGraph} from "@paradicms/shacl";
import {parseIntoDataset} from "@paradicms/rdf";
import {testShapesGraphTtl} from "./testShapesGraphTtl";
import {NamedFormShape} from "../models/NamedFormShape";

export const testNamedFormShape = new NamedFormShape({
  id: "test",
  label: "Test form shape",
  nodeRdfTypes: [schema.Person],
  shapesGraph: new ShapesGraph(parseIntoDataset(testShapesGraphTtl)),
});
