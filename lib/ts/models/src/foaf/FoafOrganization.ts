import {Mixin} from "ts-mixer";
import {Organization} from "../Organization";
import {FoafAgent} from "./FoafAgent";

export class FoafOrganization extends Mixin(FoafAgent) implements Organization {
  readonly type: "Organization" = "Organization";
}
