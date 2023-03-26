import {NamedModel} from "./NamedModel";
import {HasLabel} from "./mixins";
import {Mixin} from "ts-mixer";

export class Property extends Mixin(NamedModel, HasLabel) {}
