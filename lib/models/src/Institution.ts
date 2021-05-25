import {Rights} from "./Rights";

export interface Institution {
  readonly name: string;
  readonly rights: Rights;
  readonly uri: string;
}
