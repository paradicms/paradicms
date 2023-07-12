import {BlankNode, Literal, NamedNode} from "@rdfjs/types";
import {ImagesMixin} from "./ImagesMixin";
import {Model} from "./Model";
import {Text} from "./Text";
import {ThumbnailMixin} from "./ThumbnailMixin";

export interface Concept extends Model, ImagesMixin, ThumbnailMixin {
  readonly altLabels: readonly Literal[];
  readonly description: Text | null;
  readonly label: string;
  readonly value: BlankNode | Literal | NamedNode;
}
