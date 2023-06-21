import {Mixin} from "ts-mixer";
import {ResourceBackedNamedModel} from "../ResourceBackedNamedModel";
import {SchemaThingMixin} from "./SchemaThingMixin";

export class SchemaNamedModel extends Mixin(
  ResourceBackedNamedModel,
  SchemaThingMixin
) {}
