import {WorkEvent} from "./WorkEvent";
import {Mixin} from "ts-mixer";
import {WorkLocationRole} from "./WorkLocationRole";

export class WorkOpening extends Mixin(WorkEvent) {
    protected override get workLocationRole(): WorkLocationRole {
        return "Opening";
    }
}
