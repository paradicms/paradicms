import {BlankNode, Literal, NamedNode} from "@rdfjs/types";
import {ImagesMixin} from "./ImagesMixin";
import {Model} from "./Model";
import {ThumbnailMixin} from "./ThumbnailMixin";
import {DescriptionMixin} from "./DescriptionMixin";

export interface Concept
  extends Model,
    DescriptionMixin,
    ImagesMixin,
    ThumbnailMixin {
  readonly altLabels: readonly Literal[];
  readonly label: string;
  readonly value: BlankNode | Literal | NamedNode;
}
