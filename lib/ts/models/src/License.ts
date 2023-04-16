import {NamedModel} from "./NamedModel";

export interface License extends NamedModel {
  readonly identifier: string;
  readonly requiresAttribution: boolean;
  readonly title: string;
}
