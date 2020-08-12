import {StringFilter} from "~/models/search/StringFilter";

export interface PropertyFilter extends StringFilter {
  readonly key: string;
}
