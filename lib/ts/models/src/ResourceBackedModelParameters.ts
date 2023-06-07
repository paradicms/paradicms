import {Dataset} from "@rdfjs/types";
import {ModelSet} from "./ModelSet";
import {ModelIdentifier} from "./ModelIdentifier";
import {ModelGraphIdentifier} from "./ModelGraphIdentifier";

export interface ResourceBackedModelParameters {
  dataset: Dataset;
  graph: ModelGraphIdentifier;
  identifier: ModelIdentifier;
  modelSet: ModelSet;
}
