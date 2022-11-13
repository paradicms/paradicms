import {TermMap} from "./TermMap";
import {Term} from "@rdfjs/types";

/**
 * Set of Terms.
 */
export class TermSet<TermT extends Term> {
  private readonly map: TermMap<TermT, TermT> = new TermMap();

  add(term: TermT): boolean {
    return typeof this.map.put(term, term) === "undefined";
  }

  has(term: TermT): boolean {
    return this.map.has(term);
  }

  get values(): readonly TermT[] {
    return this.map.values;
  }
}
