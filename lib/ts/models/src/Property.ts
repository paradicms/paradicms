import {NamedNode} from "@rdfjs/types";
import {ImagesMixin} from "./ImagesMixin";
import {NamedModel} from "./NamedModel";
import {PropertyValue} from "./PropertyValue";

export interface Property extends NamedModel, ImagesMixin {
  readonly comment: string | null;
  readonly filterable: boolean;
  readonly label: string;
  readonly groupUris: readonly string[];
  readonly order: number;
  readonly range: NamedNode | null;
  readonly rangeValues: readonly PropertyValue[];
  readonly searchable: boolean;
}
