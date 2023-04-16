import {NamedModel} from "./NamedModel";

export interface License extends NamedModel {
  readonly label: string;
  readonly requiresAttribution: boolean;
}
