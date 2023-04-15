import { WorkEventVisitor } from "../WorkEventVisitor";
import { WorkLocationRole } from "../WorkLocationRole";
import { WorkOpening } from "../WorkOpening";
import { CmsWorkEvent } from "./CmsWorkEvent";

export class CmsWorkOpening extends CmsWorkEvent implements  WorkOpening{
    accept<T>(visitor: WorkEventVisitor<T>): T {
        return visitor.visitWorkOpening(this);
    }

    protected override get workLocationRole(): WorkLocationRole {
        return "Opening";
    }
}
