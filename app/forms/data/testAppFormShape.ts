import {schema} from "@paradicms/vocabularies";
import {ShapesGraph} from "@paradicms/shacl";
import {parseIntoDataset} from "@paradicms/rdf";
import {testShapesGraphTtl} from "./testShapesGraphTtl";
import {AppFormShape} from "../models/AppFormShape";

export const testAppFormShape = new AppFormShape({
  id: "test",
  label: "Test form shape",
  nodeRdfTypes: [schema.Person],
  shapesGraph: new ShapesGraph(parseIntoDataset(testShapesGraphTtl)),
});
