import {Mixin} from "ts-mixer";
import {Organization} from "../Organization";
import {CmsAgent} from "./CmsAgent";
import {agentFactories} from "../agentFactories";
import {cms} from "@paradicms/vocabularies";

export class CmsOrganization extends Mixin(CmsAgent) implements Organization {
  readonly type: "Organization" = "Organization";
}

agentFactories.register(cms.Organization, CmsOrganization);
