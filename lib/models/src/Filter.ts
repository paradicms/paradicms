import {FilterType} from "./FilterType";

export interface Filter {
  readonly label: string;
  readonly type: FilterType;
}
