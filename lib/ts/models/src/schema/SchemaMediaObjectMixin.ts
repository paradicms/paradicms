import {Mixin} from "ts-mixer";
import {SchemaCreativeWorkMixin} from "./SchemaCreativeWorkMixin";

export abstract class SchemaMediaObjectMixin extends Mixin(
  SchemaCreativeWorkMixin
) {}
