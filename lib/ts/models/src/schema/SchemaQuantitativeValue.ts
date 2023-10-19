import {
  mapTermToBoolean,
  mapTermToNumber,
  mapTermToString,
} from "@paradicms/rdf";
import {schema} from "@paradicms/vocabularies";
import {Mixin} from "ts-mixer";
import {Memoize} from "typescript-memoize";
import {SchemaModel} from "./SchemaModel";

export class SchemaQuantitativeValue extends Mixin(SchemaModel) {
  @Memoize()
  get maxValue(): number | null {
    return this.findAndMapObject(schema.maxValue, mapTermToNumber);
  }

  @Memoize()
  get value(): boolean | number | string | null {
    return this.findAndMapObject(schema.value, term => {
      for (const mapper of [
        mapTermToBoolean,
        mapTermToNumber,
        mapTermToString,
      ]) {
        const value = mapper(term);
        if (value !== null) {
          return value;
        }
      }
      return null;
    });
  }
}
