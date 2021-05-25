import {Property} from "@paradicms/models";

export interface IndexedObject {
  abstract: string | null;
  collectionUris: readonly string[];
  institutionUri: string;
  title: string;
  properties: readonly Property[] | null;
  uri: string;
}
