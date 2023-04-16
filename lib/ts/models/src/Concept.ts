import {BlankNode, Literal, NamedNode} from "@rdfjs/types";
import {ImagesMixin} from "./ImagesMixin";
import {NamedModel} from "./NamedModel";
import {Text} from "./Text";

export interface Concept extends NamedModel, ImagesMixin {
  readonly altLabels: readonly Literal[];
  readonly description: string | Text | null;
  readonly label: string;
  readonly prefLabel: string | null;
  readonly value: BlankNode | Literal | NamedNode;
}
