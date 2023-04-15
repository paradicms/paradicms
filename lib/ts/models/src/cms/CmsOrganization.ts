import { AgentVisitor } from "../AgentVisitor";
import { Organization } from "../Organization";
import { CmsAgent } from "./CmsAgent";

export class CmsOrganization extends CmsAgent implements Organization {
  override accept<T>(visitor: AgentVisitor<T>): T {
    return visitor.visitOrganization(this);
  }    
}
