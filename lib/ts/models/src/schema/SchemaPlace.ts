import {Mixin} from "ts-mixer";
import {schema} from "@paradicms/vocabularies";
import {SchemaModel} from "./SchemaModel";
import {Location} from "../Location";
import {mapTermToNumber} from "@paradicms/rdf";
import {Memoize} from "typescript-memoize";

export class SchemaPlace extends Mixin(SchemaModel) implements Location {
  get centroid() {
    if (this.latitude !== null && this.longitude !== null) {
      return {
        latitude: this.latitude,
        longitude: this.longitude,
      };
    } else {
      return null;
    }
  }

  @Memoize()
  get latitude(): number | null {
    return this.findAndMapObject(schema.latitude, mapTermToNumber);
  }

  @Memoize()
  get longitude(): number | null {
    return this.findAndMapObject(schema.longitude, mapTermToNumber);
  }
}
