import {ModelToRdfTriple} from "./ModelToRdfTriple";

export interface Model {
  toRdf(): readonly ModelToRdfTriple[];
  readonly uri: string | null;
}
