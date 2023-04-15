import { AgentVisitor } from "./AgentVisitor";
import { CmsAgent } from "./CmsAgent";
import { Organization } from "./Organization";

export class CmsOrganization extends CmsAgent implements Organization {
  override accept<T>(visitor: AgentVisitor<T>): T {
    return visitor.visitOrganization(this);
  }    
}
