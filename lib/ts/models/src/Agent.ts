import {NamedModel} from "./NamedModel";
import {ImagesMixin} from "./ImagesMixin";

export interface Agent extends NamedModel, ImagesMixin {
  readonly name: string;
  readonly page: string | null;
  toString(): string;
}
