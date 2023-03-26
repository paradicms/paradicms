import {NamedModel} from "./NamedModel";
import {HasLabel} from "./mixins";
import {Mixin} from "ts-mixer";

export class PropertyGroup extends Mixin(NamedModel, HasLabel) {}
