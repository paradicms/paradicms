import {Mixin} from "ts-mixer";
import {WorkLocationRole} from "../WorkLocationRole";
import {WorkOpening} from "../WorkOpening";
import {CmsWorkEvent} from "./CmsWorkEvent";

export class CmsWorkOpening extends Mixin(CmsWorkEvent) implements  WorkOpening{
    protected override get workLocationRole(): WorkLocationRole {
        return "Opening";
    }

    readonly type: "WorkOpening" = "WorkOpening";
}
