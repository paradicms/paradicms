import {Organization} from "../Organization";
import {CmsAgent} from "./CmsAgent";

export class CmsOrganization extends CmsAgent implements Organization {
  readonly type: "Organization" = "Organization";
}
