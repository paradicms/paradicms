import {WorkLocationRole} from "./WorkLocationRole";
import {CmsWorkEvent} from "./CmsWorkEvent";
import {WorkOpening} from "./WorkOpening";

export class CmsWorkOpening extends CmsWorkEvent implements  WorkOpening{
    protected override get workLocationRole(): WorkLocationRole {
        return "Opening";
    }
}
