import {Mixin} from "ts-mixer";
import {WorkClosing} from "../WorkClosing";
import {WorkLocationRole} from "../WorkLocationRole";
import {CmsWorkEvent} from "./CmsWorkEvent";

export class CmsWorkClosing extends Mixin(CmsWorkEvent) implements WorkClosing {
    protected override get workLocationRole(): WorkLocationRole {
        return "Closing";
    }

    readonly type: "WorkClosing" = "WorkClosing";
}
