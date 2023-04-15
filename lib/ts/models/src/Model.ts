import {ModelSet} from "./ModelSet";
import {ModelToRdfTriple} from "./ModelToRdfTriple";

export interface Model {
  readonly modelSet: ModelSet;
  toRdf(): readonly ModelToRdfTriple[];
}
