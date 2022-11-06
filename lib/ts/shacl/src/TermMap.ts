import {Term} from "n3";

/**
 * A map of Terms to values.
 */
export class TermMap<TermT extends Term, ValueT> {
  private readonly map: {
    [termType: string]: {[termValue: string]: ValueT};
  } = {};

  get(term: TermT): ValueT {
    const value: ValueT = (this.map[term.termType] ?? {})[term.value];
    if (typeof value === "undefined") {
      throw new RangeError(
        `missing termType=${term.termType} value=${term.value}`
      );
    }
    return value;
  }

  has(term: TermT): boolean {
    if (typeof this.map[term.termType] === "undefined") {
      return false;
    }
    if (typeof this.map[term.termType][term.value] === "undefined") {
      return false;
    }
    return true;
  }

  put(term: TermT, value: ValueT): ValueT | undefined {
    if (!this.map[term.termType]) {
      this.map[term.termType] = {};
    }
    const existingValue = this.map[term.termType][term.value];
    this.map[term.termType][term.value] = value;
    return existingValue;
  }

  get values(): readonly ValueT[] {
    const values: ValueT[] = [];
    for (const termType in this.map) {
      for (const termValue in this.map[termType]) {
        values.push(this.map[termType][termValue]);
      }
    }
    return values;
  }
}
