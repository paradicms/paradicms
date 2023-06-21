import {NamedNode} from "@rdfjs/types";
import {ImagesMixin} from "./ImagesMixin";
import {NamedModel} from "./NamedModel";
import {PropertyValue} from "./PropertyValue";
import {Text} from "./Text";
import {PropertyGroup} from "./PropertyGroup";

export interface Property extends NamedModel, ImagesMixin {
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
