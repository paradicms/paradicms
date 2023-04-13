import {WorkLocationRole} from "./WorkLocationRole";
import {CmsWorkEvent} from "./CmsWorkEvent";
import {WorkClosing} from "./WorkClosing";

export class CmsWorkClosing extends CmsWorkEvent implements WorkClosing {
    protected override get workLocationRole(): WorkLocationRole {
        return "Closing";
    }
}
