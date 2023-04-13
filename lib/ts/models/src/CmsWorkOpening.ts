import {WorkLocationRole} from "./WorkLocationRole";
import {CmsWorkEvent} from "./CmsWorkEvent";
import {WorkOpening} from "./WorkOpening";
import {WorkEventVisitor} from "./WorkEventVisitor";

export class CmsWorkOpening extends CmsWorkEvent implements  WorkOpening{
    accept<T>(visitor: WorkEventVisitor<T>): T {
        return visitor.visitWorkOpening(this);
    }

    protected override get workLocationRole(): WorkLocationRole {
        return "Opening";
    }
}
