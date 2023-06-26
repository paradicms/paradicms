import {Mixin} from "ts-mixer";
import {ResourceBackedModel} from "../ResourceBackedModel";
import {schema} from "@paradicms/vocabularies";
import {
  mapTermToBoolean,
  mapTermToNumber,
  mapTermToString,
} from "@paradicms/rdf";

export class SchemaQuantitativeValue extends Mixin(ResourceBackedModel) {
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
