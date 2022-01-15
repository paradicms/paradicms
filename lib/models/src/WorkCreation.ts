import {WorkEvent} from "./WorkEvent";
import {Mixin} from "ts-mixer";
import {HasCreators} from "./mixins/HasCreators";

export class WorkCreation extends Mixin(WorkEvent, HasCreators) {}
