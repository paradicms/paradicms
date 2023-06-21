import {Mixin} from "ts-mixer";
import {ResourceBackedModel} from "../ResourceBackedModel";
import {schema} from "@paradicms/vocabularies";

export class SchemaQuantitativeValue extends Mixin(ResourceBackedModel) {
  get maxValue(): number | null {
    return this.findAndMapObject(schema.value, term => {
      for (const mapper of [this.mapFloatObject, this.mapIntObject]) {
        const value = mapper(term);
        if (value !== null) {
          return value;
        }
      }
      return null;
    });
  }

  get value(): boolean | number | string | null {
    return this.findAndMapObject(schema.value, term => {
      for (const mapper of [
        this.mapBooleanObject,
        this.mapFloatObject,
        this.mapIntObject,
        this.mapStringObject,
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
