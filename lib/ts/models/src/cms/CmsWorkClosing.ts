import { WorkClosing } from "../WorkClosing";
import { WorkLocationRole } from "../WorkLocationRole";
import { CmsWorkEvent } from "./CmsWorkEvent";

export class CmsWorkClosing extends CmsWorkEvent implements WorkClosing {
    protected override get workLocationRole(): WorkLocationRole {
        return "Closing";
    }

    type: "WorkClosing" = "WorkClosing";
}
