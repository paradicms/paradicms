import {NamedNode} from "@rdfjs/types";
import {ImagesMixin} from "./ImagesMixin";
import {Model} from "./Model";
import {Text} from "./Text";
import {PropertyGroup} from "./PropertyGroup";
import {ThumbnailMixin} from "./ThumbnailMixin";
import {PropertyValueUnion} from "./PropertyValueUnion";

export interface Property extends Model, ImagesMixin, ThumbnailMixin {
  readonly comment: Text | null;
  readonly filterable: boolean;
  readonly hidden: boolean;
  readonly label: string;
  readonly groups: readonly PropertyGroup[];
  readonly order: number;
  readonly range: NamedNode | null;
  readonly rangeValues: readonly PropertyValueUnion[];
  readonly searchable: boolean;
}
