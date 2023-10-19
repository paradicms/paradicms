import {mapTermToNumber} from "@paradicms/rdf";
import {schema} from "@paradicms/vocabularies";
import {Mixin} from "ts-mixer";
import {Memoize} from "typescript-memoize";
import {Location} from "../Location";
import {SchemaModel} from "./SchemaModel";

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
