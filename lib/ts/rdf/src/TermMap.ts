import {Term} from "@rdfjs/types";

/**
 * A map of Terms to values.
 */
export class TermMap<TermT extends Term, ValueT> {
  // Bucket terms by type and value
  // In each bucket keep a list of the stored terms to test with .equals()
  private readonly map: {
    [termType: string]: {[termValue: string]: [[TermT, ValueT]]};
  } = {};

  get entries(): readonly {key: TermT; value: ValueT}[] {
    const entries: {key: TermT; value: ValueT}[] = [];
    this.forEachEntry((key, value) => entries.push({key, value}));
    return entries;
  }

  private forEachEntry(callback: (key: TermT, value: ValueT) => void): void {
    for (const termType in this.map) {
      for (const termValue in this.map[termType]) {
        for (const entry of this.map[termType][termValue]) {
          callback(entry[0], entry[1]);
        }
      }
    }
  }

  get keys(): readonly TermT[] {
    const keys: TermT[] = [];
    this.forEachEntry(key => keys.push(key));
    return keys;
  }

  get(term: TermT): ValueT {
    const value = this.getOptional(term);
    if (value) {
      return value;
    } else {
      throw new RangeError(
        `missing termType=${term.termType} value=${term.value}`
      );
    }
  }

  getOptional(term: TermT): ValueT | undefined {
    const termTypeBucket = this.map[term.termType];
    if (!termTypeBucket) {
      return undefined;
    }

    const termValueBucket = termTypeBucket[term.value];
    if (!termValueBucket) {
      return undefined;
    }

    for (const termValueBucketEntry of termValueBucket) {
      if (termValueBucketEntry[0].equals(term)) {
        return termValueBucketEntry[1];
      }
    }
  }

  has(term: TermT): boolean {
    return typeof this.getOptional(term) !== "undefined";
  }

  put(term: TermT, value: ValueT): ValueT | undefined {
    if (typeof value === "undefined") {
      throw new RangeError("undefined values are not allowed");
    }

    let termTypeBucket = this.map[term.termType];
    if (!termTypeBucket) {
      this.map[term.termType] = termTypeBucket = {};
    }

    let termValueBucket: [[TermT, ValueT]] = termTypeBucket[term.value];
    if (!termValueBucket) {
      termTypeBucket[term.value] = [[term, value]];
      return undefined;
    }

    for (const termValueBucketEntry of termValueBucket) {
      if (termValueBucketEntry[0].equals(term)) {
        const existingValue = termValueBucketEntry[1];
        termValueBucketEntry[1] = value;
        return existingValue;
      }
    }
    termValueBucket.push([term, value]);
    return undefined;
  }

  get size(): number {
    let size = 0;
    this.forEachEntry(() => size++);
    return size;
  }

  get values(): readonly ValueT[] {
    const values: ValueT[] = [];
    this.forEachEntry((_, value) => values.push(value));
    return values;
  }
}
