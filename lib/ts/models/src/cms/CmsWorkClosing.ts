import { WorkClosing } from "../WorkClosing";
import { WorkEventVisitor } from "../WorkEventVisitor";
import { WorkLocationRole } from "../WorkLocationRole";
import { CmsWorkEvent } from "./CmsWorkEvent";

export class CmsWorkClosing extends CmsWorkEvent implements WorkClosing {
    accept<T>(visitor: WorkEventVisitor<T>): T {
        return visitor.visitWorkClosing(this);
    }

    protected override get workLocationRole(): WorkLocationRole {
        return "Closing";
    }
}
