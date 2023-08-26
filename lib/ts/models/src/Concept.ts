import {Literal, NamedNode} from "@rdfjs/types";
import {DescriptionMixin} from "./DescriptionMixin";
import {ImagesMixin} from "./ImagesMixin";
import {Model} from "./Model";
import {ThumbnailMixin} from "./ThumbnailMixin";

export interface Concept
  extends Model,
    DescriptionMixin,
    ImagesMixin,
    ThumbnailMixin {
  readonly altLabels: readonly Literal[];
  readonly label: string;
  readonly value: Literal | NamedNode;
}
