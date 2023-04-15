import {NamedModel} from "./NamedModel";

export interface RightsStatement extends NamedModel {
  readonly definition: string | null;
  readonly description: string | null;
  readonly identifier: string;
  readonly prefLabel: string;
  toString(): string;
}
