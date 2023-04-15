import {Dataset} from "@rdfjs/types";
import {ModelSet} from "ModelSet";

export interface DatasetBackedModelSet extends ModelSet {
  readonly dataset: Dataset;
}
