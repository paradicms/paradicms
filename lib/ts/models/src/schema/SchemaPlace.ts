import {Mixin} from "ts-mixer";
import {requireNonNull} from "@paradicms/utilities";
import {schema} from "@paradicms/vocabularies";
import {SchemaModel} from "./SchemaModel";
import {Location} from "../Location";
import {mapTermToNumber} from "@paradicms/rdf";
import {Memoize} from "typescript-memoize";

export class SchemaPlace extends Mixin(SchemaModel) implements Location {
  @Memoize()
  get latitude(): number {
    return requireNonNull(
      this.findAndMapObject(schema.latitude, mapTermToNumber)
    );
  }

  @Memoize()
  get longitude(): number {
    return requireNonNull(
      this.findAndMapObject(schema.longitude, mapTermToNumber)
    );
  }
}
