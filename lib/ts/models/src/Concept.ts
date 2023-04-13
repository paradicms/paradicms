import {BlankNode, Literal, NamedNode} from "@rdfjs/types";
import {ImagesMixin} from "./ImagesMixin";
import {Text} from "./Text";
import {NamedModel} from "./NamedModel";

export interface Concept extends NamedModel, ImagesMixin {
  readonly altLabels: readonly Literal[];
  readonly description: string | Text | null;
  readonly prefLabel: string | null;
  readonly value: BlankNode | Literal | NamedNode;
}
