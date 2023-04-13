import {WorkLocationRole} from "./WorkLocationRole";
import {CmsWorkEvent} from "./CmsWorkEvent";
import {WorkClosing} from "./WorkClosing";
import {WorkEventVisitor} from "./WorkEventVisitor";

export class CmsWorkClosing extends CmsWorkEvent implements WorkClosing {
    accept<T>(visitor: WorkEventVisitor<T>): T {
        return visitor.visitWorkClosing(this);
    }

    protected override get workLocationRole(): WorkLocationRole {
        return "Closing";
    }
}
