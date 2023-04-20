import { WorkLocationRole } from "../WorkLocationRole";
import { WorkOpening } from "../WorkOpening";
import { CmsWorkEvent } from "./CmsWorkEvent";

export class CmsWorkOpening extends CmsWorkEvent implements  WorkOpening{
    protected override get workLocationRole(): WorkLocationRole {
        return "Opening";
    }

    type: "WorkOpening" = "WorkOpening";
}
