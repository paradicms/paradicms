import {Mixin} from "ts-mixer";
import {ResourceBackedModel} from "../ResourceBackedModel";
import {SchemaThingMixin} from "./SchemaThingMixin";

export abstract class SchemaModel extends Mixin(
  ResourceBackedModel,
  SchemaThingMixin
) {}
