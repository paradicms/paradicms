import {Mixin} from "ts-mixer";
import {Organization} from "../Organization";
import {CmsAgent} from "./CmsAgent";

export class CmsOrganization extends Mixin(CmsAgent) implements Organization {
  readonly type: "Organization" = "Organization";
}
