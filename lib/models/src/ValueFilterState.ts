import {ValueFilter} from "./ValueFilter";
import {PrimitiveType} from "./PrimitiveType";

export class ValueFilterState<T extends PrimitiveType> {
  private readonly excludeValueSet: Set<T>;
  private readonly includeValueSet: Set<T>;
  private readonly initialFilter: ValueFilter<T>;
  private readonly valueUniverse: readonly T[];

  constructor(kwds: {filter: ValueFilter<T>; valueUniverse: readonly T[]}) {
    this.initialFilter = kwds.filter;
    this.valueUniverse = kwds.valueUniverse;

    // Build sets of the excludeValueSet and includeValueSet values to avoid repeatedly iterating over the arrays.
    this.excludeValueSet = this.initialFilter.excludeValues
      ? new Set(this.initialFilter.excludeValues)
      : new Set();
    this.includeValueSet = this.initialFilter.includeValues
      ? new Set(this.initialFilter.includeValues)
      : new Set();

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

  private change(include: boolean, value: T): void {
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
  }

  excludeValue(value: T): void {
    this.change(false, value);
  }

  includeAll(): void {
    for (const value of this.valueUniverse) {
      this.includeValue(value);
    }
  }

  includeValue(value: T): void {
    this.change(true, value);
  }

  includesValue(value: T): boolean {
    return this.includeValueSet.has(value);
  }

  get snapshot(): ValueFilter<T> {
    if (this.includeValueSet.size === this.valueUniverse.length) {
      return {...this.initialFilter, excludeValues: null, includeValues: null};
    } else if (this.excludeValueSet.size === this.valueUniverse.length) {
      return {
        ...this.initialFilter,
        excludeValues: [...this.excludeValueSet],
        includeValues: null,
      }; // Explicitly exclude all values
    } else if (this.includeValueSet.size >= this.excludeValueSet.size) {
      if (this.excludeValueSet.size === 0) {
        throw new RangeError("must explicitly exclude");
      }
      // excludeValueSet includes fewer values. Those outside it will be included.
      return {
        ...this.initialFilter,
        excludeValues: [...this.excludeValueSet],
        includeValues: null,
      };
    } else {
      // includeValueIdSet includes fewer values. Those outside it will be excluded.
      if (this.includeValueSet.size === 0) {
        throw new EvalError("must explicitly include");
      }
      return {
        ...this.initialFilter,
        excludeValues: null,
        includeValues: [...this.includeValueSet],
      };
    }
  }
}
