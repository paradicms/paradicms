import {License} from "./License";
import {RightsStatement} from "./RightsStatement";
import {ContributorsMixin} from "./ContributorsMixin";
import {CreatorsMixin} from "./CreatorsMixin";
import {AgentUnion} from "./AgentUnion";

export interface RightsMixin extends ContributorsMixin, CreatorsMixin {
  get licenses(): readonly License[];
  get requiresAttribution(): boolean;
  get rightsHolders(): readonly AgentUnion[];
  get rightsStatements(): readonly RightsStatement[];
}
