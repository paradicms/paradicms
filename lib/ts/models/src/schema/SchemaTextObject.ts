import {mapTermToString} from "@paradicms/rdf";
import {requireNonNull} from "@paradicms/utilities";
import {schema} from "@paradicms/vocabularies";
import {Mixin} from "ts-mixer";
import {Memoize} from "typescript-memoize";
import {Text} from "../Text";
import {SchemaMediaObjectMixin} from "./SchemaMediaObjectMixin";
import {SchemaModel} from "./SchemaModel";

export class SchemaTextObject extends Mixin(SchemaModel, SchemaMediaObjectMixin)
  implements Text {
  @Memoize()
  get value(): string {
    return requireNonNull(this.findAndMapObject(schema.text, mapTermToString));
  }
}
