import {ValueFilter} from "./ValueFilter";

export interface InstitutionValueFilter extends ValueFilter<string> {
  readonly type: "InstitutionValue";
}
