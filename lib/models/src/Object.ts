import {Property} from "./Property";
import {Rights} from "./Rights";

export interface Object {
  readonly abstract: string | null;
  readonly collectionUris: readonly string[];
  readonly institutionUri: string;
  readonly properties: readonly Property[] | null;
  readonly rights: Rights | null;
  readonly title: string;
  readonly uri: string;
}
