import {ValueFilter} from "./ValueFilter";
import {PrimitiveType} from "./PrimitiveType";

export class ValueFilterState<
  ValueT extends PrimitiveType,
  ValueFilterT extends ValueFilter<ValueT>
> {
  private readonly excludeValueSet: Set<ValueT>;
  private readonly includeValueSet: Set<ValueT>;
  private readonly initialFilter: ValueFilterT;
  private _includeUnknown: boolean;
  private readonly valueUniverse: readonly ValueT[];

  constructor(kwds: {filter: ValueFilterT; valueUniverse: readonly ValueT[]}) {
    this.initialFilter = kwds.filter;
    this.valueUniverse = kwds.valueUniverse;

    this._includeUnknown = !this.initialFilter.excludeUnknown;

    // Build sets of the excludeValueSet and includeValueSet values to avoid repeatedly iterating over the arrays.
    if (this.initialFilter.excludeKnown) {
      this.excludeValueSet = new Set(this.valueUniverse);
      this.includeValueSet = new Set();
    } else {
      this.excludeValueSet = this.initialFilter.excludeValues
        ? new Set(this.initialFilter.excludeValues)
        : new Set();
      this.includeValueSet = this.initialFilter.includeValues
        ? new Set(this.initialFilter.includeValues)
        : new Set();
    }

    // If a value is not in one of the sets it's implicitly included.
    this.valueUniverse.forEach(valueId => {
      if (this.excludeValueSet.has(valueId)) {
        if (this.includeValueSet.has(valueId)) {
          throw new RangeError("value ${valueId} both included and excluded");
        }
      } else if (this.includeValueSet.has(valueId)) {
      } else if (
        this.initialFilter?.includeValues &&
        this.initialFilter.includeValues.length > 0
      ) {
        // If the current state explicitly included something then everything not explicitly included is excluded
        this.excludeValueSet.add(valueId);
      } else {
        // If the current state explicitly excluded something then everything not explicitly excluded is included
        this.includeValueSet.add(valueId);
      }
    });

    // console.debug("Exclude value set: " + [...this.excludeValueSet]);
    // console.debug("Include value set: " + [...this.includeValueSet]);
    // console.debug("Value universe: " + this.valueUniverse);

    if (
      this.includeValueSet.size + this.excludeValueSet.size !==
      this.valueUniverse.length
    ) {
      throw new RangeError("sets should account for all values");
    }
    // console.info("Exclude: " + [...this.excludeValueSet]);
    // console.info("Include: " + [...includeValueSet]);
  }

  private change(include: boolean, value: ValueT): void {
    this.excludeValueSet.delete(value);
    this.includeValueSet.delete(value);
    if (include) {
      this.includeValueSet.add(value);
    } else {
      this.excludeValueSet.add(value);
    }
    if (
      this.includeValueSet.size + this.excludeValueSet.size !==
      this.valueUniverse.length
    ) {
      throw new RangeError("sets should account for all values");
    }
  }

  excludeAll(): void {
    for (const value of this.valueUniverse) {
      this.excludeValue(value);
    }
    this.excludeUnknown = true;
  }

  get excludeUnknown() {
    return !this.includeUnknown;
  }

  set excludeUnknown(value: boolean) {
    this._includeUnknown = !value;
  }

  excludeValue(value: ValueT): void {
    this.change(false, value);
  }

  includeAll(): void {
    for (const value of this.valueUniverse) {
      this.includeValue(value);
    }
    this.includeUnknown = true;
  }

  get includeUnknown() {
    return this._includeUnknown;
  }

  set includeUnknown(value: boolean) {
    this._includeUnknown = value;
  }

  includeValue(value: ValueT): void {
    this.change(true, value);
  }

  includesValue(value: ValueT): boolean {
    return this.includeValueSet.has(value);
  }

  get snapshot(): ValueFilterT {
    let excludeKnown: boolean | undefined = undefined;
    let excludeValues: ValueT[] | undefined = undefined;
    let includeValues: ValueT[] | undefined = undefined;

    if (this.includeValueSet.size === this.valueUniverse.length) {
      // Include every value = nothing set
    } else if (this.excludeValueSet.size === this.valueUniverse.length) {
      // Exclude every value = explicitly exclude every value
      excludeKnown = true;
    } else if (this.includeValueSet.size >= this.excludeValueSet.size) {
      if (this.excludeValueSet.size === 0) {
        throw new RangeError("must explicitly exclude");
      }
      // excludeValueSet includes fewer values. Those outside it will be included.
      excludeValues = [...this.excludeValueSet];
    } else {
      // includeValueIdSet includes fewer values. Those outside it will be excluded.
      if (this.includeValueSet.size === 0) {
        throw new EvalError("must explicitly include");
      }
      includeValues = [...this.includeValueSet];
    }

    return {
      ...this.initialFilter,
      excludeKnown,
      excludeUnknown: this.excludeUnknown ? true : undefined,
      excludeValues,
      includeUnknown: this.includeUnknown ? true : undefined,
      includeValues,
    };
  }
}
