import {Mixin} from "ts-mixer";
import {schema} from "@paradicms/vocabularies";
import {
  mapTermToBoolean,
  mapTermToNumber,
  mapTermToString,
} from "@paradicms/rdf";
import {SchemaModel} from "./SchemaModel";

export class SchemaQuantitativeValue extends Mixin(SchemaModel) {
  get maxValue(): number | null {
    return this.findAndMapObject(schema.maxValue, mapTermToNumber);
  }

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
