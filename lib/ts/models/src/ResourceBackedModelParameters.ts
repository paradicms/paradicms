import {DatasetCore, NamedNode} from "@rdfjs/types";
import {ModelSet} from "./ModelSet";

export interface ResourceBackedModelParameters {
  dataset: DatasetCore;
  graph: NamedNode;
  iri: NamedNode;
  modelSet: ModelSet;
}
