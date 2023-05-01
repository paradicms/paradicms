import {License} from "../License";
import {LiteralModel} from "./LiteralModel";

export class LiteralLicense extends LiteralModel implements License {
  requiresAttribution: boolean = true;
}
