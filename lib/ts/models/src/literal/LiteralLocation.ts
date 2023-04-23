import {Literal} from "@rdfjs/types";
import {Location} from "../Location";
import {ModelToRdfTriple} from "../ModelToRdfTriple";

export class LiteralLocation implements Location {
  // @ts-ignore
  constructor(private readonly literal: Literal) {}
  lat: number = 0;
  long: number = 0;
  toRdf(): readonly ModelToRdfTriple[] {
    throw new EvalError("not implemented");
  }
  uri: string | null = null;
}
