import {NamedNode} from "@rdfjs/types";
import {ImagesMixin} from "./ImagesMixin";
import {Model} from "./Model";
import {PropertyGroup} from "./PropertyGroup";
import {PropertyValue} from "./PropertyValue";
import {Text} from "./Text";
import {ThumbnailMixin} from "./ThumbnailMixin";

export interface Property extends Model, ImagesMixin, ThumbnailMixin {
  readonly comment: Text | null;
  readonly filterable: boolean;
  readonly hidden: boolean;
  readonly label: string;
  readonly groups: readonly PropertyGroup[];
  readonly order: number;
  readonly range: NamedNode | null;
  readonly rangeValues: readonly PropertyValue[];
  readonly searchable: boolean;
}
