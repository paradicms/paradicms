import {Model} from "./Model";
import {NamedNode} from "@rdfjs/types";

export interface NamedModel extends Model {
  readonly identifiers: readonly NamedNode[];
}
