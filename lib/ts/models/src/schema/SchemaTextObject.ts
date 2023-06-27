import {SchemaModel} from "./SchemaModel";
import {Text} from "../Text";
import {Mixin} from "ts-mixer";
import {requireNonNull} from "@paradicms/utilities";
import {schema} from "@paradicms/vocabularies";
import {mapTermToString} from "@paradicms/rdf";
import {SchemaMediaObjectMixin} from "./SchemaMediaObjectMixin";

export class SchemaTextObject extends Mixin(SchemaModel, SchemaMediaObjectMixin)
  implements Text {
  get value(): string {
    return requireNonNull(this.findAndMapObject(schema.text, mapTermToString));
  }
}
