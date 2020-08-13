import {StringFilter} from "~/models/StringFilter";

export interface PropertyFilter extends StringFilter {
  readonly key: string;
}
