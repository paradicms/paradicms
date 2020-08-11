import {StringFilter} from "~/models/search/StringFilter";

export interface ObjectPropertyFilter extends StringFilter {
  readonly key: string;
}
